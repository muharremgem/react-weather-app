import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

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
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <div class="mb-3 pt-0">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Bir İl Giriniz.."
            class="mt-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-lime-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-[20rem]"
          />
          <City city={city} />
        </div>
      </div>
    </div>
  );
}

export default App;
