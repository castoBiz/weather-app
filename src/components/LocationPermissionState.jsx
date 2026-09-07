import React from 'react';
import { Navigation, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export default function LocationPermissionState({
  onGrantPermission,
  onCancel,
  isLoading = false,
}) {
  return (
    <div className="state-card permission-state-card animate-fade-in">
      <div className="state-art-wrapper permission-art">
        <div className="state-icon-circle permission-circle">
          <Navigation size={56} className="permission-icon animate-float" />
        </div>
      </div>

      <div className="permission-badge-pill">
        <ShieldCheck size={16} />
        <span>Privacy-Focused Geolocation</span>
      </div>

      <h2 className="state-title">
        Allow location access to get weather for your current position.
      </h2>
      <p className="state-description">
        WeatherNow uses your browser's precise GPS coordinates to provide hyper-local, real-time forecasts, temperature alerts, and hourly forecasts for your exact location.
      </p>

      <div className="permission-actions-group">
        <button
          type="button"
          className="permission-grant-btn"
          onClick={onGrantPermission}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="btn-spinner"></span>
          ) : (
            <>
              <MapPin size={18} />
              <span>Enable GPS Location</span>
            </>
          )}
        </button>

        <button
          type="button"
          className="permission-cancel-btn"
          onClick={onCancel}
        >
          <span>Cancel & Search Manually</span>
        </button>
      </div>
    </div>
  );
}
