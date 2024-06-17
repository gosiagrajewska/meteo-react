import React, { useState } from "react";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSearch(city);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          required={true}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <Forecast place={search} />
    </div>
  );
}
