import React from "react";
import { ButtonPlot } from "./styles/Button.styled";

export default function ButtonSelectData (props){
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <ButtonPlot
      onClick={handleClick}
      color={flag ? "#30323D" : "#5C80BC"}
      side={props.side}
    >
      {props.text}    
    </ButtonPlot>
  );
}
