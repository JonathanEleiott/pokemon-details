import { useEffect, useState } from 'react';

const PokemonDetails = ({ singlePokemonDetailsURL, setShowDetails }) => {
  const [singlePokemonDetails, setSinglePokemonDetails] = useState({});

  useEffect(() => {
    const getSinglePokemon = async() => {
      const response = await fetch(singlePokemonDetailsURL);
      const singlePokemon = await response.json();
      setSinglePokemonDetails(singlePokemon);
    }
    getSinglePokemon();
  }, [])

  return (
    <>
      <h1>Pokemon Details</h1>
      {
        singlePokemonDetails.sprites && <img src={singlePokemonDetails.sprites.front_default} alt={`${singlePokemonDetails.name}'s picture`} />
      }
      <p>{singlePokemonDetails.name}</p>

      <button onClick={() => setShowDetails(false)}>Back</button>
    </>
  )
}

export default PokemonDetails;