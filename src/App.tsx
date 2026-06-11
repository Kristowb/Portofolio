import ThemeToggle from './components/ThemeToggle';

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

      <header style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1>Portfolio Website</h1>
        <p style={{ color: 'var(--text-muted)' }}>Website portofolio interaktif sedang dibangun...</p>
      </header>
    </div>
  );
}

export default App;
