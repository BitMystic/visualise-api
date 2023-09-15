import React from 'react';
import { StyledHeader, Nav, Logo, Image, Subtitle, Title} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./static/images/logo.svg" alt="" />
        </Nav> 
          <Title>Visualise</Title>
          <Subtitle>Upload or choose an example dataset</Subtitle>
      </Container>
    </StyledHeader>
  )
}
