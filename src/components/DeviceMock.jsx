import { useRef, useState } from 'react';
import './DeviceMock.css';

export default function DeviceMock({ children, className = '' }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 8;
    setStyle({
      transform: `perspective(1400px) rotateX(${rotateX + 6}deg) rotateY(${rotateY - 8}deg) scale(1.01)`,
    });
  }

  function handleLeave() {
    setStyle({
      transform: 'perspective(1400px) rotateX(8deg) rotateY(-10deg) scale(1)',
    });
  }

  return (
    <div
      ref={ref}
      className={`device-mock ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="device-mock-bezel">
        <div className="device-mock-cam" />
        <div className="device-mock-screen">{children}</div>
      </div>
      <div className="device-mock-base" />
      <div className="device-mock-reflection" />
    </div>
  );
}
