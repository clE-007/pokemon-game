import { useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import database from '../../service/firebase';


import s from './style.module.css';

const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    const handleClickPokemon = (key) => () => {
        const pokemon = { ...pokemons[key] };
        pokemon.active = !pokemon.active;
        database
            .ref('pokemons/' + key)
            .set(pokemon)
            .then(() =>setPokemons(prevState => ({
                ...prevState,
                [key]: pokemon
            }))).catch(err => console.log(err));
    }

    const handleAddNewPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        const pokemon = pokemons['-MSjWsPo_nEu6XI67Jjz'];

        database
            .ref('pokemons/' + newKey)
            .set(pokemon)
            .then(() => setPokemons(prevState => ({
                ...prevState,
                [newKey]: pokemon
            }))).catch(err => console.log(err));
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    return (
        <>
        <button className={s.button} onClick={handleAddNewPokemon}>Add new pokemon</button>
        <div className="flex">
                {
                    Object.entries(pokemons).map(([key, { name, id, img, type, values, active }]) => (
                        <PokemonCard
                            key={key}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            isActive={active}
                            onClick={handleClickPokemon(key)}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GamePage;