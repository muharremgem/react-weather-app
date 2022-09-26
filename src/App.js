import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const key = "8f4c38a691e3b6d6ec2f65ee89b330b0";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, []);
  console.log(search);
  return (
    <div className="App">
      <div>
        <div className="mb-3 pt-8">
          input
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="py-1 mt-6 bg-lime-500 text-black"
        />
      </div>
    </div>
  );
}

export default App;
