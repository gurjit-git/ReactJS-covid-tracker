import { useEffect, useState } from 'react';
import './App.css'; 
import { Cards, Charts, CountryFilter } from './components';

import { fetchData } from './api';

function App() {

  const [apiData, setApiData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  useEffect( () => {

    async function fetchMyAPI() {
      const data = await fetchData();
      setApiData(data);
    }

    fetchMyAPI();

  }, [] );

  const handleCountryChange = async (countryAttr) => {
    if(countryAttr){
      const countryData = await fetchData(countryAttr.name);
      setSelectedCountry(countryAttr.name);
      setApiData(countryData);
    }
    // else{
    //   const data = await fetchData();
    //   setSelectedCountry(null);
    //   setApiData(data);
    // }
  }
  //console.log(apiData);
  return (
    <div className="container">
        Covid-19 Tracker
        <CountryFilter handleCountryChange={handleCountryChange} />
        <Cards data={apiData} />
        <Charts data={apiData} country={selectedCountry} />
    </div>
  );
}

export default App;
