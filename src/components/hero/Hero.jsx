import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderCheck,
  Headphones,
  ArrowUpRight,
  Play,
  Sparkles
} from 'lucide-react';
import HeroRight from './HeroRight';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F4F7FC] overflow-hidden pt-6 pb-12 px-4 md:px-12 font-sans">
      
      {/* Soft Sapphire Radial Glow */}
      <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/15 to-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-120px)]">
        
        {/* Left Column Content */}
        <div className="lg:col-span-5 z-10 flex flex-col items-start space-y-6">
          
          {/* Sapphire Glass Badge */}
          <div className="relative group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-500/20 backdrop-blur-md shadow-[0_4px_20px_rgba(11,25,44,0.06)] transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_4px_25px_rgba(0,210,254,0.18)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] font-extrabold bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#00A8E8] bg-clip-text text-transparent tracking-widest uppercase">
              WELCOME TO TRIPPY WEB HOUSE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B192C] leading-[1.15] tracking-tight font-sans">
            Build Digital <br />
            Experiences That{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">
              Scale Brands.
              <svg 
                className="absolute left-0 -bottom-1 w-full h-2.5 text-[#00D2FE] max-w-full" 
                viewBox="0 0 200 9" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M2.00073 7C50.0007 2 150.001 2 198.001 7" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-md leading-relaxed font-medium">
            We engineer high-converting web applications, execute data-driven digital marketing, craft unique brand identities, and integrate custom AI solutions for modern businesses.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            
            {/* Start Your Project Button (Navigates to /contact) */}
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(29,78,216,0.3)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,210,254,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden no-underline"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              
              <span className="relative z-10">Start Your Project</span>
              <div className="relative z-10 w-7 h-7 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
            
            {/* View Portfolio Button (Navigates to /about) */}
            <Link 
              to="/about" 
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#0B192C] font-bold text-sm border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_8px_25px_rgba(0,210,254,0.15)] hover:-translate-y-0.5 active:translate-y-0 no-underline"
            >
              <span>View Portfolio</span>
              <div className="w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-[#0B192C] flex items-center justify-center transition-colors duration-300">
                <Play className="w-3.5 h-3.5 fill-[#0B192C] text-[#0B192C] group-hover:fill-cyan-400 group-hover:text-cyan-400 ml-0.5 transition-colors duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column Component */}
        <div className="lg:col-span-7 z-10">
          <HeroRight />
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-6 bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-gray-100 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        <div className="md:col-span-6 border-r-0 md:border-r border-gray-200 pr-6">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            TRUSTED BY AMAZING BUSINESSES
          </p>
          <div className="flex items-center justify-between text-[#0B192C] font-extrabold text-xs tracking-wider">
            <span>ROYAL STEEL GLASS SOLUTION</span>
            <span>MIRRA PETRO PRODUCTS</span>
            <span>FRESH THALIR</span>
          </div>
        </div>

        <div className="md:col-span-6 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-3.5 rounded-2xl flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <FolderCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B192C] leading-none">20+</h3>
              <p className="text-xs text-gray-500 mt-1">Projects Done</p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B192C] leading-none">24/7</h3>
              <p className="text-xs text-gray-500 mt-1">Support</p>
            </div>
          </div>
        </div>
        
      </div>

    </section>
  );
}