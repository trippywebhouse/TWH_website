import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo-transparent.png';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Fixed image source fallback */}
        <Link to="/" className="flex items-center gap-3 group no-underline">
          <div className="relative">
            <img 
              src={logoImg}
              alt="Trippy Web House" 
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Displays brand text badge if logo.png is missing in public folder
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden h-9 px-3.5 rounded-xl bg-gradient-to-r from-[#0B192C] to-[#1D4ED8] text-white font-black text-sm items-center justify-center tracking-wider shadow-sm">
              TWH
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-wider text-[#0B192C]/80">
          <Link to="/" className="hover:text-[#1D4ED8] transition-colors no-underline">Home</Link>
          <Link to="/services" className="hover:text-[#1D4ED8] transition-colors no-underline">Services</Link>
          <Link to="/about" className="hover:text-[#1D4ED8] transition-colors no-underline">About</Link>
          <Link to="/contact" className="hover:text-[#1D4ED8] transition-colors no-underline">Contact</Link>
        </div>

        {/* Desktop Styled CTA Button */}
        <div className="hidden md:flex items-center">
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] text-white font-bold text-xs tracking-wide shadow-[0_4px_20px_rgba(29,78,216,0.25)] border border-white/20 transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,210,254,0.35)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden no-underline"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Get a Quote</span>
            <div className="relative z-10 w-5 h-5 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl text-[#0B192C] bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100 px-6 py-6 space-y-4 shadow-2xl flex flex-col font-bold text-[#0B192C]">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8] transition-colors no-underline text-sm"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)}
            className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8] transition-colors no-underline text-sm"
          >
            Services
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8] transition-colors no-underline text-sm"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8] transition-colors no-underline text-sm"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] text-white font-bold text-xs tracking-wider shadow-lg no-underline"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}