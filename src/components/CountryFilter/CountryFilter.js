import React from 'react';
import { useState, useEffect } from "react";
///import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { fetchCountries } from '../../api';

import styles from './CountryFilter.module.css';

const CountryFilter = ( { handleCountryChange } ) => {

    const [apiCountries, setCountries] = useState([]);
    //const [countryValue, setCountryValue] = useState(null);

    useEffect( () => {
        
        async function fetchApiCountries(){
            const data = await fetchCountries();
            //console.log(data);
            setCountries(data);
        }
        fetchApiCountries();

    }, [setCountries]);

    const countriesData = apiCountries.countries;

    const defaultProps = {
        options: countriesData,
        getOptionLabel: (option) => option.name,
    };

    const close = document.getElementsByClassName("MuiAutocomplete-clearIndicator")[0];
        
    // Add a Click Event Listener to the button
    // if(close){
    //     close.addEventListener("click", () => {
    //         handleCountryChange('');
    //     });
    // }

    const countriesAutocomplete = (
        countriesData 
        ? (
            <Autocomplete
                {...defaultProps}
                id="tags-outlined"
                fullWidth={true}
                autoHighlight
                //value={countryValue}
                onChange={(event, newValue) => {
                    handleCountryChange(newValue);
                }}
                renderInput={(params) => (
                <TextField {...params} label="Select Country" variant="standard" />
                )}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            { countriesAutocomplete }
        </div>
    )
}

export default CountryFilter;