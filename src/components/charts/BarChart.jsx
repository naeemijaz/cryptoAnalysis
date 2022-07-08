import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import axios from 'axios'

export default function BarChart() {

    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get(`https://qberg.mn/api/inflowData`,{
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
            setData(res.data);
            
        })


    },[]);

    const name = [];
    const marks = [];

    for (var i in data) {
        name.push(data[i].pub_day);
        marks.push(data[i].total);
    }

    const state = {
        labels: name,
        datasets: [
          {
            label: 'Inflow Data(BTC)',
            backgroundColor: '#49e2ff',
            borderColor: '#46d5f1',
            hoverBackgroundColor: '#CCCCCC',
            hoverBorderColor: '#666666',
            data: marks
          }
        ]
    }
    return (
        <div>
          <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
    );
}
