const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const db = db.connection("urltoDB");

const pokemon = [
  { name: "Pikachu", type: "Electric", id: 25 },
  { name: "Bulbasaur", type: "Grass", id: 1 },
  { name: "Charmander", type: "Fire", id: 4 },
];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  //   const result = db.query("SELECT * FROM pokemon", (err, results) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(results);
  //     }
  //   });
  //  res.send(result);
});

// app.get("/pokemon", (req, res) => {
//   res.send("You already gots all the pokemons!");
// });

// get all
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// get by id
app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const foundPokemon = pokemon.find((pokemon) => pokemon.id == id);
  if (foundPokemon) {
    res.send(foundPokemon);
  } else {
    res.status(404).send("Pokemon not found!");
  }
});

// create
app.post("/pokemon", (req, res) => {
  // logic to map to a model and reject if the data is not valid
  // IE Does not have an id.
  pokemon.push(req.body);
  res.send("Pokemon added!");
});

// update
app.put("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const foundPokemon = pokemon.find((pokemon) => pokemon.id == id);
  if (foundPokemon) {
    Object.assign(foundPokemon, req.body);
    res.send("Pokemon updated!");
  } else {
    res.status(404).send("Pokemon not found!");
  }
});

// delete
app.delete("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const foundPokemonIndex = pokemon.findIndex((pokemon) => pokemon.id == id);
  // auth really helps this be more secure
  // you can logged in user from request vs owner userid for the pokemon
  /**
   * if(foundPokemon.ownerId !== req.user.id) {
   * res.status(403).send("You do not have permission to delete this pokemon");
   * return;
   * }
   *
   */
  if (foundPokemonIndex > -1) {
    pokemon.splice(foundPokemonIndex, 1);
    res.send("Pokemon deleted!");
  } else {
    res.status(404).send("Pokemon not found!");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000, better go catch it!");
});
