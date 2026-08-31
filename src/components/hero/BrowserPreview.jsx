import "./BrowserPreview.css";

export default function BrowserPreview() {
  return (
    <div className="browser-preview">
      <div className="browser-header">
        <div className="browser-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="browser-address">
          trippywebhouse.com
        </div>
      </div>

      <div className="browser-content">
        <div className="hero-banner">
          <div className="hero-title">
            Build. Brand. Grow.
          </div>

          <div className="hero-subtitle">
            Premium Websites
          </div>

          <button className="hero-btn">
            Get Started
          </button>
        </div>

        <div className="content-grid">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}