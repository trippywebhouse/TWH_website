import { TrendingUp, Globe, ShoppingCart, Megaphone } from 'lucide-react';
import logo from '../assets/logo-transparent.png';
import './BrowserPreview.css';

export default function BrowserPreview() {
  return (
    <div className="bpre">
      <div className="bpre-topbar">
        <img src={logo} alt="" className="bpre-logo" />
        <span className="bpre-brand">Trippy Web House</span>
        <div className="bpre-nav">
          <span>Home</span><span>Services</span><span>About</span><span className="bpre-nav-active">Contact</span>
        </div>
        <span className="bpre-btn">Get Started</span>
      </div>

      <div className="bpre-hero">
        <div className="bpre-hero-text">
          <div className="bpre-hero-title">Grow Your<br />Business Online</div>
          <div className="bpre-hero-sub">We deliver innovative digital solutions</div>
          <div className="bpre-hero-actions">
            <span className="bpre-cta">Get Started</span>
            <span className="bpre-play">▶ Watch Video</span>
          </div>
        </div>
        <div className="bpre-hero-chart">
          <div className="bpre-chart-label"><TrendingUp size={11} /> +68% Growth</div>
          <div className="bpre-bars">
            <span style={{ height: '30%' }} />
            <span style={{ height: '46%' }} />
            <span style={{ height: '38%' }} />
            <span style={{ height: '62%' }} />
            <span style={{ height: '52%' }} />
            <span style={{ height: '84%' }} />
            <span style={{ height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="bpre-cards">
        <div className="bpre-card"><Globe size={14} /> Website Design</div>
        <div className="bpre-card bpre-card-active"><TrendingUp size={14} /> SEO &amp; Growth</div>
        <div className="bpre-card"><ShoppingCart size={14} /> E-Commerce</div>
        <div className="bpre-card"><Megaphone size={14} /> 24/7 Support</div>
      </div>
    </div>
  );
}
