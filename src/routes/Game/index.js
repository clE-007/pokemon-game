import { useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import {dataPokemons} from '../../constants/dataPokemons';

const GamePage = () => {
    const [pokemons, setPokemons] = useState(dataPokemons);

    const handleClickPokemon = (id) => () => {
        setPokemons(prevState => prevState.map(item => {
            const newItem = {...item};
            if(newItem['id'] === id) {
                newItem['active'] = !newItem['active']
            }
            return newItem;
        }))
    }
    return (
        <div className="flex">
                {
                    pokemons.map(({ name, id, img, type, values, active }) => (
                        <PokemonCard
                            key={id}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            isActive={active}
                            onClick={handleClickPokemon(id)}
                        />
                    ))
                }
            </div>
    );
};

export default GamePage;