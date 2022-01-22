import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

import styles from './Charts.module.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Charts = ( props ) => {
   
    let chart;

    const [apiDailyData, setApiDailyData] = useState([]);

    useEffect(()=> {
        
        async function fetchApi(){
            const fechedData = await fetchDailyData();
            setApiDailyData(fechedData);
        }
        
        fetchApi();

    }, []);

    const dates = apiDailyData.map( ({ date }) => date );
    const confirmedCases = apiDailyData.map( ({ confirmed }) => confirmed );
    const deathsCases = apiDailyData.map( ({ deaths }) => deaths );

    const LineChartData = {
        labels: dates,
        datasets: [{
            label: 'Infected',
            // fill: true,
            data: confirmedCases,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }, {
            label: 'Deaths',
            //fill: true,
            data: deathsCases,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }],
    };

    const LineChart = (
        apiDailyData.length > 0 
        ? (
            <Line data={LineChartData} />
        ) : null
    );

    chart = LineChart;

    if(props.country !== null){
        const barChart = (
            props.data
            ? (
                <Bar data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                    label: 'Infected',
                    data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.2)',
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(0, 255, 0, 0.2)',
                    ],
                    borderColor: [
                        'rgba(0, 0, 255, 0.6)',
                        'rgba(255, 0, 0, 0.6)',
                        'rgba(0, 255, 0, 0.6)',
                    ],
                    borderWidth: 1
                    }]
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: `Covid-19 Cases ${props.country}`
                        },
                        legend: {
                            display: false,
                        }
                    }
                }}
                />
            ) : null
        );

        chart = barChart;

    }

    //console.log(barChart);
    
    return (
        <div className={styles.container}>
            { chart }
        </div>
    )
}

export default Charts;