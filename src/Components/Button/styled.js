import styled from 'styled-components';

export const ButtonContainer = styled.button`
  color: white;
  background-color: ${(props) => props.background};
  border: none;
  cursor: pointer;
  height: 45px;
  width: ${(props) => props.width};
  border-radius: 120px;
  font-weight: bold;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${(props) => props.hoverBackground};
  }
`;
