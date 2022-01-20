import { useEffect, useState } from 'react';
import './App.css'; 
import { Cards, Charts, CountryFilter } from './components';

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

  const handleCountryChange = async (countryAttr) => {
    const countryData = await fetchData(countryAttr.name);
    setApiData(countryData);
  }

  return (
    <div className="container">
        Covid-19 Tracker
        <CountryFilter handleCountryChange={handleCountryChange} />
        <Cards data={apiData}/>
        <Charts />
    </div>
  );
}

export default App;
