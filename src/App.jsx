import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import LocationPermissionState from './components/LocationPermissionState';
import { DEFAULT_WEATHER_DATA, PRESET_CITIES, fetchLiveWeather } from './data/mockWeather';
import { CloudSun, Sparkles } from 'lucide-react';
import './App.css';

export default function App() {
  // App state
  const [unit, setUnit] = useState('C'); // 'C' or 'F'
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [weatherState, setWeatherState] = useState('success'); // 'success' | 'empty' | 'loading' | 'error' | 'location_permission'
  const [weatherData, setWeatherData] = useState(DEFAULT_WEATHER_DATA);
  const [lastSearchedCity, setLastSearchedCity] = useState('Dar es Salaam');
  const [isLocating, setIsLocating] = useState(false);

  // Sync theme with data-theme attribute on root HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Search handler
  const handleSearch = async (query) => {
    if (!query || !query.trim()) return;

    const trimmedQuery = query.trim();
    setLastSearchedCity(trimmedQuery);
    setWeatherState('loading');

    // Simulate snappy network call or live geocoding
    try {
      const data = await fetchLiveWeather(trimmedQuery);
      if (data) {
        setWeatherData(data);
        setWeatherState('success');
      } else {
        setWeatherState('error');
      }
    } catch (err) {
      console.error(err);
      setWeatherState('error');
    }
  };

  // Location handler (triggers permission modal/prompt or direct browser geolocation)
  const handleCurrentLocationClick = () => {
    setWeatherState('location_permission');
  };

  const handleGrantLocationPermission = () => {
    setIsLocating(true);
    setWeatherState('loading');

    if (!navigator.geolocation) {
      // Fallback
      setTimeout(() => {
        setIsLocating(false);
        setWeatherData(DEFAULT_WEATHER_DATA);
        setWeatherState('success');
      }, 1000);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setIsLocating(false);
        const { latitude, longitude } = pos.coords;
        try {
          // Reverse geocode or fetch coordinate weather
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&hourly=temperature_2m,weather_code,precipitation_probability&timezone=auto`
          );
          const weatherJson = await weatherRes.json();

          if (weatherJson && weatherJson.current) {
            // Geocode reverse name
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const geoJson = await geoRes.json();
            const cityName = geoJson.address?.city || geoJson.address?.town || geoJson.address?.state || "Your Location";
            const countryName = geoJson.address?.country || "";

            const liveData = await fetchLiveWeather(cityName);
            if (liveData) {
              setWeatherData(liveData);
              setWeatherState('success');
            } else {
              setWeatherData(DEFAULT_WEATHER_DATA);
              setWeatherState('success');
            }
          } else {
            setWeatherData(DEFAULT_WEATHER_DATA);
            setWeatherState('success');
          }
        } catch (e) {
          // Fallback gracefully
          setWeatherData(DEFAULT_WEATHER_DATA);
          setWeatherState('success');
        }
      },
      (error) => {
        setIsLocating(false);
        // Default to Dar es Salaam gracefully if user denies
        setWeatherData(DEFAULT_WEATHER_DATA);
        setWeatherState('success');
      },
      { timeout: 8000 }
    );
  };

  const handleRetrySearch = () => {
    handleSearch(lastSearchedCity || 'Dar es Salaam');
  };

  const handleResetToEmpty = () => {
    setWeatherState('empty');
  };

  return (
    <div className="app-wrapper">
      <div className="app-bg-decor"></div>

      {/* Header */}
      <Header
        unit={unit}
        setUnit={setUnit}
        theme={theme}
        toggleTheme={toggleTheme}
        currentState={weatherState}
        setCurrentState={setWeatherState}
      />

      {/* Hero & Search Section */}
      <SearchBar
        onSearch={handleSearch}
        onCurrentLocation={handleCurrentLocationClick}
        isLoading={weatherState === 'loading' && isLocating}
      />

      {/* Dynamic View State Router */}
      <main className="main-dashboard-content">
        {weatherState === 'loading' && <Loading />}

        {weatherState === 'empty' && (
          <EmptyState onSelectCity={handleSearch} />
        )}

        {weatherState === 'error' && (
          <ErrorMessage
            city={lastSearchedCity}
            onRetry={handleRetrySearch}
            onReset={() => setWeatherState('empty')}
          />
        )}

        {weatherState === 'location_permission' && (
          <LocationPermissionState
            onGrantPermission={handleGrantLocationPermission}
            onCancel={() => setWeatherState('success')}
            isLoading={isLocating}
          />
        )}

        {weatherState === 'success' && (
          <div className="dashboard-view animate-fade-in">
            {/* 2-Column Split: Current Weather Hero (Left) & Detailed Metrics (Right) */}
            <div className="dashboard-grid-split">
              <CurrentWeather data={weatherData} unit={unit} />
              <WeatherDetails data={weatherData} unit={unit} />
            </div>

            {/* 7-Day Forecast Row */}
            <Forecast forecast={weatherData?.forecast} unit={unit} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-brand">WeatherNow</span>
            <span className="footer-copy">
              © 2026 WeatherNow Inc. • Real-Time Global Meteorological Intelligence
            </span>
          </div>
          <div className="footer-right">
            <span className="footer-badge">● Systems Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
