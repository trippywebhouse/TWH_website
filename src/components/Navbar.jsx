import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo-transparent.png';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [window.location.pathname]);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Trippy Web House" className="nav-logo" />
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn-primary nav-cta">
          Get a Quote <ArrowUpRight size={16} />
        </NavLink>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-mobile-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={() => setOpen(false)}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Get a Quote <ArrowUpRight size={16} />
          </NavLink>
        </div>
      )}
    </header>
  );
}
