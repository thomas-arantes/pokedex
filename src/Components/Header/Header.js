import React from 'react';
import { HeaderContainer, ButtonHeaderContainer } from './styled';
import { Button } from '../Button/Button';

export function Header(props) {
  return (
    <HeaderContainer>
      <ButtonHeaderContainer>
        <Button
          text={props.text1}
          onClick={props.onClick}
          width="160px"
          background="#FEC84D"
          hoverBackground="#E42256"
        />
      </ButtonHeaderContainer>
      <h1>{props.title}</h1>
    </HeaderContainer>
  );
}
