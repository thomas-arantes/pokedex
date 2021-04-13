import React, { useContext, useState, useEffect } from 'react';
import {
  CardPokemon,
  CardPhoto,
  CardDetails,
  ContainerAttacks,
  CardPowers,
  Header,
  TypeCard,
  BackButtonContainer,
  LeftContainer
} from './styled';
import { goBack } from '../../Router/Coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { DetailsContainer } from './styled';
import arrowIcon from '../../Assets/arrowIcon.svg';
import GlobalStateContext from '../../Global/GlobalStateContext';
import axios from 'axios'

export function DetailsPage() {
  const history = useHistory();
  const pathParams = useParams()
  const { states, setters, requests } = useContext(GlobalStateContext)
  const [pokemonPhoto, setPokemonPhoto] = useState()
  const [PokemonPhotoBack, setPokemonPhotoBack] = useState()
  const [pokemonStats, setPokemonStats] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])
  useEffect(() => {
    getPokemonPhoto() 
    
  }, []);
  
  useEffect(() => {
    console.log(pokemonStats)
    
  }, [pokemonStats]);
  
  const getPokemonPhoto = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pathParams.name}`)
      .then((resposta) => {
        setPokemonPhoto(resposta.data.sprites.front_default);
        setPokemonPhotoBack(resposta.data.sprites.back_default)
        setPokemonStats(resposta.data.stats)
        setPokemonMoves(resposta.data.moves)
        setPokemonTypes(resposta.data.types)
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  return (
    <DetailsContainer>
      <BackButtonContainer>
        <Header>
          <img src={arrowIcon} onClick={() => goBack(history)} />
        </Header>
      </BackButtonContainer>

      <LeftContainer>
        <TypeCard>
            <h1>{pathParams.name}</h1>
            <h4>{pokemonTypes.length ? `${pokemonTypes[0].type.name}`: ""}</h4>
            <h4>{pokemonTypes.length > 1 ? `${pokemonTypes[1].type.name}`: ""}</h4>
            <h4>{pokemonTypes.length > 2 ? `${pokemonTypes[1].type.name}`: ""}</h4>
        </TypeCard>

        <CardPokemon>
          <CardPhoto>
            <img src={pokemonPhoto} />
          </CardPhoto>
          <CardPhoto>
            <img src={PokemonPhotoBack} />
          </CardPhoto>
        </CardPokemon>
      </LeftContainer>

      <CardDetails>
        <h3>Poderes</h3>
          <CardPowers>
            <p>{pokemonStats.length ? `${pokemonStats[0].stat.name} :`: ""}<strong>{pokemonStats.length ? `${pokemonStats[0].base_stat} `: ""}</strong></p>
            <p>{pokemonStats.length ? `${pokemonStats[1].stat.name} :`: ""}<strong>{pokemonStats.length ? `${pokemonStats[1].base_stat} `: ""}</strong></p>
            <p>{pokemonStats.length ? `${pokemonStats[2].stat.name} :`: ""}<strong>{pokemonStats.length ? `${pokemonStats[2].base_stat} `: ""}</strong></p>
            <p>{pokemonStats.length ? `${pokemonStats[3].stat.name} :`: ""}<strong>{pokemonStats.length ? `${pokemonStats[3].base_stat} `: ""}</strong></p>
            <p>{pokemonStats.length ? `${pokemonStats[4].stat.name} :`: ""}<strong>{pokemonStats.length ? `${pokemonStats[4].base_stat} `: ""}</strong></p>
            <p>{pokemonStats.length ? `${pokemonStats[5].stat.name} :`: ""}<strong>{pokemonStats.length ? `${pokemonStats[5].base_stat} `: ""}</strong></p>
          </CardPowers>
        <h3>Principais Ataques</h3>
          <ContainerAttacks>
            <p>{pokemonMoves.length ? pokemonMoves[0].move.name : ""}</p>
            <p>{pokemonMoves.length ? pokemonMoves[1].move.name : ""}</p>
            <p>{pokemonMoves.length ? pokemonMoves[2].move.name : ""}</p>
            <p>{pokemonMoves.length ? pokemonMoves[3].move.name : ""}</p>
            <p>{pokemonMoves.length ? pokemonMoves[4].move.name : ""}</p>
          </ContainerAttacks>
      </CardDetails>
    </DetailsContainer>
  );
}
