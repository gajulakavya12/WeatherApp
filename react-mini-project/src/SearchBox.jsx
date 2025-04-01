import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [err, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a4d802b6472749202ea3eda3737347c1";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async(e) => {
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
            className='input'
            id="city" 
            label="City Name" 
            variant="outlined" 
            required  
            value={city} 
            onChange={handleChange}
            />
            <Button 
            variant="contained"
             type="submit"
              ><SearchIcon/>Search
             </Button>
             {err && <h4 style={{color:"red"}}>No Such Place Exits </h4> }
            </form>
        </div>
    )
}