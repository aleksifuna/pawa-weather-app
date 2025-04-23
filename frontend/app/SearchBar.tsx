"use client";

import React, { FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClick: (unit: string) => void;
  unit: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onClick,
  unit,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e.currentTarget.value;
    if (buttonValue !== unit) {
      onClick(buttonValue);
    }
  };
  return (
    <div className="flex justify-between">
      <form onSubmit={handleSubmit} className="flex w-full max-w-3xl gap-x-2">
        <input
          type="text"
          placeholder="Search City.."
          value={searchQuery ?? ""}
          onChange={(e) => setSearchQuery(e.target.value)}
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
          type="button"
          value="C"
          onClick={handleClick}
          className={`basis-[10%] px-4 py-2 text-white font-semibold ${
            unit === "C" ? "bg-gray-800" : "bg-gray-950"
          }`}
        >
          °C
        </button>
        <button
          type="button"
          value="F"
          onClick={handleClick}
          className={`basis-[10%] px-4 py-2 text-white font-semibold ${
            unit === "F" ? "bg-gray-800" : "bg-gray-950"
          }`}
        >
          °F
        </button>
      </div>
    </div>
  );
};
