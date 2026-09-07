import React from 'react';
import { Sun, Moon, CloudSun, Sparkles, Layers } from 'lucide-react';

export default function Header({
  unit,
  setUnit,
  theme,
  toggleTheme,
  currentState,
  setCurrentState,
}) {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <div className="brand-group" onClick={() => setCurrentState('success')}>
          <div className="brand-icon-wrapper">
            <CloudSun className="brand-icon" size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Weather<span className="brand-highlight">Now</span></span>
            <span className="brand-badge">PRO</span>
          </div>
        </div>

        {/* Minimal Navigation (Desktop) */}
        <nav className="header-nav">
          <button
            className={`nav-link ${currentState === 'success' ? 'active' : ''}`}
            onClick={() => setCurrentState('success')}
          >
            Dashboard
          </button>
          <button
            className={`nav-link ${currentState === 'empty' ? 'active' : ''}`}
            onClick={() => setCurrentState('empty')}
          >
            Initial State
          </button>
          <button
            className={`nav-link ${currentState === 'loading' ? 'active' : ''}`}
            onClick={() => setCurrentState('loading')}
          >
            Loading State
          </button>
          <button
            className={`nav-link ${currentState === 'error' ? 'active' : ''}`}
            onClick={() => setCurrentState('error')}
          >
            Error State
          </button>
          <button
            className={`nav-link ${currentState === 'location_permission' ? 'active' : ''}`}
            onClick={() => setCurrentState('location_permission')}
          >
            Location Perm
          </button>
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Unit Switcher */}
          <div className="unit-toggle" role="group" aria-label="Temperature unit selector">
            <button
              className={`unit-btn ${unit === 'C' ? 'active' : ''}`}
              onClick={() => setUnit('C')}
              title="Celsius"
            >
              °C
            </button>
            <button
              className={`unit-btn ${unit === 'F' ? 'active' : ''}`}
              onClick={() => setUnit('F')}
              title="Fahrenheit"
            >
              °F
            </button>
          </div>

          {/* Theme Switcher */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="theme-icon sun-icon" />
            ) : (
              <Moon size={20} className="theme-icon moon-icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
