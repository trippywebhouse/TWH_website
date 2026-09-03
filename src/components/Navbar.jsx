import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import logoImg from '../assets/logo-transparent.png'; // Adjust extension (.png, .svg, .webp) as needed
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">
        
        {/* Left: Image Logo */}
        <NavLink to="/" className="nav-logo-link">
          <img 
            src={logoImg} 
            alt="Trippy Web House" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Center: Navigation Links */}
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

        {/* Right: Get a Quote Button */}
        <div className="nav-actions">
          <Link to="/contact" className="nav-btn">
            Get a Quote ↗
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link-active' : ''}`}
              onClick={() => setOpen(false)}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mobile-nav-btn" onClick={() => setOpen(false)}>
            Get a Quote ↗
          </Link>
        </div>
      )}
    </header>
  );
}