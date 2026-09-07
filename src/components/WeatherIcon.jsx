import React from 'react';
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  Moon,
} from 'lucide-react';

export default function WeatherIcon({ type, size = 32, className = '' }) {
  switch (type) {
    case 'sunny':
    case 'clear':
      return (
        <div className={`weather-icon-sun ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sun size={size} color="var(--chart-4)" strokeWidth={2.2} />
        </div>
      );
    case 'partly-cloudy':
      return (
        <div className={`weather-icon-partly-cloudy ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <CloudSun size={size} color="var(--primary)" strokeWidth={2.2} />
        </div>
      );
    case 'cloudy':
    case 'overcast':
      return (
        <div className={`weather-icon-cloudy ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Cloud size={size} color="var(--muted-foreground)" strokeWidth={2.2} />
        </div>
      );
    case 'rainy':
    case 'rain':
      return (
        <div className={`weather-icon-rain ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <CloudRain size={size} color="var(--accent)" strokeWidth={2.2} />
        </div>
      );
    case 'thunderstorm':
      return (
        <div className={`weather-icon-thunder ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <CloudLightning size={size} color="var(--primary)" strokeWidth={2.2} />
        </div>
      );
    case 'snowy':
    case 'snow':
      return (
        <div className={`weather-icon-snow ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <CloudSnow size={size} color="var(--chart-2)" strokeWidth={2.2} />
        </div>
      );
    case 'foggy':
      return (
        <div className={`weather-icon-fog ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <CloudFog size={size} color="var(--muted-foreground)" strokeWidth={2.2} />
        </div>
      );
    case 'clear-night':
      return (
        <div className={`weather-icon-night ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Moon size={size} color="var(--primary)" strokeWidth={2.2} />
        </div>
      );
    default:
      return (
        <div className={`weather-icon-default ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <CloudSun size={size} color="var(--primary)" strokeWidth={2.2} />
        </div>
      );
  }
}
