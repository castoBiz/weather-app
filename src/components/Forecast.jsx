import React from 'react';
import { Calendar, Droplets } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

export function ForecastCard({ item, unit = 'C' }) {
  const maxTemp = unit === 'C' ? `${item.maxC}°C` : `${item.maxF}°F`;
  const minTemp = unit === 'C' ? `${item.minC}°C` : `${item.minF}°F`;

  return (
    <div className={`forecast-card ${item.isToday ? 'is-today' : ''}`}>
      {item.isToday && <div className="today-chip">Today</div>}
      
      <div className="forecast-card-top">
        <span className="forecast-day-name">{item.day}</span>
        <span className="forecast-date-sub">{item.date}</span>
      </div>

      <div className="forecast-icon-box">
        <WeatherIcon type={item.iconType} size={42} className="forecast-weather-icon" />
      </div>

      <div className="forecast-condition-label">
        {item.condition}
      </div>

      {item.precip > 0 ? (
        <div className="forecast-precip-pill">
          <Droplets size={12} />
          <span>{item.precip}%</span>
        </div>
      ) : (
        <div className="forecast-precip-pill dry">
          <span>0% rain</span>
        </div>
      )}

      <div className="forecast-temp-range">
        <span className="temp-max" title="Maximum Temperature">{maxTemp}</span>
        <span className="temp-divider">/</span>
        <span className="temp-min" title="Minimum Temperature">{minTemp}</span>
      </div>

      {/* Temperature Bar */}
      <div className="forecast-bar-track">
        <div
          className="forecast-bar-fill"
          style={{
            left: `${Math.max(((item.minC - 10) / 30) * 100, 5)}%`,
            right: `${Math.max(100 - ((item.maxC - 10) / 30) * 100, 5)}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Forecast({ forecast = [], unit = 'C' }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <section className="forecast-section">
      <div className="section-title-row">
        <div className="title-with-icon">
          <Calendar size={22} className="title-icon" />
          <h3 className="section-title">7-Day Forecast</h3>
        </div>
        <span className="section-badge">Weekly Outlook</span>
      </div>

      <div className="forecast-grid-container">
        <div className="forecast-cards-row">
          {forecast.map((item, index) => (
            <ForecastCard key={index} item={item} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
}
