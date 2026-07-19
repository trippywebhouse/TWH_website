import { NavLink } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import logo from '../assets/logo-transparent.png';
import PeakMark from './PeakMark';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer footer-light">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <img src={logo} alt="Trippy Web House" className="footer-logo" />
          </div>
          <div className="footer-brand-sub-light">Your One Stop Digital Growth Partner</div>
          <p className="footer-desc-light">
            We build websites, run e-commerce launches, and grow brands online —
            for startups and businesses across India.
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title-light">Navigate</div>
          <NavLink className="footer-link-light" to="/" end>Home</NavLink>
          <NavLink className="footer-link-light" to="/services">Services</NavLink>
          <NavLink className="footer-link-light" to="/about">About</NavLink>
          <NavLink className="footer-link-light" to="/contact">Contact</NavLink>
        </div>

        <div className="footer-col">
          <div className="footer-col-title-light">Get in touch</div>
          <a className="footer-link-light" href="tel:+917695948634"><Phone size={15} /> +91 76959 48634</a>
          <a className="footer-link-light" href="mailto:trippywebhouse@gmail.com"><Mail size={15} /> trippywebhouse@gmail.com</a>
          <a className="footer-link-light" href="https://instagram.com/trippy_web.house" target="_blank" rel="noreferrer">
            <InstagramIcon size={15} /> @trippy_web.house
          </a>
        </div>

        <div className="footer-col footer-cta-col">
          <div className="footer-col-title-light">Start a project</div>
          <p className="footer-cta-text-light">Tell us what you're building. We'll reply within a day.</p>
          <NavLink to="/contact" className="btn btn-primary footer-btn">
            Get Free Quote <ArrowUpRight size={15} />
          </NavLink>
        </div>
      </div>

      <div className="footer-bottom-light container">
        <div className="footer-bottom-left">
          <PeakMark size={16} />
          <span>© {new Date().getFullYear()} Trippy Web House. Build. Brand. Grow.</span>
        </div>
        <div>Designed &amp; engineered in Tamil Nadu, India</div>
      </div>
    </footer>
  );
}
