import React from 'react';
import { MapPin, Loader2 } from 'lucide-react';

export default function LocationButton({ onClick, isLoading = false, className = '' }) {
  return (
    <button
      type="button"
      className={`location-button-secondary ${className}`}
      onClick={onClick}
      disabled={isLoading}
      title="Fetch weather for your current GPS coordinates"
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="animate-spin-slow" />
          <span>Locating you...</span>
        </>
      ) : (
        <>
          <span className="location-pin-emoji">📍</span>
          <span>Use my current location</span>
        </>
      )}
    </button>
  );
}
