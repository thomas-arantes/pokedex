import React, { useEffect, useContext, useState } from 'react';
import { Button } from '../Button/Button';
import { CardContainer } from './styled';
import { goToDetails } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStateContext from '../../Global/GlobalStateContext';

export function CardPokemon(props) {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [pokemonPhoto, setPokemonPhoto] = useState();
  const history = useHistory();
  useEffect(() => {
    getPokemonPhoto(props.name);
  }, []);

  const getPokemonPhoto = (pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((resposta) => {
        setPokemonPhoto(resposta.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <CardContainer backgroundImage={props.backgroundImage}>
      <img src={pokemonPhoto} />
      <h3>{props.name}</h3>
      <div>
        <Button
          text={"Adicionar a Pokedex"}
          background="#E42256"
          width="220px"
          hoverBackground="#FF8370"
          onClick={props.onClickButton}
        />
        <Button
          text="Ver Detalhes"
          background="#E42256"
          width="220px"
          hoverBackground="#FF8370"
          onClick={props.onClickGoDetails}
        />
      </div>
    </CardContainer>
  );
}
