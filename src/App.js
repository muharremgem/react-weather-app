import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const key = "8f4c38a691e3b6d6ec2f65ee89b330b0";
  const [search, setSearch] = useState("istanbul");
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
    <div>
      <div className="h-screen w-screen  text-center flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="">
          <p className="text-5xl mb-8 font-bold text-sky-400/100 ">
            HAVA DURUMU
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col items-center justify-center border rounded-3xl">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder={search ? search : "Şehir Giriniz..."}
            class="text-transform: uppercase mt-8 px-3 py-3 m-5 placeholder-black text-slate-600 relative  rounded text-sm  shadow outline-none focus:outline-none focus:ring w-[20rem] bg-pink-400 ;
            "
          />
          <button
            className=" mt-10 mb-10 w-20 p-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
            onClick={() => getApi()}
          >
            Submit
          </button>
          <div className="mb-10 w-full h-full  rounded-full ">
            {isClick && <City city={city} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
