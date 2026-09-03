import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Step 1: Import Helmet
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowUpRight 
} from 'lucide-react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('Website Design');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const services = [
    'Website Design',
    'E-Commerce Store',
    'Branding & Growth',
    'Not sure yet'
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      alert('Please fill in required fields.');
      return;
    }

    // Format text for WhatsApp & Email Notification
    const messageText = 
      `🔹 *New Enquiry - Trippy Web House*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `🛠️ *Service:* ${selectedService}\n` +
      `💬 *Message:* ${formData.message || 'N/A'}`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/917695948634?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');

    // Trigger Mail Client Backup
    const mailtoUrl = `mailto:trippywebhouse@gmail.com?subject=New Enquiry from ${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(messageText)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#0B192C]">
      
      {/* Dynamic SEO Meta Tags using React Helmet */}
      <Helmet>
        {/* Primary Page Title & Meta Description */}
        <title>Contact Us | Trippy Web House - Web Design & AI Agency</title>
        <meta 
          name="description" 
          content="Get in touch with Trippy Web House for custom web design, AI integration, e-commerce, and digital marketing inquiries. Quick response via email & WhatsApp." 
        />
        <meta 
          name="keywords" 
          content="Contact Trippy Web House, Web Development Agency Contact, Hire Web Developer Tamil Nadu, AI Integration Consultation, Trippy Web House WhatsApp" 
        />

        {/* Social Media Link Preview Tags */}
        <meta property="og:title" content="Contact Trippy Web House | Get a Quote" />
        <meta 
          property="og:description" 
          content="Let's build your brand. Get in touch with us for web applications, AI automations, and growth marketing." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trippywebhouse.vercel.app/" />
      </Helmet>

      {/* 1. Dark Header Hero Banner */}
      <section className="relative w-full py-24 md:py-32 bg-[#0B192C] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')` 
          }}
        />

        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#1D4ED8] to-[#00A8E8] opacity-30 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-500 opacity-20 blur-[110px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Contact <span className="bg-gradient-to-r from-[#00A8E8] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">Trippy Web House</span>
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition-colors no-underline text-slate-300">Home</Link>
            <span className="text-cyan-500">&gt;</span>
            <span className="text-cyan-400">Contact</span>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Info Container */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="relative group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-500/20 backdrop-blur-md shadow-[0_4px_20px_rgba(11,25,44,0.06)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] font-extrabold bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#00A8E8] bg-clip-text text-transparent tracking-widest uppercase">
              CONTACT US
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] leading-[1.15] tracking-tight font-sans">
            Let’s start building your{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00D2FE] bg-clip-text text-transparent">
              brand.
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
          <p className="text-slate-600 text-base md:text-lg font-medium">
            Tell us a little about your business and what you need. We typically reply within a day.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Box */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(11,25,44,0.04)] space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#0B192C]">Send us a message</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">We'll reply via email + WhatsApp</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">Full name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-[#0B192C] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@email.com" 
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-[#0B192C] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Service Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">What do you need?</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-200 ${
                        selectedService === service
                          ? 'bg-gradient-to-r from-[#0B192C] to-[#1D4ED8] text-white shadow-md'
                          : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">Tell us about your project *</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="What are you building? Any timeline or budget in mind?" 
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-[#0B192C] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#1D4ED8] to-[#00A8E8] text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(29,78,216,0.3)] border border-white/20 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,210,254,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10">Send Message</span>
                <div className="relative z-10 w-7 h-7 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <Send className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </form>
          </div>

          {/* Right Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(11,25,44,0.04)] space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-50 text-[#1D4ED8] border border-cyan-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call us</p>
                  <a href="tel:+917695948634" className="text-base font-extrabold text-[#0B192C] hover:text-[#1D4ED8] transition-colors no-underline">
                    +91 76959 48634
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-50 text-[#1D4ED8] border border-cyan-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email us</p>
                  <a href="mailto:trippywebhouse@gmail.com" className="text-base font-extrabold text-[#0B192C] hover:text-[#1D4ED8] transition-colors no-underline">
                    trippywebhouse@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-50 text-[#1D4ED8] border border-cyan-100">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Follow us</p>
                  <a href="https://instagram.com/trippy_web.house" target="_blank" rel="noopener noreferrer" className="text-base font-extrabold text-[#0B192C] hover:text-[#1D4ED8] transition-colors no-underline">
                    @trippy_web.house
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-50 text-[#1D4ED8] border border-cyan-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Based in</p>
                  <p className="text-base font-extrabold text-[#0B192C]">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Box */}
            <div className="bg-gradient-to-br from-[#0B192C] to-[#1E3E62] p-8 rounded-3xl text-white shadow-xl space-y-4 text-center border border-slate-800 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </div>
              <h4 className="text-xl font-extrabold text-white">WhatsApp us directly</h4>
              <p className="text-xs text-slate-300 font-medium max-w-xs mx-auto">
                Quick response guaranteed. Send us your requirements on WhatsApp.
              </p>
              <div className="pt-2">
                <a 
                  href="https://wa.me/917695948634" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-wide transition-all shadow-lg no-underline w-full"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}