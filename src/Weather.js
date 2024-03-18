import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";


export default function Weather(props){
    
    const [weatherData, setWeatherData]=useState({ready:false});
   const[city, setCity]=useState(props.defaultCity);


function handleResponse(response) {
    setWeatherData({
        ready:true,
        temperature:response.data.temperature.current,
        date:new Date(response.data.time*1000),
        iconUrl:response.data.condition.icon_url,
    wind:response.data.wind.speed,
city:response.data.city,
description:response.data.condition.description,
humidity:response.data.temperature.humidity});
 
}
function search(){
    const apiKey="f176dboa0e40a3602864ef25ecact0b3";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

}



function handleSubmit(event){
    event.preventDefault();


}

function handleCityChange(event){
setCity(event.target.value);
search(city);

}

if (weatherData.ready) {
    return (
        <div className="Weather"> 
        
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
            </div>
            <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
        </div>
    );
        
}else{
    search();
    return "Loading...";
}
} 
