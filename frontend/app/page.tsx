"use client";
import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { DateLocation } from "./DateLocation";
import { Forecast } from "./Forecast";
import { SearchBar } from "./SearchBar";
import { WindHumidity } from "./WindHumidity";
import { celciusToFahrenheit, fahrenheitToCelcius } from "./utlis";

type ForecastItem = {
  dt: number;
  icon: string;
  min: number;
  max: number;
  unit: string;
};
type WeatherData = {
  location: string;
  temperature: number;
  icon: string;
  description: string;
  wind_status: number;
  humidity: number;
  dt: number;
  unit: string;
};

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: "",
    temperature: 0,
    icon: "",
    description: "",
    wind_status: 0,
    humidity: 0,
    dt: 0,
    unit: "C",
  });

  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  const fetchWeatherData = async (location: String) => {
    setForecast([]);

    try {
      const currentWeatherResponse = await fetch(
        `http://127.0.0.1:8000/api/weather/${location}`
      );
      const forecastResponse = await fetch(
        `http://127.0.0.1:8000/api/forecast/${location}`
      );
      if (!currentWeatherResponse.ok || !forecastResponse.ok) {
        throw new Error("Could not fetch weather data");
      }

      const data = await currentWeatherResponse.json();
      const forecastDataRaw = await forecastResponse.json();
      const forecastData = forecastDataRaw.slice(1, 4);
      const filtredForecastData = forecastData.map(
        (item: {
          dt: number;
          weather: [{ icon: string }];
          temp: { min: number; max: number };
        }) => ({
          dt: item.dt,
          icon: item.weather[0].icon,
          min: item.temp.min,
          max: item.temp.max,
          unit: "C",
        })
      );

      setWeatherData({
        location: data.location,
        temperature: data.temperature,
        icon: data.icon,
        description: data.description,
        wind_status: data.wind_status,
        humidity: data.humidity,
        dt: data.dt,
        unit: "C",
      });
      setForecast((prev) => [...prev, ...filtredForecastData]);
    } catch (err) {
      throw new Error("Could not fetch weather data");
    }
  };

  const convertUnits = (unit: string) => {
    if (unit === "F") {
      setWeatherData((prev) => ({
        ...prev,
        temperature: celciusToFahrenheit(prev.temperature),
        unit: "F",
      }));
      setForecast((prev) =>
        prev.map((item) => ({
          ...item,
          min: celciusToFahrenheit(item.min),
          max: celciusToFahrenheit(item.max),
          unit: "F",
        }))
      );
    } else if (unit === "C") {
      setWeatherData((prev) => ({
        ...prev,
        temperature: fahrenheitToCelcius(prev.temperature),
        unit: "C",
      }));
      setForecast((prev) =>
        prev.map((item) => ({
          ...item,
          min: fahrenheitToCelcius(item.min),
          max: fahrenheitToCelcius(item.max),
          unit: "C",
        }))
      );
    }
  };
  useEffect(() => {
    fetchWeatherData("Nairobi");
  }, []);

  return (
    <div className="md:grid grid-cols-4 gap-x-1 max-w-[screen] h-screen bg-gray-950 text-white p-0.5">
      <div className="col-span-1 flex flex-col justify-evenly bg-gray-900">
        <div>
          <CurrentWeather data={weatherData} />
        </div>
        <div>
          <DateLocation data={weatherData} />
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-evenly bg-gray-900 p-2">
        <SearchBar
          onSearch={fetchWeatherData}
          onClick={convertUnits}
          unit={weatherData.unit}
        />
        <Forecast data={forecast} />
        <WindHumidity data={weatherData} />
      </div>
    </div>
  );
}
