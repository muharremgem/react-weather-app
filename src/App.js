import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const key = "8f4c38a691e3b6d6ec2f65ee89b330b0";
  const [search, setSearch] = useState("ankara");
  const [city, setCity] = useState([]);
  const [isClick, setİsClick] = useState(false);
  

  async function getApi() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
      );
      console.log(response.data);
      setCity(response.data);
      setİsClick(true);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(search);
  return (
    <div className="App">
      <div>
        <div className="mb-3 pt-0 bg-gray-200 w-full m-auto mt-8">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder={search ? search : "ilGiriniz"}
            class="mt-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-lime-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-[20rem]"
          />
          <button onClick={() => getApi()}>Submit</button>
          {isClick && <City city={city} />}
        </div>
      </div>
    </div>
  );
}

export default App;
