import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Cards, CountryPicker, Chart } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
    
    AOS.init({
      duration : 2000
    })
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1 data-aos='fade-down' >Covid-19 Tracker</h1>
        <div data-aos="zoom-in-up" >
            <h3 style={{color:"#2a3439cf"}}>Select a specific country from dropdown, or view the Global Statistics</h3>
            <CountryPicker  handleCountryChange={this.handleCountryChange} />
        </div>
        <Cards data={data} />        
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;