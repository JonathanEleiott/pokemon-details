import { useEffect, useState } from 'react';

const PokemonList = ({ setShowDetails, setSinglePokemonDetailsURL }) => {
  const [allPokemonList, setAllPokemonList] = useState([])
  
  useEffect(() => {
    const getPokemon = async() => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const responseJson = await response.json();
      const allPokemon = responseJson.results;
      setAllPokemonList(allPokemon);
    }
    getPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon List</h1>
      {
        allPokemonList.map((singlePokemon) => {
          return (
            <div className="card" onClick={() => {
              setShowDetails(true);
              setSinglePokemonDetailsURL(singlePokemon.url);
            }} key={singlePokemon.name}>
              <h2>{singlePokemon.name}</h2>
              <p>Description of the pokemon</p>
            </div>
          )
        })
      }
    </>
  )
}

export default PokemonList;