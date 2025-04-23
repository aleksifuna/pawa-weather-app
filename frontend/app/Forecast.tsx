'use client';
import React from "react";
import { ForecastCard } from "./ForecastCard";

interface ForecastItem  {
  dt: number;
  icon: string;
  min: number;
  max: number;
};

interface ForecastProps {
  data: ForecastItem[]
}
export const Forecast: React.FC<ForecastProps> = ({data}) => {

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {data.map((item, index) => (
        <ForecastCard key={index} item={item} />
      ))}
    </div>
  );
};
