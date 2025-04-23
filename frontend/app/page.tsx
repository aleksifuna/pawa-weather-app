"use client";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { DateLocation } from "./DateLocation";
import { Forecast } from "./Forecast";
import { SearchBar } from "./SearchBar";
import { WindHumidity } from "./WindHumidity";

type ForecastItem = {
  dt: number;
  icon: string;
  min: number;
  max: number;
};

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
const [forecast, setForecast] = useState<ForecastItem[]>([])
const fetchWeatherData = async (location: String) => {
  setForecast([])
  
  try {
    const currentWeatherResponse = await fetch(
      `http://127.0.0.1:8000/api/weather/${location}`
    );
    const forecastResponse = await fetch(`http://127.0.0.1:8000/api/forecast/${location}`);
    if (!currentWeatherResponse.ok || !forecastResponse.ok) {
      throw new Error("Could not fetch weather data");
    }
    
    const data = await currentWeatherResponse.json();
    const forecastDataRaw = await forecastResponse.json();
    const forecastData = forecastDataRaw.slice(1,4)
    const filtredForecastData = forecastData.map((item: { dt: number; weather: [{ icon: string; }]; temp: { min: number; max: number; }; }) => ({
      dt: item.dt,
      icon: item.weather[0].icon,
      min: item.temp.min,
      max: item.temp.max
    }));


    setWeatherData({
      location: data.location,
      temperature: data.temperature,
      icon: data.icon,
      description: data.description,
      wind_status: data.wind_status,
      humidity: data.humidity,
      dt: data.dt,
    });
    setForecast(prev => [...prev, ...filtredForecastData])
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
        <Forecast data={forecast}/>
        <WindHumidity data={weatherData}/>
      </div>
    </div>
  );
}
