export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <svg className="atmosphere-grid" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2f6bff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#2f6bff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="1180" cy="120" r="420" fill="url(#glowBlue)" />
        <circle cx="120" cy="680" r="380" fill="url(#glowCyan)" />

        <g stroke="rgba(30,70,150,0.1)" strokeWidth="1">
          <line x1="80" y1="60" x2="320" y2="180" />
          <line x1="320" y1="180" x2="240" y2="380" />
          <line x1="320" y1="180" x2="540" y2="120" />
          <line x1="1100" y1="80" x2="1340" y2="220" />
          <line x1="1100" y1="80" x2="940" y2="200" />
          <line x1="1340" y1="220" x2="1260" y2="420" />
          <line x1="100" y1="820" x2="320" y2="700" />
          <line x1="320" y1="700" x2="560" y2="840" />
          <line x1="1180" y1="780" x2="1380" y2="900" />
          <line x1="1180" y1="780" x2="1000" y2="880" />
        </g>
        <g fill="#2f6bff" opacity="0.35">
          <circle cx="80" cy="60" r="2.5" />
          <circle cx="320" cy="180" r="2.5" />
          <circle cx="240" cy="380" r="2" />
          <circle cx="540" cy="120" r="2" />
          <circle cx="1100" cy="80" r="2.5" />
          <circle cx="1340" cy="220" r="2.5" />
          <circle cx="940" cy="200" r="2" />
          <circle cx="1260" cy="420" r="2" />
          <circle cx="100" cy="820" r="2" />
          <circle cx="320" cy="700" r="2.5" />
          <circle cx="560" cy="840" r="2" />
          <circle cx="1180" cy="780" r="2.5" />
          <circle cx="1380" cy="900" r="2" />
          <circle cx="1000" cy="880" r="2" />
        </g>
      </svg>
      <div className="atmosphere-fade" />
    </div>
  );
}
