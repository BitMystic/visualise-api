import styled from "styled-components";
export const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400&family=Prompt:wght@200;400&display=swap');
  background-color: ${({ theme }) => theme.colors.header};
  color: #fff;
  padding-top: 40px;
  
`
export const Title = styled.h1`

  text-align: center;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 34pt;
  margin-bottom:0;

`
export const Subtitle = styled.h2`
  text-align: center;
  font-family: 'Nunito Sans', sans-serif; 
  font-weight: 200;
  font-size: 20pt;
  margin-top: 0;
`
export const Nav = styled.nav`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin-button: 40px;
`
export const Logo = styled.img``

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`
