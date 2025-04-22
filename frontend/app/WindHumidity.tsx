import React from "react";

export const WindHumidity = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className=" bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4">
        <div className="text-white">Wind Status</div>
        <div className="text-white">2.27 km/h</div>
      </div>
      <div className=" bg-gray-700 rounded-2xl shadow-md p-6 text-center space-y-4">
        <div className="text-white">Humidiy</div>
        <div className="text-white">80%</div>
      </div>
    </div>
  );
};
