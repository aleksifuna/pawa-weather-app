# Pawa Weather App

A modern weather application built with a decoupled architecture, featuring a NextJS frontend and Laravel backend.
![Image](https://github.com/user-attachments/assets/b2f29ad4-44e2-4c0f-a800-0d185c01b0f0)
## Overview

Pawa Weather App provides users with accurate weather information including current conditions and 3-day forecasts. The application uses the OpenWeatherMap API to fetch real-time weather data.

## Features

- City Search: Find weather information for any city worldwide
- Temperature Toggle: Switch between Celsius and Fahrenheit units
- Current Weather: View current temperature, conditions, and date/location information
- Weather Forecast: See weather predictions for the next three days
- Weather Details: Track wind status and humidity information

## Tech Stack

### Frontend

- NextJS with TypeScript
- RippleUI components with Tailwind CSS
- Fetch API for AJAX requests

### Backend

- Laravel (latest version)
- API-only implementation (no Blade views)
- Integration with OpenWeatherMap API

## Installation and Setup

### Prerequisites

- Docker and Docker Compose
- OpenWeatherMap API key

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/aleksifuna/pawa-weather-app.git
cd pawa-weather-app
```

2. Create a .env file in the root directory with your OpenWeatherMap API key:

```bash
OPENWEATHER_API_KEY=your_api_key_here
```

3. Start the application using Docker Compose:

```bash
docker compose up
```

4. Once the containers are up and running, the application will be available at:
   `http://localhost:3000`
