import React, { useContext } from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../Router/Coordinator';
import { PokedexContainer } from './styled';
import CardPokemonBackground from '../../Assets/CardPokemonBackground.png';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';
import GlobalStateContext from '../../Global/GlobalStateContext';
import { PokemonsContainer } from '../HomePage/styled';

export function PokedexPage() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const removePokemonFromPokedex = (pokemon) => {
    let newPokedex = [...states.pokedex]
    newPokedex.map((pokedexPokemon) => {
      if (pokedexPokemon.name === pokemon.name) {
        alert(`${pokemon.name} removido de sua pokedex!`);
        let index = newPokedex.indexOf(pokemon)
        console.log(index)
        newPokedex.splice(index,1)
        console.log(newPokedex)
        setters.setPokedex(newPokedex)
        console.log("poledex",states.pokedex)
      }})

   
  }

  const renderPokemons = states.pokedex.map((pokemon) => {
    return (
      <CardPokemon
        button1="remover pokedex"
        name={pokemon.name}
        backgroundImage={CardPokemonBackground}
        onClickButton={() => removePokemonFromPokedex(pokemon)}
      />
    );
  });
  const history = useHistory();
  return (
    <PokedexContainer>
      <Header
        text1="Voltar para lista de pokemons"
        title="Pokedex"
        onClick={() => goToHome(history)}
      />
      <PokemonsContainer>{renderPokemons}</PokemonsContainer>
    </PokedexContainer>
  );
}
