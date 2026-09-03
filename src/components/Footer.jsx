import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo-transparent.png'; // Adjust filename/extension as needed

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F7FC] border-t border-slate-200/60 pt-16 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section with Image Logo */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="inline-block">
            <img 
              src={logoImg} 
              alt="Trippy Web House" 
              className="h-10 sm:h-12 w-auto object-contain" 
            />
          </Link>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00A8E8]">
            ENGINEERING DIGITAL EXCELLENCE & AI-POWERED GROWTH
          </span>
          <p className="text-slate-600 text-sm leading-relaxed">
            We build high-performance web applications, automate business workflows with AI, and execute data-driven marketing strategies to scale ambitious brands globally.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">Navigate</h4>
          <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
            <li><Link to="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#1D4ED8] transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#1D4ED8] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#1D4ED8] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
            <li className="flex items-center gap-2">📞 +91 76959 48634</li>
            <li className="flex items-center gap-2">✉️ trippywebhouse@gmail.com</li>
            <li className="flex items-center gap-2">📷 @trippy_web.house</li>
          </ul>
        </div>

        {/* Start Project Column */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">Start a Project</h4>
          <p className="text-sm text-slate-600 mb-4">Tell us what you're building. We'll reply within a day.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            Get Free Quote ↗
          </Link>
        </div>

      </div>
    </footer>
  );
}