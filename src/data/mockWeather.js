// Weather intelligence datasets for WeatherNow

export const DEFAULT_WEATHER_DATA = {
  city: "Dar es Salaam",
  country: "Tanzania",
  formattedLocation: "Dar es Salaam, Tanzania",
  tempC: 27,
  tempF: 81,
  feelsLikeC: 29,
  feelsLikeF: 84,
  condition: "Partly Cloudy",
  conditionDescription: "Scattered cumulus clouds with warm Indian Ocean breezes",
  iconType: "partly-cloudy",
  highC: 30,
  highF: 86,
  lowC: 22,
  lowF: 72,
  humidity: 78,
  windSpeedKm: 12,
  windSpeedMph: 7.5,
  windDirection: "ESE",
  windDesc: "Gentle Coastal Breeze",
  pressure: 1012,
  pressureDesc: "Steady & Optimal",
  visibilityKm: 10,
  visibilityMiles: 6.2,
  visibilityDesc: "Crystal Clear",
  uvIndex: 6,
  uvDesc: "Moderate Risk",
  dewPointC: 23,
  dewPointF: 73,
  airQualityIndex: 42,
  airQualityDesc: "Good (Air Quality is satisfactory)",
  sunrise: "06:28 AM",
  sunset: "06:35 PM",
  updatedAt: "Updated just now",
  hourly: [
    { time: "Now", tempC: 27, tempF: 81, icon: "partly-cloudy", pop: 10 },
    { time: "3 PM", tempC: 28, tempF: 82, icon: "sunny", pop: 0 },
    { time: "4 PM", tempC: 27, tempF: 81, icon: "partly-cloudy", pop: 10 },
    { time: "5 PM", tempC: 26, tempF: 79, icon: "cloudy", pop: 20 },
    { time: "6 PM", tempC: 25, tempF: 77, icon: "partly-cloudy", pop: 15 },
    { time: "7 PM", tempC: 24, tempF: 75, icon: "clear-night", pop: 5 },
    { time: "8 PM", tempC: 23, tempF: 73, icon: "clear-night", pop: 0 },
  ],
  forecast: [
    {
      day: "Monday",
      shortDay: "Mon",
      date: "Aug 24",
      iconType: "sunny",
      condition: "Sunny & Clear",
      maxC: 27,
      maxF: 81,
      minC: 20,
      minF: 68,
      precip: 0,
    },
    {
      day: "Tuesday",
      shortDay: "Tue",
      date: "Aug 25",
      iconType: "rainy",
      condition: "Scattered Rain",
      maxC: 25,
      maxF: 77,
      minC: 19,
      minF: 66,
      precip: 60,
    },
    {
      day: "Wednesday",
      shortDay: "Wed",
      date: "Aug 26",
      iconType: "cloudy",
      condition: "Overcast",
      maxC: 26,
      maxF: 79,
      minC: 21,
      minF: 70,
      precip: 20,
    },
    {
      day: "Thursday",
      shortDay: "Thu",
      date: "Aug 27",
      iconType: "partly-cloudy",
      condition: "Partly Cloudy",
      maxC: 28,
      maxF: 82,
      minC: 22,
      minF: 72,
      precip: 10,
      isToday: true,
    },
    {
      day: "Friday",
      shortDay: "Fri",
      date: "Aug 28",
      iconType: "rainy",
      condition: "Heavy Showers",
      maxC: 24,
      maxF: 75,
      minC: 20,
      minF: 68,
      precip: 80,
    },
    {
      day: "Saturday",
      shortDay: "Sat",
      date: "Aug 29",
      iconType: "sunny",
      condition: "Clear & Sunny",
      maxC: 29,
      maxF: 84,
      minC: 23,
      minF: 73,
      precip: 0,
    },
    {
      day: "Sunday",
      shortDay: "Sun",
      date: "Aug 30",
      iconType: "cloudy",
      condition: "Passing Clouds",
      maxC: 27,
      maxF: 81,
      minC: 21,
      minF: 70,
      precip: 15,
    },
  ],
};

