import Pokemon from '../models/pokemon.js'



let apiPokes = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/LukeA/heros'
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
  addSubscriber(prop.fn) {
    _subscribers[prop].push(fn)
  }

  get ApiCards() {
    return _state.cards.map(c => new Pokemon(c))
  }

  get MyCards() {
    return _state.myCards.map(c => new Pokemon(c))
  }

  addTeamMember(url) {
    apiPokes.get(url).then(res => {

    })
  }

  getApiPokes(url = '') {
    apiPokes.get().then(res => {
      let data = res.data.results.map(p => new Pokemon(p))
      let altUrls = {
        nextUrl: res.data.next,
        prevUrl: res.data.previous
      }
      setState('prevNextUrl', altUrls)
      setState('cards', data)

    })
  }

}