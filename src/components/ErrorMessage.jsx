import React from 'react';
import { AlertCircle, RefreshCw, Search } from 'lucide-react';

export default function ErrorMessage({
  city = '',
  onRetry,
  onReset,
}) {
  return (
    <div className="state-card error-state-card animate-fade-in">
      <div className="state-art-wrapper error-art">
        <div className="state-icon-circle error-circle">
          <AlertCircle size={56} className="error-icon" />
        </div>
      </div>

      <h2 className="state-title">City not found</h2>
      <p className="state-description">
        {city
          ? `We couldn't find any meteorological data for "${city}". Please check the spelling or try another city.`
          : 'Please check the city name and try again.'}
      </p>

      <div className="error-actions-group">
        <button
          type="button"
          className="error-retry-btn"
          onClick={onRetry}
        >
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>

        {onReset && (
          <button
            type="button"
            className="error-reset-btn"
            onClick={onReset}
          >
            <Search size={18} />
            <span>Search Popular Cities</span>
          </button>
        )}
      </div>
    </div>
  );
}
