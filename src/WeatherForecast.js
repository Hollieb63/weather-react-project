import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./WeatherForecast.css";





export default function WeatherForecast(props){

    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);



useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);


  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

if (loaded)
return(
    <div className="WeatherForecast row">
         {forecast.map(function (day, index) {
          if (index < 5) {
            return(
                <div className="col" key={index}>
                    <ForecastPreview data={day}/>
                    </div>
            );
        } else {
            return null;
          }
        })}
      </div>
    );
    else {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
