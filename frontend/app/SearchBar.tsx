import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex justify-between">
      <form className="flex w-full max-w-3xl gap-x-2">
        <input
          type="text"
          placeholder="Search City.."
          className="basis-[80%] px-4 py-2 bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="basis-[10%] px-4 py-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold"
        >
          Go
        </button>
      </form>

      <div className="flex">
        <button
          type="submit"
          className="basis-[10%] px-4 py-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold"
        >
          °C
        </button>
        <button
          type="submit"
          className="basis-[10%] px-4 py-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold"
        >
          °F
        </button>
      </div>
    </div>
  );
};
