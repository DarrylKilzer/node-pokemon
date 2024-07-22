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

  //method to add a pokemon
  async add(pokemon) {
    const response = await this.axios.post(this.baseUrl, pokemon);
    return response.data;
  }

  //method to update a pokemon
  async update(pokemon) {
    const response = await this.axios.put(
      `${this.baseUrl}/${pokemon.id}`,
      pokemon
    );
    return response.data;
  }

  //method to delete a pokemon
  async delete(id) {
    const response = await this.axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}
