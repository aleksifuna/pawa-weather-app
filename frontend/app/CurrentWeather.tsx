import React from "react";

interface WeatherData {
  icon: string;
  description: string;
  temperature: number;
}

const CurrentWeather: React.FC<{ data: WeatherData }> = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto rounded-2xl shadow-md p-6 text-center space-y-4">
      <img
        className="mx-auto w-24 h-24"
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
      />
      <div className="text-5xl font-bold text-white">
        {Math.round(data.temperature)}°C
      </div>
      <div className="capitalize text-white text-lg">{data.description}</div>
    </div>
  );
};

export default CurrentWeather;
