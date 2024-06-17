import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <h2> </h2>

      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/gosiagrajewska"
          target="_blank"
          rel="noreferrer"
        >
          Malgorzata Grajewska
        </a>{" "}
        and is open sourced on{" "}
        <a
          href="https://github.com/gosiagrajewska/meteo-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://meteoreactgosia.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
