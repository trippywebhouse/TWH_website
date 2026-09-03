import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Step 1: Import Helmet
import { 
  Sparkles, 
  Award, 
  ExternalLink, 
  FolderGit2, 
  ArrowUpRight, 
  User 
} from 'lucide-react';

export default function About() {
  const completedProjects = [
    {
      title: "S. Suresh Kumar Portfolio",
      category: "Education & Mathematics Author",
      badge: "Education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      description: "Interactive author website featuring mathematics curriculum resources, published books, and achievements.",
      liveUrl: "#"
    },
    {
      title: "Portfolio",
      category: "AI & Data Science Specialist",
      badge: "Personal Portfolio",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      description: "Modern 3D interactive portfolio highlighting AI research, full-stack applications, and machine learning models.",
      liveUrl: "https://eshwar003ae.github.io/AEV-portfolio/"
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#0B192C]">
      
      {/* Dynamic SEO Meta Tags using React Helmet */}
      <Helmet>
        {/* Primary Page Title & Meta Description */}
        <title>About Us | Trippy Web House - Digital Agency & MSME Registered</title>
        <meta 
          name="description" 
          content="Learn about Trippy Web House — a Govt. MSME Udyam registered digital growth studio based in Tamil Nadu building modern web apps, brand assets, and custom AI automations." 
        />
        <meta 
          name="keywords" 
          content="About Trippy Web House, MSME Registered Web Agency, Digital Growth Agency Tamil Nadu, Arunachala Eshwar Vetrivel, Web Development Studio" 
        />

        {/* Social Media Link Preview Tags */}
        <meta property="og:title" content="About Trippy Web House | MSME Registered Growth Studio" />
        <meta 
          property="og:description" 
          content="We bridge engineering and design to build web systems, brand identities, and AI integrations." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trippywebhouse.vercel.app/about" />
      </Helmet>

      {/* 1. Header Hero Banner */}
      <section className="relative w-full py-24 md:py-32 bg-[#0B192C] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')` 
          }}
        />

        {/* Ambient Radial Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#1D4ED8] to-[#00A8E8] opacity-30 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-500 opacity-20 blur-[110px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-[#00A8E8] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">Trippy Web House</span>
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition-colors no-underline text-slate-300">Home</Link>
            <span className="text-cyan-500">&gt;</span>
            <span className="text-cyan-400">About</span>
          </div>
        </div>
      </section>

      {/* 2. Company & MSME Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="relative group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-500/20 backdrop-blur-md shadow-[0_4px_20px_rgba(11,25,44,0.06)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] font-extrabold bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#00A8E8] bg-clip-text text-transparent tracking-widest uppercase">
              ABOUT OUR COMPANY
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] leading-[1.15] tracking-tight font-sans">
            We’re a Digital Studio Obsessed with Your{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">
              Growth.
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
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Box */}
          <div className="space-y-6">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Trippy Web House is a premier digital agency building high-performance web applications, modern brand identities, and custom AI solutions for startups and growing enterprises across India.
            </p>

            {/* MSME Udyam Registration Box */}
            <div className="p-6 bg-gradient-to-br from-white to-slate-50 border border-cyan-500/20 rounded-3xl shadow-[0_10px_30px_rgba(11,25,44,0.04)] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#00A8E8] flex items-center justify-center text-white shrink-0 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-lg text-[#0B192C]">
                  Government MSME Udyam Registered Enterprise
                </h4>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Recognized by the Ministry of Micro, Small & Medium Enterprises (Govt. of India), ensuring official compliance, trust, and enterprise-grade service delivery.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(29,78,216,0.3)] border border-white/20 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,210,254,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden no-underline"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10">Work With Us</span>
                <div className="relative z-10 w-7 h-7 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative bg-[#0B192C] rounded-3xl p-10 text-white shadow-2xl overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1D4ED8] to-[#00A8E8] flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-black">Build. Brand. Grow.</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We bridge the gap between technical engineering and creative design, delivering tailored web systems and marketing assets engineered for real commercial impact.
              </p>
              
              <div className="pt-4 grid grid-cols-3 gap-3">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 text-center border border-white/10">
                  <p className="text-xs font-bold text-cyan-400">Digital Marketing</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 text-center border border-white/10">
                  <p className="text-xs font-bold text-cyan-400">AI & Growth</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 text-center border border-white/10">
                  <p className="text-xs font-bold text-cyan-400">Web Development</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Founder Details Section */}
      <section className="bg-white py-16 md:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">
              Meet Our Founder
            </h2>
            <p className="text-slate-600 font-medium text-base mt-2">
              Driving innovative engineering and vision at Trippy Web House
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0B192C] to-[#1E3E62] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#1D4ED8] to-[#00D2FE] p-1 shrink-0 shadow-lg">
              <div className="w-full h-full rounded-full bg-[#0B192C] flex items-center justify-center">
                <User className="w-16 h-16 text-cyan-400" />
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Arunachala Eshwar Vetrivel
                </h3>
                <p className="text-cyan-400 font-semibold text-sm">
                  Founder of Trippy Web House
                </p>
              </div>

              <div>
                <a 
                  href="https://eshwar003ae.github.io/AEV-portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold hover:bg-cyan-500/30 transition-all no-underline"
                >
                  <span>Explore Founder Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Completed Projects & Showcase Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="relative group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-500/20 backdrop-blur-md shadow-[0_4px_20px_rgba(11,25,44,0.06)]">
            <span className="text-[11px] font-extrabold bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#00A8E8] bg-clip-text text-transparent tracking-widest uppercase">
              OUR WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] leading-[1.15] tracking-tight">
            Projects We've Built & <span className="text-[#1D4ED8]">Shipped.</span>
          </h2>
          <p className="text-slate-600 font-medium text-base">
            Real websites, real clients, real results across Tamil Nadu and beyond.
          </p>
        </div>

        {/* Retained Live Websites Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {completedProjects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(11,25,44,0.04)] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-[#0B192C] text-xs font-extrabold shadow-sm">
                  {project.badge}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-extrabold text-[#0B192C]">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#1D4ED8] hover:text-[#00A8E8] transition-colors no-underline"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Showcase Links (Google Drive & Instagram Reels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Drive Showcase */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-100 flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-extrabold text-[#0B192C] flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-[#1D4ED8]" />
                Design Portfolio Drive
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                View our logos, posters, and digital creation archives.
              </p>
            </div>
            <a 
              href="https://drive.google.com/drive/folders/1fqneProm-wJWU65iybTsaDvVO87Jogzo?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white text-[#1D4ED8] shadow-md hover:bg-[#1D4ED8] hover:text-white transition-all no-underline"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Instagram Updates */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-extrabold text-[#0B192C] flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram Reels & Updates
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Watch our latest creative video ads and studio posts.
              </p>
            </div>
            <a 
              href="https://instagram.com/trippy_web.house" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white text-pink-600 shadow-md hover:bg-pink-600 hover:text-white transition-all no-underline"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] py-16 px-6 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Ready to Elevate Your Business?</h2>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with Trippy Web House today to discuss your project requirements and receive a customized strategy.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-[#0B192C] font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:text-[#1D4ED8] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden no-underline"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-slate-200/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10">Start Your Project</span>
              <div className="relative z-10 w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}