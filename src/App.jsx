import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Atmosphere from './components/Atmosphere';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// SEO page titles per route - Fix 7
const PAGE_TITLES = {
  '/': 'Trippy Web House | Build. Brand. Grow.',
  '/services': 'Our Services | Trippy Web House',
  '/about': 'About Us | Trippy Web House',
  '/contact': 'Contact Us | Trippy Web House',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update page title on route change - Fix 7
    document.title = PAGE_TITLES[pathname] || 'Trippy Web House';
  }, [pathname]);
  return null;
}

// Fix 6: Scroll progress bar at top
function ScrollProgressBar() {
  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      const bar = document.getElementById('scroll-progress');
      if (bar) bar.style.width = progress + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="scroll-progress-container" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, height: '3px',
      background: 'transparent', pointerEvents: 'none',
    }}>
      <div id="scroll-progress" style={{
        height: '100%', width: '0%',
        background: 'linear-gradient(90deg, #0891b2, #2563eb)',
        transition: 'width 0.1s ease',
        boxShadow: '0 0 8px rgba(37, 99, 235, 0.5)',
      }} />
    </div>
  );
}

// Fix 6: Page-to-page navigation arrows at bottom of each page
const PAGE_ORDER = ['/', '/services', '/about', '/contact'];
const PAGE_LABELS = { '/': 'Home', '/services': 'Services', '/about': 'About', '/contact': 'Contact' };

function PageNav() {
  const { pathname } = useLocation();
  const idx = PAGE_ORDER.indexOf(pathname);
  const nextPage = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;

  if (!nextPage) return null;

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', padding: '0 0 48px',
      fontFamily: 'var(--ff-body)',
    }}>
      <NavLink to={nextPage} style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '12px 28px', borderRadius: '100px',
        background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.22)',
        color: 'var(--blue-500)', fontWeight: 600, fontSize: '14.5px',
        textDecoration: 'none', transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.15)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,99,235,0.08)'}
      >
        Next: {PAGE_LABELS[nextPage]} →
      </NavLink>
    </div>
  );
}

function AppShell() {
  return (
    <>
      <ScrollProgressBar />
      <Atmosphere />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PageNav />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
