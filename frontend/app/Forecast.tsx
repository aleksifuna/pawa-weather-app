import React from "react";
import { ForecastCard } from "./ForecastCard";

export const Forecast = () => {
  const data = [
    { dt: 1745398800, icon: "04n", min: 16.64, max: 20.64 },
    { dt: 1745485200, icon: "04n", min: 16.64, max: 20.64 },
    { dt: 1745571600, icon: "04n", min: 16.64, max: 20.64 },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <ForecastCard key={index} item={item} />
      ))}
    </div>
  );
};
