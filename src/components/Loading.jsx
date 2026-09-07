import React from 'react';
import { Loader2, CloudSun } from 'lucide-react';

export default function Loading() {
  return (
    <div className="loading-state-wrapper animate-fade-in">
      <div className="loading-header-banner">
        <Loader2 className="loading-spinner animate-spin-slow" size={24} />
        <span className="loading-text">Getting weather data...</span>
      </div>

      {/* Skeleton Hero Card */}
      <div className="skeleton-hero-card">
        <div className="skeleton-row-top">
          <div className="skeleton" style={{ width: '220px', height: '32px' }}></div>
          <div className="skeleton" style={{ width: '120px', height: '24px', borderRadius: '9999px' }}></div>
        </div>
        <div className="skeleton-hero-body">
          <div className="skeleton-temp-stack">
            <div className="skeleton" style={{ width: '180px', height: '72px' }}></div>
            <div className="skeleton" style={{ width: '140px', height: '28px' }}></div>
            <div className="skeleton" style={{ width: '200px', height: '20px' }}></div>
          </div>
          <div className="skeleton" style={{ width: '130px', height: '130px', borderRadius: '50%' }}></div>
        </div>
        <div className="skeleton-hourly-strip">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton" style={{ width: '60px', height: '80px' }}></div>
          ))}
        </div>
      </div>

      {/* Skeleton Metrics Grid */}
      <div className="skeleton-metrics-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-metric-card">
            <div className="skeleton" style={{ width: '90px', height: '20px' }}></div>
            <div className="skeleton" style={{ width: '120px', height: '36px', marginTop: '12px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '8px', marginTop: '12px', borderRadius: '4px' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
