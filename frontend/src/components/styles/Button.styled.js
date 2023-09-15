import styled from "styled-components";

export const InputButtonData = styled.input`
  border-radius: ${props => props.side === "left" ? "18px 0px 0px 18px" : "0px 18px 18px 0px"};
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.12);
  cursor: pointer;
  font-size: 16px;
  padding: 15px 60px;
  background-color: ${({color}) => color || "#30323D"};
  color: white;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
  width: 280px;
  height: 55px;
`
export const ButtonUpload = styled.input`
  border-radius: 50px;
  border: 0px;
  position: center;
  width: 300px;
  height: 55px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  color: #30323D;
  background-color: #fff; {/* in future could change this to a white for causing action*/}
  font-family: 'Prompt', sans-serif;
  font-weight: 400;

  
  &:hover {
  opacity: 0.7;
  transform: scale(0.90);
  }
  
  opacity: ${({pressed}) => pressed && 0.7};
  transform: ${({pressed}) => pressed && "scale(0.9)"};
`
export const InputButtonPlot = styled.button`
  width: 230px;
  height: 142px;
  border-radius: ${({side}) =>
    side === "left" && "18px 0px 0px 18px" ||
    side === "right" && "0px 18px 18px 0px" ||
    "0px"
  };
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.12);
  cursor: pointer;
  background-color: ${({color}) => color || "#30323D"};
  color: white;
  line-height: 41px;
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`
export const ButtonView = styled.button`
  position: center;
  width: 169px;
  height: 67px;
  left: 741px;
  top: 857px;
  margin-left: 2%;
  cursor: pointer;

  background: #5C80BC;
  color: #fff;
  border-radius: 5px;
  border: 0px;

  font-size: 22px;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
`
export const ButtonClear = styled.button`
  position: center;
  width: 169px;
  height: 67px;
  left: 741px;
  top: 857px;
  margin-right: 2%;
  cursor: pointer;

  background: #30323D;
  color: #fff;
  border-radius: 5px;
  border: 0px;

  font-size: 22px;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
`
