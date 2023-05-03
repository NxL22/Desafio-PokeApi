import Context from '../../context'
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './pokemonList.css';

export default function PokemonList() {
    const { pokemons } = useContext(Context);
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();

    const goToPokemon = () => {
        navigate(`/pokemon/${pokemon}`);
    };

    return (
        <>
            <div className="pokemon-list">
                <div className="select-pokemon">
                    <Form.Select
                        value={pokemon}
                        onChange={(event) => setPokemon(event.target.id)}
                    >
                        <option disabled selected>
                            Selecciona tu Pokemon
                        </option>
                        {pokemons.map((pokemon) => (
                            <option
                                id={pokemon.id}
                                key={pokemon.name}
                                value={pokemon.name}
                            >
                                {pokemon.name}
                            </option>
                        ))}
                    </Form.Select>
                </div>
                <Button
                    className="view-pokemon"
                    onClick={() => goToPokemon()}
                    variant="success"
                >
                    ver pokemon
                </Button>
            </div>
        </>
    );
}



