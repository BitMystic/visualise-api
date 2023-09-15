import React from "react";
import { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Plot from  "./PlotData" 
import { StyledBody } from "./styles/Body.styled";
import { Container } from "./styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { ResultsFlex } from "./styles/ResultsFlex.styled";
import { StyledHeader, Nav, Logo, Image, Subtitle, Title} from "./styles/Header.styled";


const theme = {
  colors: {
    header: "#e4d5061",
    body: "#4d5061",
    footer: "#003333"
  }
}

const Results = () => {
  
  const location = useLocation(); // get POST req id from navigation hook

  let [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  
  let getData = async () => {
    let response = await fetch('/api/results/' + location.state.id + "/")
    let data = await response.json()
    setData(data)
  }

  
  // TODO the folowing logic could be better
  const x_name = data.length === "" ? "...loading" : data.xaxis_name
  const y_name = data.length === "" ? "...loading" : data.yaxis_name
  const x = data.length === 0 ? "...loading" : data.data[x_name]
  const y = data.length === 0 ? "...loading" : data.data[y_name]
  const xtitle = data.length === 0 ? "...loading" : data.xaxis_name
  const ytitle = data.length === 0 ? "...loading" : data.yaxis_name
  const plotTitle = data.length === "" ? "...loading" : data.plot
  
  let kindOfPlot = function () {
     if (plotTitle === "Scatter") {
      const plotType = 'scatter'
      const plotMode = 'markers'
      return {plotType, plotMode}
    }
    if (plotTitle === "Line") {
      const plotType = 'scatter'
      const plotMode = 'lines+markers'
      return {plotType, plotMode}
    }
    if (plotTitle === "Bar") {
      const plotType = 'bar'
      const plotMode = 'bar'
      return {plotType, plotMode}
    }
    if (plotTitle === "Distribution") {
      const plotType = 'scatter'
      const plotMode = 'lines'
      return {plotType, plotMode}
    } else {
      return ("", "")
    }
  }

  let {plotType, plotMode} = kindOfPlot()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <>
          <StyledHeader>
            <Container>
              <Title>Results</Title>
            </Container>
          </StyledHeader>

          <StyledBody>
            <Container>
              <ResultsFlex>
                <Plot 
                  x={x}
                  y={y} 
                  plotTitle={plotTitle}
                  plotMode={plotMode}
                  plotType={plotType}
                  xtitle={xtitle}
                  ytitle={ytitle}
                />
              </ResultsFlex>
            </Container>
          </StyledBody>
        </>
    </ThemeProvider >
  );
};
  
export default Results;
