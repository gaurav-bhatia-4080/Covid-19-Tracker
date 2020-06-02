import React from 'react';

import { Cards, CountryPicker, Chart } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';

// import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>Covid-19 Tracker</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />        
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;