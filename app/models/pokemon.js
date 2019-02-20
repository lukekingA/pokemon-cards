export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url
    // if (!data.id) {
    //   return
    // }
    this.id = data.id || data._id
    // this.weight = data.weight
    this.description = data.name
    this.img = data.img || data.sprites.front_default
  }

  get CardTemplate() {
    return `
<div class="col col-sm-4">
<div class="card">
  <img class="card-img-top" src="${this.img}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${this.name}</h4>
    
    <button class="btn btn-primary" onclick="app.controllers.pokeController.removeCard('${this.id}')">Remove from Pack</button>
  </div>
</div>
</div>
    `
  }

}