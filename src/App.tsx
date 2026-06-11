import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ClaudeFable from './components/ClaudeFable';
import Posts from './components/Posts';

function App() {
  const [siteMode, setSiteMode] = useState<'professional' | 'personal'>('professional');
  const [isAiMode, setIsAiMode] = useState(false);
  const [activeSection, setActiveSection] = useState<'Home' | 'Posts' | 'Projects'>('Home');

  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  // Kursor kustom berkinerja tinggi (manipulasi DOM langsung agar 60+ FPS)
  useEffect(() => {
    const cursorRing = cursorRingRef.current;
    const cursorDot = cursorDotRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.project-card-btn') ||
        target.closest('.mode-toggle') ||
        target.classList.contains('illuminated-link')
      ) {
        cursorRing?.classList.add('hovering');
      } else {
        cursorRing?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Intersection Observer untuk melacak seksi aktif di viewport
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id === 'home') setActiveSection('Home');
          else if (id === 'posts') setActiveSection('Posts');
          else if (id === 'projects') setActiveSection('Projects');
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [siteMode]);

  // Sinkronisasi judul dokumen (tab browser) secara dinamis
  useEffect(() => {
    const name = siteMode === 'professional' ? 'Kristianto Wibawa' : 'Kris';
    if (isAiMode) {
      document.title = `Fable 5 • Claude AI`;
    } else {
      document.title = `${activeSection} • ${name}`;
    }
  }, [activeSection, siteMode, isAiMode]);

  // Efek transisi mode otonom dan professional/personal
  useEffect(() => {
    if (isAiMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      const theme = siteMode === 'professional' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [isAiMode, siteMode]);

  return (
    <div className="app-container">
      {/* Custom Cursor Ring & Dot */}
      <div ref={cursorRingRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '3rem'
      }}>
        {/* Kiri: Logo Nama */}
        <div style={{ 
          fontFamily: 'var(--font-family)',
          fontWeight: 400, 
          fontSize: '1.25rem',
          letterSpacing: '-0.025em',
          color: 'var(--text-main)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'font-family 0.3s'
        }}>
          {isAiMode ? 'fable5@agent:~#' : (
            <a href="/" onClick={(e) => { e.preventDefault(); setSiteMode('professional'); }}>
              {siteMode === 'professional' ? 'Kristianto Wibawa' : 'Kristianto'}<span style={{ color: 'var(--accent-color)' }}>.</span>
            </a>
          )}
        </div>

        {/* Tengah: Switcher Mode (Hanya jika tidak di mode AI) */}
        {!isAiMode && (
          <div className={`mode-toggle-container site-mode-${siteMode}`}>
            <svg className="ornament ornament-left" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.4"></circle>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" opacity="0.6"></circle>
              <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8"></circle>
            </svg>

            <div 
              className="mode-toggle" 
              role="switch" 
              aria-label="Toggle between professional and personal mode"
              tabIndex={0}
              onClick={() => setSiteMode(prev => prev === 'professional' ? 'personal' : 'professional')}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  setSiteMode(prev => prev === 'professional' ? 'personal' : 'professional');
                }
              }}
            >
              <div className="toggle-track">
                <svg className="track-pattern" preserveAspectRatio="none" viewBox="0 0 200 40">
                  <path d="M10,0 L20,10 L10,20 L0,10 Z M30,0 L40,10 L30,20 L20,10 Z M50,0 L60,10 L50,20 L40,10 Z" fill="currentColor" opacity="0.05"></path>
                </svg>
                <div className="toggle-indicator"></div>
                <button 
                  className={`toggle-option toggle-professional ${siteMode === 'professional' ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setSiteMode('professional'); }}
                >
                  ⚙ Professional
                </button>
                <button 
                  className={`toggle-option toggle-personal ${siteMode === 'personal' ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setSiteMode('personal'); }}
                >
                  ✦ Personal
                </button>
              </div>
            </div>

            <svg className="ornament ornament-right" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.4"></circle>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" opacity="0.6"></circle>
              <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8"></circle>
            </svg>
          </div>
        )}

        {/* Kanan: AI Toggle & Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsAiMode(!isAiMode)}
            className="btn btn-secondary btn-sm"
            style={{ 
              borderRadius: '8px', 
              padding: '0 0.9rem',
              borderColor: isAiMode ? 'var(--accent-color)' : 'var(--border-color-strong)',
              color: isAiMode ? 'var(--accent-color)' : 'var(--text-main)',
              height: '34px'
            }}
          >
            {isAiMode ? 'Mode Manusia' : 'Mode AI (Fable 5)'}
          </button>
          {isAiMode && <ThemeToggle />}
        </div>
      </nav>

      <main>
        {isAiMode ? (
          <ClaudeFable />
        ) : (
          <>
            <Hero siteMode={siteMode} />
            
            {/* Pembatas Artistik Emas */}
            <div className="artistic-divider">
              <div className="divider-line"></div>
              <svg width="20" height="20" viewBox="0 0 20 20" className="divider-symbol">
                <circle cx="10" cy="10" r="2" fill="currentColor"></circle>
                <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
              </svg>
              <div className="divider-line right"></div>
            </div>

            <Posts siteMode={siteMode} />
            
            {siteMode === 'professional' && (
              <>
                <Projects />
              </>
            )}
          </>
        )}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '4rem 1.5rem',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-body)',
        fontSize: '0.875rem'
      }}>
        <p>&copy; {new Date().getFullYear()} {isAiMode ? 'Claude Fable 5' : 'Kristianto Wibawa'}. Hak Cipta Dilindungi Undang-Undang.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Membangun dengan React + Vite + TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;
