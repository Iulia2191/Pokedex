import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [name]);

  return (
    <div>
      {pokemon && (
        <div id="pokemon-card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
