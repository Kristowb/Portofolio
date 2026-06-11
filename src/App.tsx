import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ClaudeFable from './components/ClaudeFable';

function App() {
  const [isAiMode, setIsAiMode] = useState(false);

  // Efek transisi mode otonom
  useEffect(() => {
    if (isAiMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, [isAiMode]);

  return (
    <div className="app-container">
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 0',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '2rem'
      }}>
        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>
          {isAiMode ? 'fable5@agent:~#' : 'Portofolio'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsAiMode(!isAiMode)}
            className="btn btn-secondary btn-sm"
            style={{ 
              borderRadius: '8px', 
              padding: '0.45rem 0.9rem',
              borderColor: isAiMode ? 'var(--accent-color)' : 'var(--border-color)',
              color: isAiMode ? 'var(--accent-color)' : 'var(--text-main)'
            }}
          >
            {isAiMode ? 'Mode Manusia' : 'Mode AI (Fable 5)'}
          </button>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        {isAiMode ? (
          <ClaudeFable />
        ) : (
          <>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </>
        )}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '3rem 0',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} {isAiMode ? 'Claude Fable 5' : 'Ryan Carson'}. Hak Cipta Dilindungi Undang-Undang.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Membangun dengan React + Vite + TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;
