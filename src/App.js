import { useEffect, useState } from 'react';
import './App.css'; 
import { Cards, Charts, CountryPicker } from './components';

import { fetchData } from './api';

function App() {

   const [apiData, setApiData] = useState(null);
  
  useEffect( () => {

    async function fetchMyAPI() {
      const data = await fetchData();
      setApiData(data);
    }

    fetchMyAPI();

  }, [] );

  return (
    <div className="container">
        Covid-19 Tracker
        <Cards data={apiData}/>
        <Charts />
        <CountryPicker />
    </div>
  );
}

export default App;
