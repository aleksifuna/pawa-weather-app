"use client";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { DateLocation } from "./DateLocation";
import { Forecast } from "./Forecast";
import { SearchBar } from "./SearchBar";
import { WindHumidity } from "./WindHumidity";

export default function Home() {
const [weatherData, setWeatherData] = useState({
  location: "Nairobi",
  temperature: 16.64,
  icon: "04n",
  description: "overcast clouds",
  wind_status: 2.27,
  humidity: 93,
  dt: 1745354572,
});

const fetchWeatherData = async (location: String) => {
  
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/weather/${location}`
    );
    
    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }
    
    const data = await response.json();
    setWeatherData({
      location: data.location,
      temperature: data.temperature,
      icon: data.icon,
      description: data.description,
      wind_status: data.wind_status,
      humidity: data.humidity,
      dt: data.dt,
    });
  } catch (err) {
    throw new Error("Could not fetch weather data");
  }
};

  return (
    <div className="grid grid-cols-4 gap-x-1 max-w-[screen] h-screen bg-gray-950 text-white p-0.5">
      <div className="col-span-1 flex flex-col justify-evenly bg-gray-900">
        <div>
          <CurrentWeather data={weatherData} />
        </div>
        <div>
          <DateLocation data={weatherData} />
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-evenly bg-gray-900 p-2">
        <SearchBar onSearch={fetchWeatherData}/>
        <Forecast />
        <WindHumidity data={weatherData}/>
      </div>
    </div>
  );
}
