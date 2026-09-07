import React from 'react';
import { Compass, CloudSun, MapPin, Sparkles, Search } from 'lucide-react';

export default function EmptyState({ onSelectCity }) {
  const quickPicks = ['Dar es Salaam', 'Zanzibar', 'Nairobi', 'London', 'Tokyo', 'New York'];

  return (
    <div className="state-card empty-state-card animate-fade-in">
      <div className="state-art-wrapper">
        <div className="state-art-glow"></div>
        <div className="state-icon-circle">
          <CloudSun size={64} className="empty-cloud-icon animate-float" />
        </div>
      </div>

      <h2 className="state-title">Search for a city to see the weather</h2>
      <p className="state-description">
        Enter a city name above to get current weather and forecast information, or choose one of our trending locations below.
      </p>

      <div className="empty-quick-cities">
        <span className="empty-quick-label">Try searching:</span>
        <div className="empty-chips-wrap">
          {quickPicks.map((city) => (
            <button
              key={city}
              className="empty-chip-btn"
              onClick={() => onSelectCity(city)}
            >
              <MapPin size={14} />
              <span>{city}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
