import React from "react";

interface ForecastData {
  dt: number;
  icon: string;
  min: number;
  max: number;
}
export const ForecastCard: React.FC<{ item: ForecastData }> = ({ item }) => {
  function formatDate(dateString: number) {
    const date = new Date(dateString * 1000);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });

    return `${day} ${month}`;
  }
  return (
    <div className="max-w-sm bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4">
      <div className=" text-white">{formatDate(item.dt)}</div>
      <img
        className="mx-auto w-24 h-24"
        src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
      />
      <div className=" text-white">
        {Math.round(item.min)}°C - {Math.round(item.max)}°C
      </div>
    </div>
  );
};
