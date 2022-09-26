import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get("/user?ID=12345");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  });
  return <div className="App">Hello</div>;
}

export default App;
