import React from "react";

interface WeatherData {
  location: string;
  temperature: number;
  icon: string;
  description: string;
  wind_status: number;
  humidity: number;
  dt: number;
}
export const DateLocation: React.FC<{ data: WeatherData }> = ({ data }) => {
  function formatDate(dateString: number) {
    const date = new Date(dateString * 1000);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const suffix = (day: number) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return (
      <>
        {day}
        <sup>{suffix(day)}</sup> {month} {year}
      </>
    );
  }
  return (
    <div className="max-w-sm mx-auto bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4">
      <div>{formatDate(data.dt)}</div>
      <div className="font-bold text-white">{data.location}</div>
    </div>
  );
};