export const PRESET_CITIES = {
  "dar es salaam": DEFAULT_WEATHER_DATA,
  "zanzibar": {
    ...DEFAULT_WEATHER_DATA,
    city: "Zanzibar",
    formattedLocation: "Zanzibar, Tanzania",
    tempC: 28,
    tempF: 82,
    feelsLikeC: 31,
    feelsLikeF: 88,
    condition: "Tropical Breeze",
    conditionDescription: "Warm ocean winds with sunny spells",
    humidity: 82,
    windSpeedKm: 16,
    uvIndex: 7,
  },
  "nairobi": {
    ...DEFAULT_WEATHER_DATA,
    city: "Nairobi",
    formattedLocation: "Nairobi, Kenya",
    tempC: 22,
    tempF: 72,
    feelsLikeC: 22,
    feelsLikeF: 72,
    condition: "Mild & Sunny",
    conditionDescription: "Crisp highland air with pleasant sunshine",
    iconType: "sunny",
    humidity: 58,
    windSpeedKm: 9,
    pressure: 1018,
    uvIndex: 8,
  },
  "london": {
    ...DEFAULT_WEATHER_DATA,
    city: "London",
    country: "United Kingdom",
    formattedLocation: "London, United Kingdom",
    tempC: 18,
    tempF: 64,
    feelsLikeC: 17,
    feelsLikeF: 63,
    condition: "Light Drizzle",
    conditionDescription: "Overcast skies with intermittent rain",
    iconType: "rainy",
    humidity: 85,
    windSpeedKm: 18,
    pressure: 1008,
    uvIndex: 3,
    highC: 20,
    highF: 68,
    lowC: 13,
    lowF: 55,
  },
  "tokyo": {
    ...DEFAULT_WEATHER_DATA,
    city: "Tokyo",
    country: "Japan",
    formattedLocation: "Tokyo, Japan",
    tempC: 24,
    tempF: 75,
    feelsLikeC: 25,
    feelsLikeF: 77,
    condition: "Clear Sky",
    conditionDescription: "Brisk clear skies over the metropolitan area",
    iconType: "sunny",
    humidity: 62,
    windSpeedKm: 14,
    pressure: 1015,
    uvIndex: 5,
  },
  "new york": {
    ...DEFAULT_WEATHER_DATA,
    city: "New York",
    country: "United States",
    formattedLocation: "New York, USA",
    tempC: 21,
    tempF: 70,
    feelsLikeC: 21,
    feelsLikeF: 70,
    condition: "Partly Cloudy",
    conditionDescription: "Pleasant afternoon with scattered light clouds",
    iconType: "partly-cloudy",
    humidity: 55,
    windSpeedKm: 15,
    pressure: 1014,
    uvIndex: 5,
  },
  "paris": {
    ...DEFAULT_WEATHER_DATA,
    city: "Paris",
    country: "France",
    formattedLocation: "Paris, France",
    tempC: 19,
    tempF: 66,
    feelsLikeC: 19,
    feelsLikeF: 66,
    condition: "Mostly Sunny",
    conditionDescription: "Gentle breeze with pleasant warmth",
    iconType: "sunny",
    humidity: 60,
    windSpeedKm: 11,
    pressure: 1016,
    uvIndex: 4,
  },
};

