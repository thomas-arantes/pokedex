import React from 'react';
import { ButtonContainer } from './styled';
export function Button(props) {
  return (
    <ButtonContainer
      onClick={props.onClick}
      width={props.width}
      background={props.background}
      hoverBackground={props.hoverBackground}
    >
      {props.text}
    </ButtonContainer>
  );
}
