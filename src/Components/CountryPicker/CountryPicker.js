import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl,MenuItem, Select ,InputLabel } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
      
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel>
            Country
          </InputLabel>
          <Select label="Country" onChange={(e) => handleCountryChange(e.target.value)}>
            <MenuItem value="">Global</MenuItem>
            {countries.map((country, i) => <MenuItem key={i} value={country}> {country} </MenuItem>)}
          </Select>
        </FormControl>


  );
};

export default Countries;