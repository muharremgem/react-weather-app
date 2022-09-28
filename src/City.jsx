import React from "react";

const city = ({ city }) => {
  console.log(city);

  return (
    <div>
      <div>
        <h1 className="text-8xl">{Math.round(city.main.temp)}°C</h1>
        <h1 className="text-3xl">{city.name}</h1>
        <h1 className="text-2xl">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default city;
