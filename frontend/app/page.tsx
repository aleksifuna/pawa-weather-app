import CurrentWeather from "./CurrentWeather";
import { DateLocation } from "./DateLocation";
import { SearchBar } from "./SearchBar";

export default function Home() {
  const data = {
    location: "Nairobi",
    temperature: 16.64,
    icon: "04n",
    description: "overcast clouds",
    wind_status: 2.27,
    humidity: 93,
    dt: 1745354572,
  };

  return (
    <div className="grid grid-cols-4 gap-x-2 max-w-[screen] h-screen bg-gray-950 text-white p-0.5">
      <div className="col-span-1 flex flex-col justify-around bg-gray-900">
        <div>
          <CurrentWeather data={data} />
        </div>
        <div>
          <DateLocation data={data} />
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-around bg-gray-900 p-2">
        <SearchBar />
      </div>
    </div>
  );
}
