---
name: WeatherNow Modern SaaS
colors:
  surface: '#ffffff'
  surface-dim: '#f1f5f9'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8fafc'
  surface-container: '#f1f5f9'
  surface-container-high: '#e2e8f0'
  surface-container-highest: '#cbd5e1'
  on-surface: '#0f172a'
  on-surface-variant: '#64748b'
  inverse-surface: '#0b0f19'
  inverse-on-surface: '#f8fafc'
  outline: '#94a3b8'
  outline-variant: '#e2e8f0'
  surface-tint: '#0284c7'
  primary: '#0284c7'
  on-primary: '#ffffff'
  primary-container: '#e0f2fe'
  on-primary-container: '#0369a1'
  inverse-primary: '#38bdf8'
  secondary: '#0369a1'
  on-secondary: '#ffffff'
  secondary-container: '#bae6fd'
  on-secondary-container: '#0c4a6e'
  tertiary: '#f59e0b'
  on-tertiary: '#ffffff'
  tertiary-container: '#fef3c7'
  on-tertiary-container: '#b45309'
  error: '#ef4444'
  on-error: '#ffffff'
  error-container: '#fee2e2'
  on-error-container: '#991b1b'
  primary-fixed: '#bae6fd'
  primary-fixed-dim: '#7dd3fc'
  on-primary-fixed: '#082f49'
  on-primary-fixed-variant: '#0369a1'
  secondary-fixed: '#e0f2fe'
  secondary-fixed-dim: '#bae6fd'
  on-secondary-fixed: '#082f49'
  on-secondary-fixed-variant: '#0c4a6e'
  tertiary-fixed: '#fef3c7'
  tertiary-fixed-dim: '#fde68a'
  on-tertiary-fixed: '#451a03'
  on-tertiary-fixed-variant: '#92400e'
  background: '#f8fafc'
  on-background: '#0f172a'
  surface-variant: '#f1f5f9'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.375rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  2xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 20px
  header-height: 72px
  container-max: 1280px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

WeatherNow is a modern, professional, clean SaaS-style weather dashboard. It delivers ultra-fast, high-precision global weather intelligence with a refined minimalist aesthetic. The user experience is frictionless, welcoming general users who want to quickly look up forecasts by city or via geolocation.

### Visual Tone
- **Minimalist Modern SaaS**: Clean surface hierarchy, spacious grid, soft ambient shadows, subtle 1px border definition, and smooth micro-interactions.
- **Sky-Inspired Palette**: Atmospheric blues (Sky, Azure, Midnight Slate) complemented by solar amber and cloud silvers.
- **High Readability**: Bold geometric headings paired with exceptionally clear Inter body and tabular numerals for data metrics.

## Layout & Hierarchy

1. **Header Navigation**: Minimal sticky bar with brand emblem, unit switch (°C / °F toggle), theme selector (Light / Dark mode), and quick settings.
2. **Hero & Search Section**:
   - Compelling title: "Check Weather Anywhere"
   - Descriptive subtitle: "Get accurate weather information for any city around the world."
   - Prominent search input with embedded icon and primary Search CTA.
   - Secondary pill button: "📍 Use my current location".
3. **Current Weather Hero Card**:
   - Focal point with location name, current time/date, large temperature display, weather icon, and detailed sky condition text.
4. **Weather Metrics Grid (6 Essential Cards)**:
   - Humidity (%), Wind Speed (km/h), Atmospheric Pressure (hPa), Visibility (km), UV Index (score/category), Feels Like (°C).
5. **7-Day Forecast Carousel / Grid**:
   - High/Low temperatures, condition badges, and day labels with responsive horizontal scroll or grid.
6. **Weather States**:
   - Empty State (first load guidance), Loading Skeleton (pulsing placeholders), Error State (not found with Retry button), and Geolocation prompt.
