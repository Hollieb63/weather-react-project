import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastPreview(props) {
 function day(){
    let date = new Date(props.data.time * 1000);
    let day=date.getDay();
    let days=["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

return days[day];
 }

 function maxTemp (){
    let temperature=Math.round(props.data.temperature.maximum);
    return `${temperature}°/ `;
  
}

function minTemp(){
    let temperature=Math.round(props.data.temperature.minimum);
    return`${temperature}°`;
}

return (
    <div className="ForecastPreview">
      <div className="forecast-time">{day()}</div>
      <WeatherIcons code={props.data.condition.icon} size={52} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemp()}</span>
        <span className="forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
 }




