import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
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
        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>Portofolio</div>
        <ThemeToggle />
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '3rem 0',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Ryan Carson. Hak Cipta Dilindungi Undang-Undang.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Membangun dengan React + Vite + TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;
