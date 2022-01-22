import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export async function fetchData(country) {
    let updatedUrl = url;

    if(country){
        updatedUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(updatedUrl);
       // console.log(data)
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {
        let e;
        if(error){
            e = 'error';
        }
        return e;
    }
}

export async function fetchDailyData() {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map( ( dailyData ) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}

export async function fetchCountries(){
    try{
        const { data } = await axios.get(`${url}/countries`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}