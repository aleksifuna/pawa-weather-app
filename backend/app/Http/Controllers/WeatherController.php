<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\WeatherService;

class WeatherController extends Controller
{
    public function getWeatherByCity($city, WeatherService $weatherService)
    {
        $apiKey = config('services.weather.key');
        $url = 'https://api.openweathermap.org/data/2.5/weather';
        $location = $weatherService->getCoordinates($city);
        if (!$location) {
            return response()->json(['error'=>'City not found'], 404);
        }
        $weatherResponse = Http::get($url, [
            'lat' => $location['lat'],
            'lon'=> $location['lon'],
            'appid' => $apiKey,
            'units' => 'metric',
        ]);
        if ($weatherResponse->successful()) {
            return response()->json([
                'location' => $location['name'],
                'temperature' => $weatherResponse['main']['temp'],
                'icon' => $weatherResponse['weather'][0]['icon'],
                'description' => $weatherResponse['weather'][0]['description'],
                'wind_status' => $weatherResponse['wind']['speed'],
                'humidity' => $weatherResponse['main']['humidity'],
                'dt' => $weatherResponse['dt'],
            ]);
        }
        return response()->json(['error'=> 'Failed to fetch weather'], $weatherResponse->status());
    }


    public function getForecastByCity($city, WeatherService $weatherService)
    {
        $apiKey = config('services.weather.key');
        $url = 'https://api.openweathermap.org/data/3.0/onecall';
        $location = $weatherService->getCoordinates($city);
        if (!$location) {
            return response()->json(['error'=>'City not found'], 404);
        }
        $forecastResponse = Http::get($url, [
            'lat' => $location['lat'],
            'lon'=> $location['lon'],
            'appid' => $apiKey,
            'units' => 'metric',
            'exclude' => 'current,minutely,hourly,alerts'
        ]);
        if ($forecastResponse->successful()) {
            return response()->json($forecastResponse['daily']);
        }
        return response()->json(['error'=> 'Failed to fetch forecast'], $forecastResponse->status());
    }
}
