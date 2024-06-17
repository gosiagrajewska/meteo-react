import React, { useState } from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  let apiKey = `3fdc8cfbf2d6fa0116c9ae92d3df4f79`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  return (
    <div>
      <p>
        The temperature in {props.city} is {temperature}°C
      </p>
    </div>
  );
}
