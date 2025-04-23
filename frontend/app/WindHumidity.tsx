import React from "react";


interface WeatherData {
  wind_status: number;
  humidity: number;
}

export const WindHumidity:React.FC<{ data: WeatherData }>  = ({data}) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className=" bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4">
        <div className="text-white">Wind Status</div>
        <div className="text-white">{Math.round(data.wind_status * 3.6) } Km/h</div>
      </div>
      <div className=" bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4">
        <div className="text-white">Humidiy</div>
        <div className="text-white">{data.humidity}%</div>
      </div>
    </div>
  );
};
