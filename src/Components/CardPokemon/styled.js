import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgb(254, 200, 77, 0.5);
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 60px;
  margin: 15px;
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    margin: 10px;
  }
  img {
    height: 20vh;
  }
`;
