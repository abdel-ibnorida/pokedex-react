import Card from '../Card';
import './Cards.css';
import { useState, useEffect } from "react";

const Cards = () => {
    const [pokemons, setPokemons] = useState("");

    useEffect(() => {
        fetch('https://api.npoint.io/fe66263abd4795a809cc').
            then(res => res.json()).
            then(data => setPokemons(data));
    }, []);

    return (
        <div className='cards'>
            {pokemons && pokemons.map((pokemon) => <Card data={pokemon} key={pokemon.id} />)} 
        </div>
    )
}

export default Cards;