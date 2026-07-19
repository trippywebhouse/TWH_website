export default function PeakMark({ size = 28, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.82}
      viewBox="0 0 100 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 4 L94 78 L70 78 L50 42 L30 78 L6 78 Z"
        fill="url(#peakGradMark)"
      />
      <defs>
        <linearGradient id="peakGradMark" x1="50" y1="4" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5ee7ff" />
          <stop offset="55%" stopColor="#2f6bff" />
          <stop offset="100%" stopColor="#0c2470" />
        </linearGradient>
      </defs>
    </svg>
  );
}
