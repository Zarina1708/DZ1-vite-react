import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


function PokemonsPage() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
        .then(response => response.json())
        .then(data => setPokemonList(data.results))
        .catch(error => console.log(error));
    }, []);

    return (
        <div style={{textAlign: 'center'}}>
        <h1>Pokemon List</h1>
        <ul style={{fontSize: '2rem', listStyle: 'none'}}>
            {pokemonList.map(pokemon => (
            <li key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default PokemonsPage;