import React from 'react';
import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sun,
  Thermometer,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

export function HumidityCard({ humidity }) {
  // Humidity assessment
  const getStatus = (val) => {
    if (val < 30) return { text: 'Low / Dry', color: 'var(--amber-text)', bar: '30%' };
    if (val <= 60) return { text: 'Optimal Comfort', color: 'var(--emerald-text)', bar: `${val}%` };
    if (val <= 80) return { text: 'Moderate Humidity', color: 'var(--primary)', bar: `${val}%` };
    return { text: 'High Moisture', color: 'var(--violet)', bar: '95%' };
  };
  const status = getStatus(humidity);

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-badge humidity-badge">
          <Droplets size={20} />
        </div>
        <span className="stat-label">Humidity</span>
      </div>
      <div className="stat-value-row">
        <span className="stat-main-value">{humidity}%</span>
      </div>
      <div className="stat-progress-track">
        <div className="stat-progress-bar" style={{ width: `${humidity}%` }}></div>
      </div>
      <p className="stat-subtext" style={{ color: status.color }}>
        {status.text}
      </p>
    </div>
  );
}

export function WindCard({ windSpeedKm, windSpeedMph, windDirection, windDesc, unit = 'C' }) {
  const speed = unit === 'C' ? `${windSpeedKm} km/h` : `${windSpeedMph} mph`;

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-badge wind-badge">
          <Wind size={20} />
        </div>
        <span className="stat-label">Wind Speed</span>
      </div>
      <div className="stat-value-row">
        <span className="stat-main-value">{speed}</span>
      </div>
      <div className="stat-sub-row">
        <div className="stat-compass-pill">
          <Compass size={14} />
          <span>Direction: {windDirection || 'ESE'}</span>
        </div>
      </div>
      <p className="stat-subtext text-muted">
        {windDesc || 'Gentle coastal breeze'}
      </p>
    </div>
  );
}

export function PressureCard({ pressure, pressureDesc }) {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-badge pressure-badge">
          <Gauge size={20} />
        </div>
        <span className="stat-label">Pressure</span>
      </div>
      <div className="stat-value-row">
        <span className="stat-main-value">{pressure} <span className="stat-unit">hPa</span></span>
      </div>
      <div className="stat-progress-track">
        <div className="stat-progress-bar pressure-bar" style={{ width: '68%' }}></div>
      </div>
      <p className="stat-subtext text-muted">
        {pressureDesc || 'Normal atmospheric pressure'}
      </p>
    </div>
  );
}

export function VisibilityCard({ visibilityKm, visibilityMiles, visibilityDesc, unit = 'C' }) {
  const vis = unit === 'C' ? `${visibilityKm} km` : `${visibilityMiles} mi`;

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-badge visibility-badge">
          <Eye size={20} />
        </div>
        <span className="stat-label">Visibility</span>
      </div>
      <div className="stat-value-row">
        <span className="stat-main-value">{vis}</span>
      </div>
      <div className="stat-progress-track">
        <div className="stat-progress-bar visibility-bar" style={{ width: '90%' }}></div>
      </div>
      <p className="stat-subtext text-muted">
        {visibilityDesc || 'Clear line of sight'}
      </p>
    </div>
  );
}

export function UVIndexCard({ uvIndex, uvDesc }) {
  const getRisk = (uv) => {
    if (uv <= 2) return { level: 'Low', color: 'var(--emerald)' };
    if (uv <= 5) return { level: 'Moderate', color: 'var(--amber)' };
    if (uv <= 7) return { level: 'High', color: 'var(--amber-text)' };
    if (uv <= 10) return { level: 'Very High', color: 'var(--rose)' };
    return { level: 'Extreme', color: 'var(--violet)' };
  };

  const risk = getRisk(uvIndex);

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-badge uv-badge">
          <Sun size={20} />
        </div>
        <span className="stat-label">UV Index</span>
      </div>
      <div className="stat-value-row">
        <span className="stat-main-value">{uvIndex} <span className="stat-unit">/ 11</span></span>
      </div>
      <div className="stat-progress-track">
        <div
          className="stat-progress-bar uv-bar"
          style={{ width: `${Math.min((uvIndex / 11) * 100, 100)}%` }}
        ></div>
      </div>
      <p className="stat-subtext" style={{ color: risk.color }}>
        {uvDesc || `${risk.level} - Sunscreen suggested`}
      </p>
    </div>
  );
}

export function FeelsLikeCard({ feelsLikeC, feelsLikeF, tempC, unit = 'C' }) {
  const feelsVal = unit === 'C' ? `${feelsLikeC}°C` : `${feelsLikeF}°F`;
  const diff = feelsLikeC - tempC;
  const diffText = diff > 0 ? `+${diff}° warmer due to humidity` : diff < 0 ? `${diff}° cooler from wind` : 'Matches actual temp';

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-badge feels-badge">
          <Thermometer size={20} />
        </div>
        <span className="stat-label">Feels Like</span>
      </div>
      <div className="stat-value-row">
        <span className="stat-main-value">{feelsVal}</span>
      </div>
      <div className="stat-progress-track">
        <div className="stat-progress-bar feels-bar" style={{ width: '74%' }}></div>
      </div>
      <p className="stat-subtext text-muted">
        {diffText}
      </p>
    </div>
  );
}

export default function WeatherDetails({ data, unit = 'C' }) {
  if (!data) return null;

  return (
    <section className="weather-details-section">
      <div className="section-title-row">
        <h3 className="section-title">Current Weather Conditions</h3>
        <span className="section-badge">Real-time Metrics</span>
      </div>

      <div className="weather-details-grid">
        <HumidityCard humidity={data.humidity} />
        <WindCard
          windSpeedKm={data.windSpeedKm}
          windSpeedMph={data.windSpeedMph}
          windDirection={data.windDirection}
          windDesc={data.windDesc}
          unit={unit}
        />
        <PressureCard
          pressure={data.pressure}
          pressureDesc={data.pressureDesc}
        />
        <VisibilityCard
          visibilityKm={data.visibilityKm}
          visibilityMiles={data.visibilityMiles}
          visibilityDesc={data.visibilityDesc}
          unit={unit}
        />
        <UVIndexCard
          uvIndex={data.uvIndex}
          uvDesc={data.uvDesc}
        />
        <FeelsLikeCard
          feelsLikeC={data.feelsLikeC}
          feelsLikeF={data.feelsLikeF}
          tempC={data.tempC}
          unit={unit}
        />
      </div>
    </section>
  );
}
