import React, { useState } from 'react';
import { Search, X, MapPin, Sparkles } from 'lucide-react';
import LocationButton from './LocationButton';

export default function SearchBar({
  onSearch,
  onCurrentLocation,
  popularCities = [],
  isLoading = false,
}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleSelectCity = (cityName) => {
    setQuery(cityName);
    onSearch(cityName);
  };

  return (
    <section className="hero-search-section">
      <div className="hero-content">
        <h1 className="hero-title">Check Weather Anywhere</h1>
        <p className="hero-subtitle">
          Get accurate weather information for any city around the world.
        </p>

        {/* Main Search Form */}
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city, e.g., Dar es Salaam, London, Tokyo..."
              aria-label="Search city name"
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={handleClear}
                aria-label="Clear search input"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="search-submit-btn"
            disabled={isLoading || !query.trim()}
          >
            {isLoading ? (
              <span className="btn-spinner"></span>
            ) : (
              <span>Search</span>
            )}
          </button>
        </form>

        {/* Location Button (Visually Secondary) */}
        <div className="location-btn-wrapper">
          <LocationButton
            onClick={onCurrentLocation}
            isLoading={isLoading}
          />
        </div>

        {/* Popular City Tags */}
        <div className="popular-cities-group">
          <span className="popular-label">Popular:</span>
          <div className="popular-tags-list">
            {['Dar es Salaam', 'London', 'Tokyo', 'New York', 'Paris', 'Nairobi', 'Zanzibar'].map((city) => (
              <button
                key={city}
                type="button"
                className="popular-tag-btn"
                onClick={() => handleSelectCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
