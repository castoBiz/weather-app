import React from 'react';
import { MapPin, Calendar, Clock, ArrowUp, ArrowDown, Sparkles, Droplets } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

export default function CurrentWeather({ data, unit = 'C' }) {
  if (!data) return null;

  const temp = unit === 'C' ? `${data.tempC}°C` : `${data.tempF}°F`;
  const feelsLike = unit === 'C' ? `${data.feelsLikeC}°C` : `${data.feelsLikeF}°F`;
  const highTemp = unit === 'C' ? `${data.highC}°C` : `${data.highF}°F`;
  const lowTemp = unit === 'C' ? `${data.lowC}°C` : `${data.lowF}°F`;

  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="current-weather-card">
      {/* Background ambient lighting/gradient effect */}
      <div className="card-ambient-glow"></div>

      <div className="current-weather-header">
        <div className="location-badge-group">
          <div className="location-icon-wrapper">
            <MapPin size={20} className="location-pin-icon" />
          </div>
          <div>
            <h2 className="location-name">{data.formattedLocation || data.city}</h2>
            <div className="datetime-row">
              <span className="datetime-item">
                <Calendar size={14} /> {formattedDate}
              </span>
              <span className="dot-separator">•</span>
              <span className="datetime-item">
                <Clock size={14} /> {formattedTime}
              </span>
            </div>
          </div>
        </div>

        <div className="live-status-pill">
          <span className="live-pulse-dot"></span>
          <span>{data.updatedAt || 'Live Data'}</span>
        </div>
      </div>

      {/* Main Temperature & Visuals */}
      <div className="current-weather-body">
        <div className="temp-hero-group">
          <div className="temp-display-wrap">
            <span className="temp-number">{temp}</span>
          </div>
          <div className="condition-meta">
            <div className="condition-badge">{data.condition}</div>
            <div className="feels-like-text">
              Feels like <span className="feels-like-value">{feelsLike}</span>
            </div>
            <div className="temp-range-pills">
              <span className="range-pill high">
                <ArrowUp size={12} /> High: {highTemp}
              </span>
              <span className="range-pill low">
                <ArrowDown size={12} /> Low: {lowTemp}
              </span>
            </div>
          </div>
        </div>

        <div className="weather-hero-art">
          <div className="weather-art-glow"></div>
          <WeatherIcon type={data.iconType} size={110} className="hero-icon animate-float" />
          <p className="condition-detailed-desc">{data.conditionDescription}</p>
        </div>
      </div>

      {/* Mini Hourly Forecast Strip */}
      {data.hourly && data.hourly.length > 0 && (
        <div className="hourly-preview-section">
          <div className="hourly-title-row">
            <span className="hourly-label">Next 6 Hours</span>
            <span className="hourly-sub">Local Timezone</span>
          </div>
          <div className="hourly-cards-strip">
            {data.hourly.slice(0, 6).map((hour, idx) => (
              <div key={idx} className={`hourly-card ${idx === 0 ? 'active' : ''}`}>
                <span className="hour-time">{hour.time}</span>
                <WeatherIcon type={hour.icon} size={22} className="hour-icon" />
                <span className="hour-temp">
                  {unit === 'C' ? `${hour.tempC}°` : `${hour.tempF}°`}
                </span>
                {hour.pop > 0 && (
                  <span className="hour-pop">
                    <Droplets size={10} /> {hour.pop}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
