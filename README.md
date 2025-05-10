## WeatherApp

## Overview

**WeatherApp** is a React-based application that provides real-time weather updates for any city. It fetches key weather metrics such as temperature, humidity, and conditions using a weather API. The app dynamically updates images and descriptions based on current weather conditions.

## Features

### City Search
- Users can search for any city to get weather updates.

### Real-time Weather Information
- **Current Temperature**
- **Minimum and Maximum Temperatures**
- **Humidity Levels**
- **"Feels Like" Temperature**

### Weather Details
- Shows conditions like "Clear," "Rain," "Cloudy," etc.

### Dynamic Images
- Weather images change based on temperature and humidity.

### Responsive Design
- Optimized for both desktop and mobile devices.

## Technologies Used

- **React** - Front-end framework for UI development.
- **OpenWeatherMap API (or alternative API)** - Fetches weather data.
- **JavaScript (ES6)** - Core application functionality.
- **CSS** - Styling and responsiveness.
- **React Hooks (useState, useEffect)** - State and effect management.

## Installation & Setup

### Clone the repository
```sh
git clone 'https://github.com/gajulakavya12/WeatherApp'.
```

### Navigate to the project folder
```sh
cd weather-app
```

### Install dependencies
```sh
npm install
```

### Set up your API key
- Obtain an API key from OpenWeatherMap (or another provider).
- Replace the `API_KEY` placeholder in the API request URL with your actual key.

### Run the app
```sh
npm start
```
- The app will launch in your default browser at `http://localhost:5173/`.

## App Functionality

### City Search
- Users can input any city name to retrieve weather details.
- Data is fetched from the API and displayed instantly.

### Weather Information Display
- **Current Temperature** - Displayed in Celsius or Fahrenheit.
- **Min & Max Temperature** - Forecasted for the day.
- **Humidity** - Displays moisture percentage in the air.
- **Feels Like** - Accounts for wind and humidity.

### Dynamic Image Updates
- **Temperature**
  - Hot → Sunny/clear sky image.
  - Cold → Cloudy/winter-themed image.
- **Humidity**
  - High humidity → Cloudier images.
  - Low humidity → Clearer images.
- **Weather Conditions**
  - Rain → Rain-themed image.
  - Snow → Snowy background.

## Contributing

Want to contribute? Follow these steps:

### Steps to Contribute
1. **Fork** the repository.
2. **Create** a new branch.
3. **Make changes** and commit them.
4. **Submit** a pull request for review.

## License

This project is open-source under the **MIT License**.

---

## Thank You  
**Kavya Gajula**

