import React, { useEffect, useState, useContext } from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToDetails, goToPokedex } from '../../Router/Coordinator';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';
import { HomeContainer, PokemonsContainer } from './styled';
import GlobalStateContext from '../../Global/GlobalStateContext';

export function HomePage() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const history = useHistory();

  useEffect(() => {
    requests.getPokemons();
  }, []);

  const addPokemonToPokedex = (pokemon) => {
    pokemon.renderHome = false
    let newPokedex = [...states.pokedex];
    let alreadyExists = false;
    newPokedex.map((pokedexPokemon) => {
      if (pokedexPokemon.name === pokemon.name) {
        alert(`${pokemon.name} já está na pokedex!`);
        alreadyExists = true;
      }
    });
    if (alreadyExists === false) {
      newPokedex.push(pokemon);
      setters.setPokedex(newPokedex);
      alert(`${pokemon.name} foi adiciona a sua pokedex`);
      console.log(states.pokedex);
    } else {
      alreadyExists = false;
    }
  };
  console.log("pokemons", states.pokemon)
  const renderPokemons =
    states.pokemons &&
    states.pokemons.map((pokemon) => {
      if(pokemon.renderHome===true){
      return (
        <CardPokemon
          button1="add pokedex"
          name={pokemon.name}
          onClickButton={() => addPokemonToPokedex(pokemon)}
          onClickGoDetails={()=> goToDetails(history,pokemon.name)}
        />
      )};
    });

  return (
    <HomeContainer>
      <Header
        text1="Ir para Pokedex"
        title="Lista de Pokemons"
        onClick={() => goToPokedex(history)}
      />
      <PokemonsContainer>{renderPokemons}</PokemonsContainer>
    </HomeContainer>
  );
}
