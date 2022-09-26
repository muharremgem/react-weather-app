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
    <div className="h-screen w-screen  bg-lime-500 text-center">
      <div>
        <div className=" bg-orange-500   max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder={search ? search : "İstanbul..."}
            class="mt-8 px-3 py-3 placeholder-black text-slate-600 relative bg-lime-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-[20rem]"
          />
          <button
            className="mt-10 mb-10 w-20 p-3 rounded-full hover:bg-orange-200 font-bold bg-lime-300"
            onClick={() => getApi()}
          >
            Submit
          </button>
          <div className="mb-10 w-full h-full border border-emerald-400 rounded-full">
            {isClick && <City city={city} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
