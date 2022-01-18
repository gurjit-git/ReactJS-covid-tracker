import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'; 
import { Cards, Charts, CountryPicker } from './components';

//import { fetchData } from './api';
const url = 'https://covid19.mathdro.id/api';

function App() {

  const [apiData, setApiData] = useState(null);
  
  useEffect( () => {

    const fetchData = async () => {
      try {
          const response = await axios(url);
          //return response.data;
          setApiData( response.data )
      }
      catch(error){
  
      }
    }
    
    fetchData();

  }, [] );

  console.log(apiData);

  return (
    <div className="App">
        Covid-19 Tracker
        <Cards />
        <Charts />
        <CountryPicker />
    </div>
  );
}

export default App;
