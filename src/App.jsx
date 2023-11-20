import './App.css';
import PokemonList from './PokemonList.jsx';
import PokemonDetails from './PokemonDetails.jsx';
import { useState } from 'react';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [singlePokemonDetailsURL, setSinglePokemonDetailsURL] = useState('');

  return (
    <>
      <h1>Pokedex</h1>

      {
        showDetails ? 
          <PokemonDetails 
            singlePokemonDetailsURL={singlePokemonDetailsURL} 
            setShowDetails={setShowDetails}
          /> : 
          <PokemonList 
            setShowDetails={setShowDetails} 
            setSinglePokemonDetailsURL={setSinglePokemonDetailsURL}
          />
      }
    </>
  )
}

export default App
