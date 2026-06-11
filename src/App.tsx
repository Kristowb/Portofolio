import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ClaudeFable from './components/ClaudeFable';
import Posts from './components/Posts';

function App() {
  const [siteMode, setSiteMode] = useState<'professional' | 'personal'>('professional');
  const [isAiMode, setIsAiMode] = useState(false);

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
          fontFamily: siteMode === 'personal' ? 'var(--font-serif)' : 'var(--font-family)',
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
                <Skills />
              </>
            )}

            <Contact />
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
