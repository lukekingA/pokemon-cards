import PokeService from './pokeService.js'

let _pkService = new PokeService()

function drawPokemons() {
  let pokes = _pkService.ApiCards
  let template = ''
  pokes.forEach(p => {
    template += p.SimpleTemplate
  })
  document.querySelector('#pokeAvaliable').innerHTML = template
}

function drawTeam() {
  let pokes = _pkService.ApiCards
  let template = ''
  pokes.forEach(p => {
    template += p.CardTemplate
    //put in button to delete
  })
}

export default class PokeController {
  constructor() {
    _pkService.addSubscriber('cards', drawPokemons)
    _pkService.addSubscriber('myCards', drawTeam)
  }


}