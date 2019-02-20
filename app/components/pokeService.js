import Pokemon from '../models/pokemon.js'
import BasicPokemon from '../models/basePokemon.js'


let apiPokes = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Luke/heroes'
});

let _state = {
  cards: [],
  myCards: [],
  prevNextUrl: {
    nextUrl: '',
    prevUrl: ''
  }
}


let _subscribers = {
  cards: [],
  myCards: [],
  prevNextUrl: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}


export default class PokeService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ApiCards() {
    return _state.cards.map(c => new BasicPokemon(c))
  }

  get MyCards() {
    return _state.myCards.map(c => new Pokemon(c))
  }

  get PreviousUrl() {
    return _state.prevNextUrl.prevUrl
  }

  get NextUrl() {
    return _state.prevNextUrl.nextUrl
  }

  getMyCards() {
    _sandbox.get().then(res => {
      let data = res.data.data.map(c => new Pokemon(c))
      setState('myCards', data)
    })
  }

  addCardMember(url) {
    apiPokes.get(url).then(res => {
      let data = res.data
      let currentPokemon = new Pokemon(data)
      currentPokemon.url = url
      let compare = _state.myCards.filter(card => card.name == currentPokemon.name)

      if (compare[0]) {
        return
      }
      _sandbox.post('', currentPokemon).then(res => {
        this.getMyCards()
      }).catch(err => console.log(err))

    })
  }

  getApiPokes(url = '') {
    apiPokes.get(url).then(res => {
      let data = res.data.results.map(p => new BasicPokemon(p))
      let altUrls = {
        nextUrl: res.data.next,
        prevUrl: res.data.previous
      }
      setState('prevNextUrl', altUrls)
      setState('cards', data)

    }).catch(err => console.log(err))
  }

  removeCard(id) {
    _sandbox.delete(id).then(res => {
      this.getMyCards()
    })
  }

}