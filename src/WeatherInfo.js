import React from "react";
import WeatherIcons from "./WeatherIcons";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props){
return(
<div className="WeatherInfo ">
    <div className="row" >
        <div className="col-8">
<h1>{props.data.city}</h1>
       
        <ul>
        <li>
            <span>
            <FormattedDate date={props.data.date}/>
            </span>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        </div>
       <div className="col-4 p-0 "> 
    
     
                    <div >
            <WeatherIcons code={props.data.icon} size={52} />
            <strong><span className="temperature "> {Math.round(props.data.temperature)}</span>
                <span className="celsius">°C</span></strong>
           
              
                </div>

                <ul>
                    
    <li>Humidity: <strong>{props.data.humidity}%</strong></li>
    <li>Wind: <strong>{props.data.wind} KM/H</strong></li>
                </ul>
               </div>
                </div>
                </div>  
           
      
           
     

        );
        
}