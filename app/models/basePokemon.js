export default class BasicPokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }
  get SimpleTemplate() {
    return `
<button type="button" onclick="app.controllers.pokeController.addCardMember('${this.url}')" class="btn btn-warning text-white m-2">
  <h4 class=" text-center">${this.name}</h4>
</button>
    `
  }
}