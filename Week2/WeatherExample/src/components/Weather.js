import React, { useState, useEffect } from 'react'
import './wet.css';

export default function Weather() {

    const dateBuilder = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }
    const [weather, setWeather] = useState([])

    const [search, setSearch] = useState("");
    
    useEffect(() => {
        console.log("Fetching from backend...........");
        fetch("http://localhost:3000/weatherclimate").then(res => res.json()).then(data => {
            console.log(data);
            setWeather(data);
            // setSearch(data);

        }).catch(e => {
            console.log("Error cought");
            console.log(e);
        }).finally(() => {
            console.log("I will work always...")
        })
    }, [])

    return (
        <div>
            <div className="bg">
                <h1 style={{ fontWeight: "bold" }}>Weather Report</h1>
                <h2 className="date">{dateBuilder(new Date())}</h2>

                <div>
                    <input className="inpt"
                        type="text"
                        name="search"
                        placeholder="Enter the city" onChange={event => { setSearch(event.target.value) }} />
                </div><br />

                <table>
                    <thead>
                        <tr>
                            <th>Pincode</th>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Percipitation</th>
                            <th>Humidity</th>
                            <th>Wind</th>
                        </tr>
                    </thead>
                    {

                        weather && weather.filter((row) => {
                            if (search == " ") {
                                return row
                            } else if (row.city.toLowerCase().includes(search.toLowerCase())) {
                                return row

                            }
                        }).map((x) => {
                            return (
                                        <tbody>
                                            <tr>

                                                <td>{x.pincode}</td>

                                                <td>{x.city}</td>

                                                <td>{x.tempature}</td>

                                                <td>{x.percipitation}</td>

                                                <td>{x.humidity}</td>

                                                <td>{x.wind}</td>
                                            </tr>
                                        </tbody>
                                    
                            );
                        })
                    }
                    </table>

            </div>
            </div>
            )
}
