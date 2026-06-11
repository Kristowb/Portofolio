import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
      </main>
    </div>
  );
}

export default App;
