export default class BasicPokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }
  get SimpleTemplate() {
    return `
<div onclick="app.controllers.pokeController.addCardMember('${this.url}')" class="card">
  <h4 class="card-title text-center">${this.name}</h4>
</div>
    `
  }
}