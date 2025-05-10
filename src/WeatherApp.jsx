import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Karimnagar",
        feelsLike: 35.28, 
        humidity : 28,
        temp: 35.72, 
        tempMax: 35.72, 
        tempMin: 35.72, 
        weather: "clear sky",
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="outer">
            <div className="WeatherApp">
                <h2>Weather App by Kavya</h2>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </div>
    )
}