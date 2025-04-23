import React from "react";
import { FaWind } from "react-icons/fa";

interface WeatherData {
  wind_status: number;
  humidity: number;
}

export const WindHumidity: React.FC<{ data: WeatherData }> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className=" bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4 h-80 flex flex-col justify-center items-center">
        <div className="text-white">Wind Status</div>
        <div className="text-white">
          {Math.round(data.wind_status * 3.6)} Km/h
        </div>
        <FaWind size={50} />
      </div>
      <div className=" bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4 h-80 flex flex-col justify-center items-center">
        <div className="text-white">Humidity</div>
        <div className="text-white">{data.humidity}%</div>
        <progress
          className="progress progress-error w-[60%] h-8"
          value={data.humidity.toString()}
          max="100"
        ></progress>
      </div>
    </div>
  );
};
