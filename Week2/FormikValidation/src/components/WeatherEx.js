import React, { useState } from 'react'
import './Weather.css'


export default function WeatherEx() {
    const [weather, setWeather] = useState({
        label: "Weather Report",
        date: new Date(2021, 4, 5),
        city: "Chennai",
        tempature: "3534 °C °F",
        precipitation: "8%",
        humidity: "62%",
        wind: "10 km/h",

    })

    const handleonClick = (event) => {
        console.log("Weather report....")
        setWeather((prev) => {
            return {
                ...prev,
                label: prev.label,
                date: prev.date,
                city: prev.city,
                tempature: prev.tempature,
                precipitation: prev.precipitation,
                humidity: prev.humidity,
                wind: prev.wind
            }

        })
        console.log(weather);
    }
    return (
        <div>
            <div className="bgcolor" style={{ backgroundImage: `url(${weather})`}}>
            <img src={'./wather2.PNG'} className="propic"/>
                <h2>{weather.label}</h2>
                <h3>Today' Date:{weather.date.toString()}</h3>
                <h2>{weather.city}</h2>
                <h1>{weather.tempature}</h1>
                <h2>{weather.precipitation}</h2>
                <h4>{weather.humidity}</h4>
                <h4>{weather.wind}</h4>
                <button className="btn" onClick={handleonClick}>Get Weather</button>
            </div>
        </div>
    )
}
