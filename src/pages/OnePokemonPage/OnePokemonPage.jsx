

import { useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


function OnePokemonPage() {
    const { pokemonName } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});
  
    useEffect(() => {
        if(pokemonName){
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => setPokemonDetails(data))
            .catch(error => console.log(error));
        }
        
    }, [pokemonName]);
  
    if(!pokemonDetails.length) {
        return (
            <div style={{background: '#131311', width: '100%', height: '100vh'}}>
                <img src='https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg' alt='404'/>
            </div>
        )
        
    }
  
    return (
      <div>
        <h1>{pokemonDetails.name}</h1>
        <p>{pokemonDetails.url}</p>
      </div>
    );
}

export default OnePokemonPage;