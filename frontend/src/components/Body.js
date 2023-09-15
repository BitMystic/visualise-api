import React, { useId } from 'react';
import { Container } from "./styles/Container.styled";
import { Flex , FooterFlex } from "./styles/Flex.styled";
import { StyledBody } from "./styles/Body.styled"
import { InputButtonData, InputButtonPlot, ButtonUpload, ButtonView, ButtonClear } from "./styles/Button.styled"
import { useState } from "react";
import { TextInput} from "./styles/TextInput.styled";
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChartSimple, faCalculator, faLineChart, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { wait } from '@testing-library/user-event/dist/utils';

export default function Body(){
  
  const navigate = useNavigate();

  const [sampleDataFlag, setSampleDataFlag] = useState(false);
  const [randomDataFlag, setRandomDataFlag] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [barPlotFlag, setBarPlotFlag] = useState(false);
  const [distPlotFlag, setDistPlotFlag] = useState(false);
  const [scatterPlotFlag, setScatterPlotFlag] = useState(false);
  const [linePlotFlag, setLinePlotFlag] = useState(false);
  const [inputValueX, setInputValueX] = useState('x-axis');
  const [inputValueY, setInputValueY] = useState('y-axis');
  
  const handleSampleData = () => {
    setSampleDataFlag(true);
    setRandomDataFlag(false);
    setSelectedFile("");
    setInputValueX("sepal length (cm)")
    setInputValueY("sepal width (cm)")
  };

  const handleRandomData = () => {
    setRandomDataFlag(true);
    setSampleDataFlag(false)
    setSelectedFile("")
    setInputValueX("x-axis")
    setInputValueY("y-axis")
  };

  const fileChangeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
    setSampleDataFlag(false)
    setRandomDataFlag(false)
	};

  const handleChangeBarPlot = () => {
    setBarPlotFlag(true);
    setDistPlotFlag(false)
    setScatterPlotFlag(false)
    setLinePlotFlag(false)
    if(sampleDataFlag){
      setInputValueY("sepal width (cm)")
    } else if (randomDataFlag){
      setInputValueY("y-axis")
    }
  };
  const handleChangeDistPlot = () => {
    setBarPlotFlag(false);
    setDistPlotFlag(true)
    setScatterPlotFlag(false)
    setLinePlotFlag(false)
    setInputValueY("-")
  };
  const handleChangeScatterPlot = () => {
    setBarPlotFlag(false);
    setDistPlotFlag(false)
    setScatterPlotFlag(true)
    setLinePlotFlag(false)
    if(sampleDataFlag){
      setInputValueY("sepal width (cm)")
    } else if (randomDataFlag){
      setInputValueY("y-axis")
    }
  };
  const handleChangeLinePlot = () => {
    setBarPlotFlag(false);
    setDistPlotFlag(false)
    setScatterPlotFlag(false)
    setLinePlotFlag(true)
    if(sampleDataFlag){
      setInputValueY("sepal width (cm)")
    } else if (randomDataFlag){
      setInputValueY("y-axis")
    }
  };
  console.log(barPlotFlag)
  let submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // TODO: returnin floats at the moment, need a better to deal with this
    const id = Math.random();
    formData.append("id_req", id);
    formData.append("sampleData", sampleDataFlag)
    formData.append("randomData", randomDataFlag)
    if (selectedFile) {
      formData.append("file", selectedFile)
    } else {
      formData.append("file", "")
    }
    formData.append('plotBar', barPlotFlag);
    formData.append('plotDist', distPlotFlag);
    formData.append('plotScatter', scatterPlotFlag);
    formData.append('plotLine', linePlotFlag);
    formData.append('xaxis', inputValueX);
    formData.append('yaxis', inputValueY);

    try {
      let result = await fetch("/api/files/", {
        method: "POST",
        headers: {
        },
        body: formData,
      });
      let resultJson = await result.json();
      
      // TODO result.Json returns undefined status so the if statement
      // won't work but API calls registering in the backend - 
      // Could investigate this at a later stage - probably to do with.
      if (resultJson.status === 201) {
        console.log("Posted sucessfully")
      } else {
        console.log([...formData])
        console.log("error occurred while posting")
      }
    } catch (err) {
      console.log(err);
    }

    navigate("results/", { state: {id: id} } );

    //try {
    //  let getResult = await fetch("", {
    //    method: "GET",
    //  });
    //  let getResultJson = await getResult.json();

    //  if (getResultJson.status === 200) {
    //    console.log("Retreived")
    //  } else {
    //    console.log("error occured retreiving")
    //  }
    //} catch (err) {
    //  console.log(err)
    //}
  };

  // TODO: right showing multiple pops, need a fix
  function Upload() {
    console.log("button being clicked");
    document.getElementById('buttonid').addEventListener('click', openDialog);
    function openDialog() {
      document.getElementById('fileid').click();
    }
  }


  return (
    <StyledBody>
      <Container>
        <form onSubmit={submit}>
          <Flex>
            <InputButtonData
              type="button"
              side="left"
              value="sample data (iris)"
              onClick={handleSampleData}
              color={sampleDataFlag ? "#5C80BC" : "#30323D"}
            />
            <InputButtonData
              type="button"
              side="right"
              value="random data"
              onClick={handleRandomData} 
              color={randomDataFlag ? "#5C80BC" : "#30323D"}
            />
          </Flex>

          <Flex>
            <input id='fileid' type='file' hidden onChange={fileChangeHandler}/>
            <ButtonUpload 
              onClick={Upload} 
              id='buttonid' 
              type='button' 
              value='Upload' 
              pressed={selectedFile ? true : false}/>
          </Flex>

          <Flex>

            <InputButtonPlot
              type="button"
              side="left"
              onClick={handleChangeBarPlot} 
              color={barPlotFlag ? "#5C80BC" : "#30323D"}
            >
              {<FontAwesomeIcon icon={faChartSimple} />} Bar
            </InputButtonPlot>
            <InputButtonPlot 
              type= "button"
              side="center" 
              onClick={handleChangeDistPlot}
              color={distPlotFlag ? "#5C80BC" : "#30323D"}
            >
              {<FontAwesomeIcon icon={faCalculator} />} Distribution
            </InputButtonPlot>
            
            <InputButtonPlot 
              type= "button"
              side="center" 
              value="Scatter" 
              onClick={handleChangeScatterPlot}
              color={scatterPlotFlag ? "#5C80BC" : "#30323D"}
            >
              {<FontAwesomeIcon icon={faEllipsis} />} Scatter
            </InputButtonPlot>

            <InputButtonPlot 
              type= "button"
              side="right" 
              value="Line" 
              onClick={handleChangeLinePlot} 
              color={linePlotFlag ? "#5C80BC" : "#30323D"}
            >
              {<FontAwesomeIcon icon={faLineChart} />} Line
            </InputButtonPlot>
          </Flex>

          <Flex>
            <TextInput
              value={inputValueX}
              onClick={() => {
                setInputValueX("");
              }}
              onChange={(event) => {
                setInputValueX(event.target.value);
              }}
            />
            <TextInput
              value={inputValueY}
              onClick={() => {
                setInputValueY("");
              }}
              onChange={(event) => {
                setInputValueY(event.target.value);
              }}
            />

          </Flex>
          <Flex>
            {/* could use redirect from react-router-dom */}
            <ButtonClear>Clear</ButtonClear>
              <ButtonView type="submit">View</ButtonView> 
          </Flex>
        </form>
        <FooterFlex>
          <p>designed by Hardaya (qltj43[at]gmail.com)</p> 
        </FooterFlex>
      </Container>
    </StyledBody>
  )
}
