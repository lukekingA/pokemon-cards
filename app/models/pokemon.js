export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.weight = data.weight
    this.height = data.height
    this.id = data.id
    this.img = data.img || data.sprites.front_default
    this.url = data.url
    //|| data.species.url

  }

  get SimpleTemplate() {
    return `
<div onclick="app.controllers.pokeController.removeTeamMember(${this.id})" class="card">
  <h4 class="card-title">${this.name}</h4>
</div>
    `
  }



  get CardTemplate() {
    return `
<div class="card">
  <img class="card-img-top" src="${this.img}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${this.name}</h4>
    <p class="card-text">
     The ${this.name} is ${this.height} units high and ${this.weight} units heavy.
    </p>
    <button class="btn btn-primary">Add to Pack</button>
  </div>
</div>
    `
  }

}