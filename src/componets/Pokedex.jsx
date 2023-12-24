import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="pokedex">
      <h2>All Pokemon</h2>
      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.name}>
        
            <Link className="link" to={`/pokemon/${pokemon.name.toLowerCase()}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.substring(
                  pokemon.url.length - 2,
                  pokemon.url.length - 1
                )}.png`}
                alt={pokemon.name}
              />
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
