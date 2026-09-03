import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Atmosphere from './components/Atmosphere';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// SEO page titles per route
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
    document.title = PAGE_TITLES[pathname] || 'Trippy Web House';
  }, [pathname]);
  return null;
}

// Scroll progress bar at top with Sapphire Cyan glow
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
    <div 
      id="scroll-progress-container" 
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none"
    >
      <div 
        id="scroll-progress" 
        className="h-full w-0 bg-gradient-to-r from-[#00D2FE] via-[#1D4ED8] to-[#0B192C] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,210,254,0.6)]"
      />
    </div>
  );
}

// Upgraded page-to-page navigation arrows at bottom of each page
const PAGE_ORDER = ['/', '/services', '/about', '/contact'];
const PAGE_LABELS = { '/': 'Home', '/services': 'Services', '/about': 'About', '/contact': 'Contact' };

function PageNav() {
  const { pathname } = useLocation();
  const idx = PAGE_ORDER.indexOf(pathname);
  const nextPage = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;

  if (!nextPage) return null;

  return (
    <div className="flex justify-center pb-12 pt-4 font-sans bg-[#F4F7FC]">
      <NavLink 
        to={nextPage} 
        className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/90 backdrop-blur-md border border-cyan-500/20 text-[#0B192C] font-extrabold text-xs tracking-wide shadow-[0_4px_20px_rgba(11,25,44,0.06)] hover:border-cyan-400 hover:shadow-[0_8px_30px_rgba(0,210,254,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 no-underline"
      >
        <span className="text-slate-600 group-hover:text-[#0B192C] transition-colors">
           {PAGE_LABELS[nextPage]}
        </span>
        <div className="w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-[#0B192C] group-hover:text-cyan-400 transition-colors duration-300">
          <span className="text-xs font-black group-hover:translate-x-0.5 transition-transform duration-300">
            →
          </span>
        </div>
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