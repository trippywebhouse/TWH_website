import { NavLink } from 'react-router-dom';
import {
  ArrowUpRight, Globe, ShoppingCart, Megaphone, Check,
  Layers, Box, Smartphone, Search, ShieldCheck, Zap,
  Palette, Send, Package, Truck,
  Bell, Users2, CalendarHeart
} from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import PeakMark from '../components/PeakMark';
import './Services.css';

const SERVICE_GROUPS = [
  {
    n: '01',
    icon: Globe,
    title: 'We Build Websites',
    desc: 'Every site is engineered for speed and built to convert — from first-time portfolios to full corporate platforms.',
    items: [
      { icon: Layers, label: 'E-commerce Websites' },
      { icon: Box, label: 'Portfolio Websites' },
      { icon: Globe, label: 'Business / Corporate Websites' },
      { icon: Search, label: 'Educational Websites' },
      { icon: Users2, label: 'Community & Forum Platforms' },
    ],
    badges: [
      { icon: Zap, label: 'Fast Loading' },
      { icon: Smartphone, label: 'Mobile Friendly' },
      { icon: Search, label: 'SEO Optimized' },
      { icon: ShieldCheck, label: 'Secure & Safe' },
    ],
    cta: 'Start your website',
  },
  {
    n: '02',
    icon: ShoppingCart,
    title: 'E-Commerce Growth Solutions',
    desc: 'We launch and scale online stores end-to-end — design, ads, influencers, packaging and shipping across India.',
    items: [
      { icon: Globe, label: 'Website Development' },
      { icon: InstagramIcon, label: 'Instagram Business Setup' },
      { icon: Palette, label: 'Logo & Brand Identity' },
      { icon: Send, label: 'Meta Ads & Promotion' },
      { icon: Users2, label: 'Influencer Marketing' },
      { icon: Package, label: 'Packaging Guidance' },
      { icon: Truck, label: 'Shipping Support Across India' },
    ],
    badges: [],
    cta: 'Launch your brand online',
  },
  {
    n: '03',
    icon: Megaphone,
    title: 'Branding & Growth for Existing Businesses',
    desc: 'Already running a business? We keep your audience engaged with consistent, on-brand content and campaigns.',
    items: [
      { icon: InstagramIcon, label: 'Instagram Promotion' },
      { icon: CalendarHeart, label: 'Festival Greetings & Designs' },
      { icon: Send, label: 'WhatsApp Marketing' },
      { icon: Bell, label: 'Customer Notifications' },
      { icon: Megaphone, label: 'Brand Awareness Campaigns' },
      { icon: Users2, label: 'Social Media Management' },
    ],
    badges: [],
    cta: 'Grow your brand',
  },
];

const PROCESS = [
  { step: 'Discover', desc: 'We learn your business, audience and goals.' },
  { step: 'Design', desc: 'Dark, premium UI mockups built around your brand.' },
  { step: 'Build', desc: 'Development, testing, and content population.' },
  { step: 'Launch & Grow', desc: 'Go live, then ongoing marketing and support.' },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="section services-hero">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1 className="h-display services-hero-title">
            Everything your brand needs <span className="text-grad">to show up online.</span>
          </h1>
          <p className="services-hero-sub">
            Websites, e-commerce, branding and growth marketing — under one roof,
            one team, and one consistent quality bar.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {SERVICE_GROUPS.map((g, i) => (
            <div className="service-block" key={g.n}>
              <div className="service-block-head">
                <div className="service-block-num h-display">{g.n}</div>
                <div className="service-block-icon"><g.icon size={22} /></div>
                <div>
                  <h2 className="service-block-title h-display">{g.title}</h2>
                  <p className="service-block-desc">{g.desc}</p>
                </div>
              </div>

              <div className="service-block-body panel">
                <div className="service-block-items">
                  {g.items.map((it) => (
                    <div className="service-item" key={it.label}>
                      <div className="service-item-check"><Check size={13} /></div>
                      <it.icon size={16} className="service-item-icon" />
                      <span>{it.label}</span>
                    </div>
                  ))}
                </div>

                {g.badges.length > 0 && (
                  <div className="service-block-badges">
                    {g.badges.map((b) => (
                      <div className="service-badge" key={b.label}>
                        <b.icon size={14} /> {b.label}
                      </div>
                    ))}
                  </div>
                )}

                <NavLink to="/contact" className="btn btn-primary service-block-cta">
                  {g.cta} <ArrowUpRight size={15} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">How we work</div>
            <h2 className="h-display section-title">From idea to <span className="text-grad">live and growing.</span></h2>
          </div>

          <div className="process-track">
            {PROCESS.map((p, i) => (
              <div className="process-step" key={p.step}>
                <div className="process-step-mark">
                  <PeakMark size={20} />
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="process-step-title">{p.step}</div>
                <div className="process-step-desc">{p.desc}</div>
                {i < PROCESS.length - 1 && <div className="process-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner cta-band-dark-about">
          <PeakMark size={36} className="cta-band-peak" />
          <h2 className="h-display cta-band-title-dark">Not sure which service fits?</h2>
          <p className="cta-band-sub-dark">Tell us about your business — we'll recommend the right starting point.</p>
          <div className="cta-band-actions">
            <NavLink to="/contact" className="btn btn-cyan">
              Talk to us <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
