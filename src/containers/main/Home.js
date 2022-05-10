import React, { useState , useEffect} from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather'

const Home = () =>{
  
  
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'your key',
    lat: '37.98478',
    lon: '23.74862',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  
return(
  <div className="ui grid container">
    <h1> Home Page</h1>
 
  <div className="ui grid container" style={{marginTop: "100px;"}}>

  <div className="column rp">
  <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Athens - Greece"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  </div>
  </div>
  </div>
)
}

export default  Home;
