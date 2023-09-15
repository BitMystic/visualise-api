
import React from 'react';
import Plot from 'react-plotly.js';

export default function PlotData (props) {
    return (
    <Plot
      data={[
        {
          x: props.x,
          y: props.y,
          type: props.plotType,
          mode: props.plotMode,
          marker: {
            color: '#E8C547',
            size: 8
          },
          line: {
            color: '#E8C547',
            width: 3
          }
        },
      ]}
      layout={ 
        { 
          width: 820,
          height: 640,
          title: props.plotTitle + " plot",
          xaxis: {
            title: {
              text: props.xtitle
              },
            },
          yaxis: {
            title: {
              text: props.ytitle
              },
            },
          paper_bgcolor: '#30323D',
          plot_bgcolor: '#30323D',
          font: {
            color: "#fff"
          }
        }
      }
    />
  );
}
