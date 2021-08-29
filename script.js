const poke_container = document.getElementById('poke_container');
const pokemons_number = 50;

const fetchPokemons = async () => {
  for(let i=1; i<=pokemons_number; i++)
    {
      await getPokemon(i);
    }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  createPokemonCard(pokemon);
}
function createPokemonCard(pokemon)
{
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const name = pokemon.name.toUpperCase();
    const pokeInnerHTML = `
  <div class="img-container">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
  </div>
  <div class="info">
  <span class="number">#${pokemon.id}</span>
  <h3 class="name">${name}</h3>
  <h4>Ability </h4>
  <span class="ability">${pokemon.abilities[0].ability.name.toUpperCase()}</span>
  <div class="move">
   <h4>Moves </h4>
  <span class="moves">1.${pokemon.moves[0].move.name.toUpperCase()}</span> <br>
  <span class="moves">2.${pokemon.moves[1].move.name.toUpperCase()}</span> <br> 
 <span class="moves">3.${pokemon.moves[2].move.name.toUpperCase()}</span>   <br>
 <span class="moves">4.${pokemon.moves[3].move.name.toUpperCase()}</span> <br>
 <h4>Weight </h4>
 <span class="moves">${pokemon.weight}/kg</span> <br>
 </div>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
  
  document.getElementById("poke_container").appendChild(pokemonEl);
}
// fetchPokemons();
document.getElementById("clickMe").onclick = fetchPokemons;
