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
                'description' => $weatherResponse['weather'][0]['description'],
                'wind_status' => $weatherResponse['wind']['speed'],
                'humidity' => $weatherResponse['main']['humidity']
            ]);
        }
        return response()->json(['error'=> 'Failed to fetch weather'], $weatherResponse->status());
    }
}