// Helper: Geocoding + live weather fetch via free Open-Meteo API
export async function fetchLiveWeather(cityName) {
  const cleanQuery = cityName.trim().toLowerCase();
  
  if (PRESET_CITIES[cleanQuery]) {
    return PRESET_CITIES[cleanQuery];
  }

  try {
    // 1. Geocoding
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      return null;
    }

    const { latitude, longitude, name, country, admin1 } = geoData.results[0];

    // 2. Weather Fetch
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&hourly=temperature_2m,weather_code,precipitation_probability&timezone=auto`
    );
    const weatherData = await weatherRes.json();

    const current = weatherData.current;
    const daily = weatherData.daily;
    const hourly = weatherData.hourly;

    const weatherInfo = parseWmoCode(current.weather_code, current.is_day);

    const tempC = Math.round(current.temperature_2m);
    const feelsLikeC = Math.round(current.apparent_temperature);
    const tempF = Math.round((tempC * 9) / 5 + 32);
    const feelsLikeF = Math.round((feelsLikeC * 9) / 5 + 32);

    const forecastDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const parsedForecast = daily.time.slice(0, 7).map((dateStr, idx) => {
      const d = new Date(dateStr);
      const dayName = forecastDays[d.getDay()];
      const shortDay = shortDays[d.getDay()];
      const maxC = Math.round(daily.temperature_2m_max[idx]);
      const minC = Math.round(daily.temperature_2m_min[idx]);
      const info = parseWmoCode(daily.weather_code[idx], 1);

      return {
        day: idx === 0 ? "Today" : dayName,
        shortDay: shortDay,
        date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        iconType: info.iconType,
        condition: info.condition,
        maxC: maxC,
        maxF: Math.round((maxC * 9) / 5 + 32),
        minC: minC,
        minF: Math.round((minC * 9) / 5 + 32),
        precip: daily.precipitation_probability_max[idx] || 0,
        isToday: idx === 0,
      };
    });

    const parsedHourly = (hourly.time || []).slice(0, 7).map((t, idx) => {
      const d = new Date(t);
      const hourStr = d.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
      const hTempC = Math.round(hourly.temperature_2m[idx]);
      const info = parseWmoCode(hourly.weather_code[idx], 1);

      return {
        time: idx === 0 ? "Now" : hourStr,
        tempC: hTempC,
        tempF: Math.round((hTempC * 9) / 5 + 32),
        icon: info.iconType,
        pop: hourly.precipitation_probability ? hourly.precipitation_probability[idx] : 10,
      };
    });

    return {
      city: name,
      country: country || "",
      formattedLocation: `${name}${admin1 ? `, ${admin1}` : ""}${country ? `, ${country}` : ""}`,
      tempC,
      tempF,
      feelsLikeC,
      feelsLikeF,
      condition: weatherInfo.condition,
      conditionDescription: weatherInfo.desc,
      iconType: weatherInfo.iconType,
      highC: Math.round(daily.temperature_2m_max[0]),
      highF: Math.round((daily.temperature_2m_max[0] * 9) / 5 + 32),
      lowC: Math.round(daily.temperature_2m_min[0]),
      lowF: Math.round((daily.temperature_2m_min[0] * 9) / 5 + 32),
      humidity: current.relative_humidity_2m || 65,
      windSpeedKm: Math.round(current.wind_speed_10m || 10),
      windSpeedMph: Math.round((current.wind_speed_10m || 10) * 0.621371),
      windDirection: getWindDirection(current.wind_direction_10m),
      windDesc: "Moderate Breeze",
      pressure: Math.round(current.surface_pressure || 1013),
      pressureDesc: "Normal Atmospheric Pressure",
      visibilityKm: 10,
      visibilityMiles: 6.2,
      visibilityDesc: "Good Visibility",
      uvIndex: Math.round(daily.uv_index_max[0] || 5),
      uvDesc: getUvDescription(daily.uv_index_max[0] || 5),
      dewPointC: Math.round(tempC - (100 - (current.relative_humidity_2m || 65)) / 5),
      dewPointF: Math.round(((tempC - (100 - (current.relative_humidity_2m || 65)) / 5) * 9) / 5 + 32),
      airQualityIndex: 35,
      airQualityDesc: "Satisfactory",
      sunrise: "06:30 AM",
      sunset: "06:45 PM",
      updatedAt: "Updated just now",
      hourly: parsedHourly,
      forecast: parsedForecast,
    };
  } catch (error) {
    console.error("Failed to fetch live weather:", error);
    return null;
  }
}

function parseWmoCode(code, isDay = 1) {
  if (code === 0) {
    return {
      condition: isDay ? "Clear & Sunny" : "Clear Night",
      desc: isDay ? "Bright sunshine with cloudless sky" : "Crisp clear starry sky",
      iconType: isDay ? "sunny" : "clear-night",
    };
  }
  if (code === 1 || code === 2) {
    return {
      condition: "Partly Cloudy",
      desc: "Scattered fair weather clouds with sun breaks",
      iconType: "partly-cloudy",
    };
  }
  if (code === 3) {
    return {
      condition: "Overcast",
      desc: "Dense cloud blanket covering the area",
      iconType: "cloudy",
    };
  }
  if ([45, 48].includes(code)) {
    return {
      condition: "Foggy",
      desc: "Low-lying atmospheric fog reducing visibility",
      iconType: "foggy",
    };
  }
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
    return {
      condition: "Rain Showers",
      desc: "Passing rain showers with cooling temperatures",
      iconType: "rainy",
    };
  }
  if ([71, 73, 75, 85, 86].includes(code)) {
    return {
      condition: "Snow",
      desc: "Light to moderate snowfall",
      iconType: "snowy",
    };
  }
  if ([95, 96, 99].includes(code)) {
    return {
      condition: "Thunderstorm",
      desc: "Severe electrical storm with heavy precipitation",
      iconType: "thunderstorm",
    };
  }
  return {
    condition: "Partly Cloudy",
    desc: "Comfortable atmospheric conditions",
    iconType: "partly-cloudy",
  };
}

function getWindDirection(deg) {
  if (deg === undefined || deg === null) return "NE";
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(deg / 45) % 8];
}

function getUvDescription(uv) {
  if (uv <= 2) return "Low Risk";
  if (uv <= 5) return "Moderate Risk";
  if (uv <= 7) return "High Risk (Sunscreen recommended)";
  if (uv <= 10) return "Very High Risk";
  return "Extreme Risk";
}
