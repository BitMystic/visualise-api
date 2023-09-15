import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 10px;
  & > div,
  & > ul {
    flex: 1;
  };

`
export const FooterFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
  
  text-align: right;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 10.5pt;


  color: #fff;

  margin: 10px 0;
  padding: 10px;
  & > div,
  & > ul {
    flex: 1;
  };
`
