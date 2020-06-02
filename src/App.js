import React from 'react'
import {Cards,Chart, CountryPicker} from "./Components"

import styles from './App.module.css'

import {fetchData} from './api'
class App extends React.Component{
    state={
        covidData:{}
    }
    async componentDidMount(){
        const fetchedCovidData = await fetchData()

        this.setState({covidData:fetchedCovidData})
    }

    render(){
        const { covidData }= this.state
        return(
            <div className={styles.container}>
                <Cards data={covidData}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App