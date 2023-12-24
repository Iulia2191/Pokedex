import  { useState } from "react";

function Search() {

  const [inputData, setInputData] = useState("");
  const [pokemon, setPokemon] = useState(null);


  const fetchPokemon = async () => {
    try {
      
      const lowercasedInput = inputData.toLowerCase();

    
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowercasedInput}`
      );
      const data = await response.json();

     
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  return (
    <div>
      <h2>Search Pokemon</h2>

     
      <div className="search-box">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter Pokemon name"
        />

     
        <button onClick={fetchPokemon}>Search</button>
      </div>

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

export default Search;
