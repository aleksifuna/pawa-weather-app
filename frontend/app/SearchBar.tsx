'use client';

import React, { FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  };
  return (
    <div className="flex justify-between">
      <form onSubmit={handleSubmit} className="flex w-full max-w-3xl gap-x-2">
        <input
          type="text"
          placeholder="Search City.."
          value={searchQuery ?? ""}
          onChange={(e)=>setSearchQuery(e.target.value)}
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
