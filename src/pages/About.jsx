import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Globe, ShoppingCart, Megaphone, ExternalLink, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import PeakMark from '../components/PeakMark';
import './About.css';

// ── Imports at TOP ───────────────────────────────────────────────────────────
import projectmme from '../assets/sureshkumar.png';
import aev_video from '../assets/portfolio_video.mp4';
import aev_img from '../assets/portfolio.png';

// ── Timeline ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  { year: 'Our Foundation', desc: 'Trippy Web House started with a single mission — make premium digital presence affordable for every business.' },
  { year: 'Service Expansion', desc: 'Grew from websites alone into full e-commerce launches and brand growth marketing across India.' },
];

// ── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Math Educator Website',
    category: '📚 Education',
    desc: 'Multi-page Vite+React website for math educator S. Suresh Kumar — 6 pages, React Router, optimized images.',
    tags: ['React', 'Vite', 'Education'],
    image: projectmme,
    video: null,
    link: 'https://sureshkumarmme.in/',
    color: '#179bcf',
  },
  {
    id: 2,
    title: 'AEV Portfolio',
    category: '💼 Personal Portfolio',
    desc: 'Personal AI & Data Science developer portfolio — built with React/Vite, showcasing projects, skills, internship.',
    tags: ['React', 'Vite', 'Flask', '3D models'],
    image: aev_img,
    video: aev_video,
    link: 'https://eshwar003ae.github.io/AEV-portfolio/',
    color: '#7c3aed',
  },
];

// ── ProjectMedia component ────────────────────────────────────────────────────
function ProjectMedia({ project }) {
  const [playing, setPlaying] = useState(false);     // thumbnail → video switch
  const [muted, setMuted] = useState(true);          // mute state
  const [isPlaying, setIsPlaying] = useState(true);  // play / pause state
  const videoRef = useRef(null);

  // Fix React muted bug — set via DOM ref
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  // Auto play when video first loads
  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch(() => {});
    }
  }, [playing]);

  // Click on thumbnail → show video
  function handleThumbClick(e) {
    e.stopPropagation();
    setPlaying(true);
  }

  // Toggle play / pause
  function togglePlayPause(e) {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  // Toggle mute / unmute
  function toggleMute(e) {
    e.stopPropagation();
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
  }

  // ── YouTube ──────────────────────────────────────────────────────────────
  if (project.video && project.video.includes('youtube')) {
    if (!playing) {
      return (
        <div className="project-thumb-wrap" onClick={handleThumbClick}>
          {project.image && (
            <img src={project.image} alt={project.title} className="project-img" />
          )}
          <div className="project-play-overlay">
            <div className="project-play-btn"><Play size={22} fill="white" /></div>
          </div>
        </div>
      );
    }
    return (
      <iframe
        src={project.video + '?autoplay=1'}
        title={project.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="project-video"
      />
    );
  }

  // ── Local MP4 ────────────────────────────────────────────────────────────
  if (project.video) {
    // Show thumbnail before play clicked
    if (!playing) {
      return (
        <div className="project-thumb-wrap" onClick={handleThumbClick}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="project-img" />
          ) : (
            <div className="project-media-placeholder">
              <span>Click to play</span>
            </div>
          )}
          <div className="project-play-overlay">
            <div className="project-play-btn"><Play size={22} fill="white" /></div>
          </div>
        </div>
      );
    }

    // Show video with custom controls
    return (
      <div className="project-video-wrap">
        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          playsInline
          className="project-video"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        {/* Custom controls bar — bottom of video */}
        <div className="project-custom-controls">
          {/* Play / Pause */}
          <button
            className="project-ctrl-btn"
            onClick={togglePlayPause}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={15} fill="white" /> : <Play size={15} fill="white" />}
          </button>

          {/* Mute / Unmute */}
          <button
            className="project-ctrl-btn"
            onClick={toggleMute}
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>
    );
  }

  // ── Image only ───────────────────────────────────────────────────────────
  if (project.image) {
    return <img src={project.image} alt={project.title} className="project-img" />;
  }

  // ── No media ─────────────────────────────────────────────────────────────
  return (
    <div className="project-media-placeholder">
      <span>Add project image / video</span>
    </div>
  );
}

// ── Main About page ───────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="section about-hero">
        <div className="container about-hero-grid">
          <div>
            <div className="eyebrow">About us</div>
            <h1 className="h-display about-hero-title">
              We're a small team obsessed with <span className="text-grad">your growth.</span>
            </h1>
            <p className="about-hero-sub">
              Trippy Web House is a digital growth studio based in Tamil Nadu, building
              websites, online stores and brand systems for startups and growing
              businesses across India.
            </p>
            <div className="about-hero-actions">
              <NavLink to="/contact" className="btn btn-primary">
                Work with us <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </div>

          <div className="about-hero-visual about-hero-visual-dark">
            <PeakMark size={64} />
            <div className="about-hero-tagline h-display">Build. Brand. Grow.</div>
            <div className="about-hero-pillars">
              <span><Globe size={14} /> Websites</span>
              <span><ShoppingCart size={14} /> E-commerce</span>
              <span><Megaphone size={14} /> Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section about-projects">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our work</div>
            <h2 className="h-display section-title">
              Projects we've <span className="text-grad">built & shipped.</span>
            </h2>
            <p className="projects-sub">Real websites, real clients, real results — across Tamil Nadu and beyond.</p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div className="project-card" key={p.id} style={{ '--accent': p.color }}>
                <div className="project-media">
                  <ProjectMedia project={p} />
                  <div className="project-category-badge">{p.category}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                      View live site <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="project-link-placeholder">Link coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our journey</div>
            <h2 className="h-display section-title">Where we've been.</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="timeline-row" key={t.year}>
                <div className="timeline-mark">
                  <PeakMark size={18} />
                  {i < TIMELINE.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{t.year}</div>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-band-inner cta-band-dark-about">
          <PeakMark size={36} className="cta-band-peak" />
          <h2 className="h-display cta-band-title-dark">Let's build something premium together.</h2>
          <p className="cta-band-sub-dark">Reach out and tell us about your business — we reply within a day.</p>
          <div className="cta-band-actions">
            <NavLink to="/contact" className="btn btn-cyan">
              Get in touch <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
}