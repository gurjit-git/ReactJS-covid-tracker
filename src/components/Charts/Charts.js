import { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

import styles from './Charts.module.css';

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = () => {
    const [apiDailyData, setApiDailyData] = useState([]);

    useEffect(()=> {
        
        async function fetchApi(){
            const data = await fetchDailyData();
            setApiDailyData(data);
        }
        
        fetchApi();

    }, []);

    const dates = apiDailyData.map( ({ date }) => date );
    const confirmed = apiDailyData.map( ({ confirmed }) => confirmed );
    const deaths = apiDailyData.map( ({ deaths }) => deaths );

    const LineChartData = {
        labels: dates,
        datasets: [{
            label: 'Infected',
            // fill: true,
            data: confirmed,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }, {
            label: 'Deaths',
            //fill: true,
            data: deaths,
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

    return (
        <div className={styles.container}>
            { LineChart }
        </div>
    )
}

export default Charts;