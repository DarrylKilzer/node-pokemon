const myPokemon = [];
const currentPokemon = {};

class PokemonService {
  axios = require("axios");
  baseUrl = "http://localhost:3000/pokemon";

  //method to retrieve all pokemon
  async getAll() {
    const response = await this.axios.get(this.baseUrl);
    myPokemon = response.data;
  }

  //method to retrieve a single pokemon
  async getById(id) {
    const response = await this.axios.get(`${this.baseUrl}/${id}`);
    currentPokemon = response.data;
  }
}
