import React from "react";

function SignalVisual({ compact = false }) {
  const gradientId = compact ? "signal-stroke-compact" : "signal-stroke-hero";
  const glowId = compact ? "signal-glow-compact" : "signal-glow-hero";

  return (
    <div className={`signal-console${compact ? " signal-console--compact" : ""}`} aria-hidden="true">
      <div className="signal-console__topbar">
        <span className="signal-console__status">
          <span className="status-dot" /> Signal online
        </span>
        <span>ET / BIO-01</span>
      </div>

      <div className="signal-console__screen">
        <div className="signal-console__axis" />
        <svg viewBox="0 0 620 210" preserveAspectRatio="none" role="presentation">
          <defs>
            <linearGradient id={gradientId} x1="0" x2="1">
              <stop offset="0%" stopColor="#6ee7d8" />
              <stop offset="48%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id={glowId} x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="signal-console__ghost"
            d="M0 116 C26 112 34 112 51 115 S82 120 98 114 122 105 141 115 168 128 187 112 210 108 226 114 252 123 269 113 293 105 312 116 338 126 355 113 378 104 399 115 426 130 444 112 468 106 487 115 511 124 529 113 556 106 575 114 603 121 620 113"
          />
          <path
            className="signal-console__wave"
            d="M0 116 C26 112 34 112 51 115 S82 120 98 114 L125 112 138 91 149 150 163 45 176 173 190 105 207 112 C225 116 239 123 254 114 L280 111 292 82 306 148 319 56 331 166 346 106 363 113 C383 118 397 122 412 113 L438 110 451 89 464 148 476 47 489 172 502 105 519 113 C539 118 553 121 568 113 S602 108 620 113"
            stroke={`url(#${gradientId})`}
            filter={`url(#${glowId})`}
          />
        </svg>

        <div className="signal-console__readout">
          <span>PPG</span>
          <strong>100</strong>
          <small>Hz</small>
        </div>
      </div>

      <div className="signal-console__metrics">
        <div>
          <span>Sensor</span>
          <strong>MAX30102</strong>
        </div>
        <div>
          <span>Pipeline</span>
          <strong>CWT + CNN</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>Live speech</strong>
        </div>
      </div>
    </div>
  );
}

export default SignalVisual;
