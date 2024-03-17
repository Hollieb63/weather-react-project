import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
    
    const [weatherData, setWeatherData]=useState({ready:false});
   
function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready:true,
        temperature:response.data.temperature.current,
        date:"Sunday 20:00",
        iconUrl:response.data.condition.icon_url,
    wind:response.data.wind.speed,
city:response.data.city,
description:response.data.condition.description,
humidity:response.data.temperature.humidity});
 
}

if (weatherData.ready) {
    return (
        <div className="Weather"> 
        
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary"/>
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
       
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        
        <div className="row">
            <div className="col-6">
                <img src={weatherData.iconUrl} className="float-left"></img>
                
               <strong><span className="temperature"> {Math.round(weatherData.temperature)}</span>
               <span className="celsius">°C</span></strong>
              
            </div>
          
            <div className="col-6">
                <ul>
                    
    <li>Humidity:{weatherData.humidity}%</li>
    <li>Wind:{weatherData.wind}KM/H</li>
                </ul>
                </div> 
              
                
        </div>
        </div>
        
        );
}else{
    const apiKey="f176dboa0e40a3602864ef25ecact0b3";
    let city="London";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}

    

   
}