import styled from 'styled-components';
import CardPokemonBackground from '../../Assets/CardPokemonBackground.png';

export const DetailsContainer = styled.div`
  display: flex;
  background-color: #fdf5f4;
  height: 100vh;
  width: 100vw;
`;

export const CardPokemon = styled.div`
  width: 45vw;
  border-radius: 15px;
  height: 70vh;
  margin: auto;
  h3 {
    margin-left: 1vw;
  }
`;

export const LeftContainer = styled.div`
  img {
    height: 3vh;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    transform: translateX(-7vw);
  }
  p {
    margin-left: 1vw;
    cursor: pointer;
  }
  margin-left: 10vw;
`;

export const CardPhoto = styled.div`
  background-image: url(${CardPokemonBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 35vw;
  border-radius: 15px;
  height: 50%;
  display: flex;
  justify-content: center;
  img {
    height: 20vh;
    align-self: center;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 35vw;
  border-radius: 15px;
  height: 70%;
  transform: translateY(-30px);

  line-height: 0.1;
`;

export const ContainerAtaques = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30%;
  width: 32vw;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0.1;
  margin-left: 2vw;
`;

export const CardPowers = styled.div`
  strong {
    margin-left: 3vw;
    margin-right: 5vw;
  }
  line-height: 0.1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 40%;
  width: 32vw;
  margin-left: 2vw;
`;
