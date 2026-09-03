import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Megaphone, 
  Sparkles, 
  Bot, 
  Share2, 
  Palette, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  const services = [

    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Megaphone,
      accentColor: 'from-indigo-500 to-blue-500',
      description: 'Data-driven marketing strategies to expand your digital footprint and generate qualified leads.',
      features: [
        'Social Media Marketing',
        'Meta Campaign Setup & Optimization',
        'Targeted PPC Advertising',
        'Search Engine Optimization (SEO)',
        'Conversion Rate Optimization'
      ]
    },

    {
      id: 'ai-setup',
      title: 'AI Setup for Business',
      icon: Bot,
      accentColor: 'from-blue-600 to-cyan-500',
      description: 'Tailored artificial intelligence integrations to automate workflows and elevate business performance.',
      features: [
        'Business Process AI Automation',
        'Custom AI Agents',
        'Customized AI Setup for Business',
        'Workflow & CRM Automation',
        'Data & Analytics AI Insights'
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Globe,
      accentColor: 'from-blue-500 to-cyan-400',
      description: 'Custom, high-performance web applications built for optimal speed, security, and scalability.',
      features: [
        'E-Commerce Websites',
        'Portfolio Websites',
        'Business / Corporate Websites',
        'Educational Websites',
        'Community & Forum Platforms'
      ]
    },
    
    {
      id: 'digital-creation',
      title: 'Digital Creation',
      icon: Sparkles,
      accentColor: 'from-cyan-500 to-teal-400',
      description: 'Eye-catching visual media designed to engage your target audience across all marketing touchpoints.',
      features: [
        'Commercial AI Ads',
        'Print & Digital Pamphlets',
        'Social Media Creative Posters',
        'Product & Service Catalogues',
        'Interactive Brand Collateral'
      ]
    },
    
    {
      id: 'social-media-management',
      title: 'Social Media Management',
      icon: Share2,
      accentColor: 'from-cyan-400 to-blue-500',
      description: 'End-to-end management of your social presence to build audience loyalty and active engagement.',
      features: [
        'Manage Instagram, Facebook & WhatsApp',
        'Brand Awareness Campaigns',
        'Festival Greetings & Customer Notifications',
        'Community Engagement & Strategy',
        'Content Scheduling & Analytics'
      ]
    },
    {
      id: 'branding-identity',
      title: 'Branding & Identity',
      icon: Palette,
      accentColor: 'from-indigo-600 to-blue-400',
      description: 'Cohesive branding packages designed to establish authority and create lasting impressions.',
      features: [
        'Logo & Brand Identity Design',
        'Setup Online Background & Assets',
        'Brand Style Guidelines & Color Palettes',
        'Typography & Graphic Systems',
        'Corporate Marketing Kits'
      ]
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#0B192C]">
      
      {/* 1. Header Hero Banner with Tech/AI Background Image Overlay */}
      <section className="relative w-full py-24 md:py-32 bg-[#0B192C] overflow-hidden flex items-center justify-center">
        
        {/* Tech/Coding Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')` 
          }}
        />

        {/* Ambient Radial Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#1D4ED8] to-[#00A8E8] opacity-30 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-500 opacity-20 blur-[110px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Our <span className="bg-gradient-to-r from-[#00A8E8] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">Services</span>
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition-colors no-underline text-slate-300">Home</Link>
            <span className="text-cyan-500">&gt;</span>
            <span className="text-cyan-400">Services</span>
          </div>
        </div>
      </section>

      {/* 2. Main Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Section Header styled identically to Home Page Hero Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="relative group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-500/20 backdrop-blur-md shadow-[0_4px_20px_rgba(11,25,44,0.06)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] font-extrabold bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#00A8E8] bg-clip-text text-transparent tracking-widest uppercase">
              WHAT WE OFFER
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] leading-[1.15] tracking-tight font-sans">
            Comprehensive Digital Solutions for{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">
              Modern Businesses.
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

          <p className="text-slate-600 font-medium text-base md:text-lg max-w-2xl mx-auto pt-2">
            From custom web architectures to automated AI systems, we provide everything required to elevate your enterprise online.
          </p>
        </div>

        {/* 6 Card Grid (Wastix Style Scaffolding) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 pt-12 border border-slate-100 shadow-[0_10px_30px_rgba(11,25,44,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Floating Badge Icon */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center text-white`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Main Content */}
                <div>
                  <h3 className="text-2xl font-black text-center text-[#0B192C] mb-3 group-hover:text-[#1D4ED8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm text-center font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Arrow */}
                <div className="pt-8 flex justify-center">
                  <Link 
                    to="/contact" 
                    className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#1D4ED8] group-hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 no-underline shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Bottom CTA Section with White Button Style */}
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
        <span className="relative z-10">Get Started Now</span>
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