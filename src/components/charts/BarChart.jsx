import { CanvasJSChart } from 'canvasjs-react-charts'
import React from 'react'

export default function BarChart() {

    const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Apple",  y: 16590  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
         }]
     }

  return (
    <CanvasJSChart options = {options}/>
  )
}
