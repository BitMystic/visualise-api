import styled from "styled-components";

export const TextInput = styled.input`
  position: center;
  width: 260px;
  height: 38px;
  margin: 1%;
  box-shadow: 0 0 15px rgba(0,0,0,0.12);

  font-family: 'Prompt', sans-serif;
  font-weight: 400;


  font-size: inherit;
  text-align: center
  color: #fff;
  border: 0px;
  background-color: #30323D;
  &:focus {
    outline: none;
  }
`;
