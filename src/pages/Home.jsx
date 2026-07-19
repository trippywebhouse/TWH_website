import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Check, Globe, Video, Palette, Megaphone, MessageCircle, TrendingUp, Play } from 'lucide-react';
import PeakMark from '../components/PeakMark';
import './Home.css';

// ── Assets ─────────────────────────────────────────────────────────────────
// Copy goat.png into src/assets/ first!
import goatImg from '../assets/goat.png';

// Client logos — add your real logos later
// import royalLogo from '../assets/clients/royal.png';

// ── Data ────────────────────────────────────────────────────────────────────
const FLOATING_CARDS = [
  { icon: Globe,         label: 'Website Development',   pos: 'card-top-left'    },
  { icon: Video,         label: 'AI Video Production',    pos: 'card-mid-left'    },
  { icon: Palette,       label: 'Branding & Logo Design', pos: 'card-bot-left'    },
  { icon: Megaphone,     label: 'Meta Ads Campaigns',     pos: 'card-top-right'   },
  { icon: MessageCircle, label: 'WhatsApp Marketing',     pos: 'card-mid-right'   },
  { icon: TrendingUp,    label: 'Business Growth',        pos: 'card-bot-right'   },
];

const CHECKLIST = ['Websites', 'Branding', 'AI Videos', 'Digital Growth'];

const STATS = [
  { icon: '📁', value: '20+',  label: 'Projects Completed'  },
  { icon: '😊', value: '100%', label: 'Client Satisfaction'  },
  { icon: '⭐', value: '5+',   label: 'Years Experience'     },
  { icon: '🎧', value: '24/7', label: 'Dedicated Support'    },
];

const CLIENTS = [
  { name: 'Royal Steel & Glass Solution', short: 'ROYAL' },
  { name: 'Mirra Petro Product',          short: 'MIRRA' },
  { name: 'Shri Umayal Agency Indian Oil', short: 'SHRI UMAYAL' },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="home-v2">

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="hero-v2">
        <div className="container hero-v2-inner">

          {/* LEFT COPY */}
          <div className="hero-v2-copy">
            <div className="hero-v2-welcome-badge">
              <span className="badge-dot" />
              WELCOME TO TRIPPY WEB HOUSE
            </div>

            <h1 className="hero-v2-title">
              Build Websites That<br />
              <span className="hero-v2-title-blue">Grow Businesses.</span>
            </h1>

            <p className="hero-v2-desc">
              We create premium websites, branding, AI videos
              and digital marketing strategies that help
              businesses stand out and grow faster.
            </p>

            <ul className="hero-v2-checklist">
              {CHECKLIST.map((item) => (
                <li key={item}>
                  <span className="check-icon"><Check size={13} strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hero-v2-actions">
              <NavLink to="/contact" className="btn-v2-primary">
                Start Your Project <ArrowUpRight size={18} />
              </NavLink>
              <NavLink to="/about" className="btn-v2-outline">
                <span className="play-circle"><Play size={14} fill="currentColor" /></span>
                View Portfolio
              </NavLink>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-v2-visual">

            {/* Glowing platform ring */}
            <div className="hero-platform">
              <div className="platform-ring platform-ring-outer" />
              <div className="platform-ring platform-ring-inner" />
              <div className="platform-glow" />
            </div>

            {/* Goat mascot */}
            <img src={goatImg} alt="Trippy Web House Mascot" className="hero-goat" />

            {/* Floating service cards */}
            {FLOATING_CARDS.map((card) => (
              <div className={`floating-card ${card.pos}`} key={card.label}>
                <div className="floating-card-icon">
                  <card.icon size={18} />
                </div>
                <span>{card.label}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLIENTS + STATS STRIP
      ═══════════════════════════════════════════════ */}
      <section className="social-proof-strip">
        <div className="container social-proof-inner">

          {/* Client logos */}
          <div className="clients-col">
            <div className="clients-label">TRUSTED BY AMAZING BUSINESSES</div>
            <div className="clients-logos">
              {CLIENTS.map((c) => (
                <div className="client-logo-chip" key={c.name} title={c.name}>
                  {c.short}
                </div>
              ))}
              <div className="client-logo-chip client-more">& More<br /><span>Coming Soon</span></div>
            </div>
          </div>

          {/* Divider */}
          <div className="proof-divider" />

          {/* Stats */}
          <div className="stats-row">
            {STATS.map((s) => (
              <div className="stat-chip" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════════ */}
      <section className="cta-band">
        <div className="container cta-band-inner cta-band-dark-about">
          <PeakMark size={36} className="cta-band-peak" />
          <h2 className="h-display cta-band-title-dark">Ready to launch your brand online?</h2>
          <p className="cta-band-sub-dark">Tell us about your business — we'll map out the right plan within a day.</p>
          <div className="cta-band-actions">
            <NavLink to="/contact" className="btn-v2-primary">
              Launch Your Brand <ArrowUpRight size={16} />
            </NavLink>
            <a href="tel:+917695948634" className="btn-v2-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#e0e8ff' }}>
              📞 +91 76959 48634
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}