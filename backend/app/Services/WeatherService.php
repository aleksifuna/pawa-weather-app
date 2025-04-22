<?php
namespace App\services;

use Illuminate\Support\Facades\Http;

class WeatherService
{
    public function getCoordinates(string $city)
    {
        $apiKey = config('services.weather.key');
        $baseUrl = 'http://api.openweathermap.org/geo/1.0/direct';
        $response = Http::get($baseUrl, [
            'q' => $city,
            'limit' => 1,
            'appid' => $apiKey,
        ]);
        if ($response->successful() && count($response->json()) > 0 ) {
            $location = $response->json()[0];

            return [
                'name' => $location['name'] ?? null,
                'lat' => $location['lat'] ?? null,
                'lon' => $location['lon'] ?? null,
                'country' => $location['country'] ?? null,
            ];

        }
        return null;
    }
}