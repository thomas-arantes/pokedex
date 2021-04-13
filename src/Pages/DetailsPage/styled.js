import styled from 'styled-components';
import CardPokemonBackground from '../../Assets/CardPokemonBackground.png';

export const Header = styled.div`
  background-color: salmon;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

export const TypeCard = styled.div`
  background-color: white;
  border-radius: 15px;
  margin-top: 15px;
  width: 420px;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `;

export const DetailsContainer = styled.div`
  display: flex;
  background-color: #fdf5f4;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

export const CardPokemon = styled.div`
  width: 550px;
  border-radius: 15px;
  height: 550px;
`;

export const BackButtonContainer = styled.div`
  img {
    height: 3vh;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    transform: translateX(-7vw);
  }
  margin-left: 10vw;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  `

export const CardPhoto = styled.div`
  background-image: url(${CardPokemonBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
  width: 300px;
  border-radius: 15px;
  height: 300px;
  display: flex;
  justify-content: center;
  img {
    height: 190px;
    align-self: center;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  border-radius: 15px;
  height: 550px;
  line-height: 0.1;
  margin-top: 45px;
`;

export const ContainerAttacks = styled.div`
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
