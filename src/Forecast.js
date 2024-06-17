import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }

  if (props.place === "") {
    return <h2></h2>;
  } else {
    let apiKey = `3fdc8cfbf2d6fa0116c9ae92d3df4f79`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return (
      <p>
        The weather in {props.place}:
        <ul>
          <li>Temprature:{temperature}°C</li>
          <li>{description}</li>
          <li>Humidity:{humidity}%</li>
          <li>Wind speed:{wind}km/h</li>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
        </ul>
      </p>
    );
  }
}
