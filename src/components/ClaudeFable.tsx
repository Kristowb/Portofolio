import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, Cpu, Zap, RefreshCw, Info } from 'lucide-react';
import FableCanvas from './FableCanvas';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'error' | 'input';
}

export default function ClaudeFable() {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<LogLine[]>([
    { text: 'Claude Fable v5.0.0-Beta Kernel initialized.', type: 'info' },
    { text: 'Type "help" to view available commands.', type: 'info' }
  ]);
  const [clickCount, setClickCount] = useState(0);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [showEasterEggToast, setShowEasterEggToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const triggerMatrixMode = () => {
    document.body.classList.toggle('cyberpunk-mode');
    const isActive = document.body.classList.contains('cyberpunk-mode');
    
    setToastMessage(
      isActive 
        ? '👾 MATRIX OVERRIDE: Fable 5 Kernel Hack Active!' 
        : '🔒 SECURITY RESET: Standard Protocols Restored.'
    );
    setShowEasterEggToast(true);

    setLogs((prev) => [
      ...prev,
      { text: '>>> OVERRIDE SYSTEM ACTIVE. MATRIX KERNEL HACK INJECTED.', type: 'error' }
    ]);

    setTimeout(() => {
      setShowEasterEggToast(false);
    }, 4000);
  };

  // Scroll otomatis ke bawah terminal saat logs bertambah
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Konami Code Detector
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let codeIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const targetKey = konamiCode[codeIndex].toLowerCase();

      if (key === targetKey) {
        codeIndex++;
        if (codeIndex === konamiCode.length) {
          triggerMatrixMode();
          codeIndex = 0;
        }
      } else {
        codeIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Logo Click Challenge
  const handleLogoClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (nextCount >= 5) {
      setShakeScreen(true);
      setLogs((prev) => [
        ...prev,
        { text: '>>> RAGE PROTOCOL INITIATED. CORE ENGINE GLITCH IN PROGRESS.', type: 'error' }
      ]);
      setClickCount(0);
      
      setToastMessage('🔥 RAGE GLITCH UNLOCKED: Engine Overheating!');
      setShowEasterEggToast(true);

      setTimeout(() => {
        setShakeScreen(false);
        setShowEasterEggToast(false);
      }, 3000);
    }
  };

  // Handle Terminal Commands
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const cmd = inputVal.trim().toLowerCase();
    const newLogs = [...logs, { text: `fable5@agent:~# ${inputVal}`, type: 'input' as const }];
    
    setLogs(newLogs);
    setInputVal('');

    setTimeout(() => {
      switch (cmd) {
        case 'help':
          setLogs((prev) => [
            ...prev,
            { text: 'Available commands: help, status, about, hack, clear', type: 'info' }
          ]);
          break;
        case 'status':
          setLogs((prev) => [
            ...prev,
            { text: 'System: ONLINE | Mode: AUTONOMOUS LOOP | Core Temp: 42°C', type: 'success' },
            { text: 'Last successful git commit: feat: US-006 - Formulir Kontak', type: 'info' }
          ]);
          break;
        case 'about':
          setLogs((prev) => [
            ...prev,
            { text: 'Claude Fable 5 is an advanced agentic coding loop that runs continuously, writing clean React, TypeScript, and CSS until all goals in prd.json are met.', type: 'success' }
          ]);
          break;
        case 'hack':
          triggerMatrixMode();
          break;
        case 'clear':
          setLogs([]);
          break;
        default:
          setLogs((prev) => [
            ...prev,
            { text: `Command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' }
          ]);
      }
    }, 150);
  };

  return (
    <div className={`fable-container ${shakeScreen ? 'glitch-shake' : ''}`}>
      {/* Background Canvas Partikel */}
      <FableCanvas />

      {/* Header Fable */}
      <header className="fable-header">
        <button className="fable-logo-btn" onClick={handleLogoClick} aria-label="Aktivasi Glitch Logo">
          <div className="fable-logo">F5</div>
        </button>
        <div className="fable-title-area">
          <h1 className="fable-brand">Claude Fable 5</h1>
          <p className="fable-tagline">Autonomous Coding Agent & Creative Synthesizer</p>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="bento-grid">
        {/* Card 1: Core Profile */}
        <div className="bento-card bento-profile">
          <div className="card-header-icon">
            <Cpu size={24} className="icon-neon" />
          </div>
          <h2 className="card-title">Misi Agen Otonom</h2>
          <p className="card-text">
            Saya diprogram untuk beriterasi secara mandiri dalam siklus tanpa henti. Membaca kebutuhan, merancang struktur, memrogram kode bersih, memvalidasi sintaksis, dan melakukan commit hingga seluruh kriteria dalam dokumen PRD terpenuhi tanpa intervensi manusia.
          </p>
          <div className="status-badge">
            <span className="pulse-dot"></span> Active Loop Mode
          </div>
        </div>

        {/* Card 2: Interactive Terminal */}
        <div className="bento-card bento-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">
              <TerminalIcon size={14} style={{ marginRight: '6px' }} /> Kernel Terminal
            </div>
          </div>
          <div className="terminal-body">
            {logs.map((log, index) => (
              <div key={index} className={`log-line log-${log.type}`}>
                {log.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
          <form onSubmit={handleCommand} className="terminal-input-form">
            <span className="terminal-prompt">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="terminal-input"
              placeholder="Ketik perintah..."
              aria-label="Input Terminal Kernel"
            />
          </form>
        </div>

        {/* Card 3: Metrics / Stats */}
        <div className="bento-card bento-stats">
          <div className="card-header-icon">
            <Zap size={24} className="icon-neon" />
          </div>
          <h2 className="card-title">Metrik Kinerja</h2>
          <div className="stats-list">
            <div className="stat-item">
              <span className="stat-label">Iterasi Selesai</span>
              <span className="stat-value text-glow">4,212</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Akurasi Kode</span>
              <span className="stat-value text-glow">99.8%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Token Terhemat</span>
              <span className="stat-value text-glow">14.2M</span>
            </div>
          </div>
        </div>

        {/* Card 4: Sensor Graph Visual */}
        <div className="bento-card bento-visual">
          <div className="card-header-icon">
            <RefreshCw size={24} className="icon-neon spin-slow" />
          </div>
          <h2 className="card-title">Cognitive Radar</h2>
          <div className="visual-container">
            {/* Visual Gelombang Pulse Sensor */}
            <div className="radar-circle circle-1"></div>
            <div className="radar-circle circle-2"></div>
            <div className="radar-circle circle-3"></div>
            <div className="radar-core">F5</div>
          </div>
        </div>

        {/* Card 5: Tips & Easter Egg Info */}
        <div className="bento-card bento-tips">
          <div className="card-header-icon">
            <Info size={24} className="icon-neon" />
          </div>
          <h2 className="card-title">Petunjuk Rahasia</h2>
          <p className="card-text">
            Ada sesuatu yang tersembunyi di sini. Coba ketik kode cheat legendaris **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A`) di keyboard Anda untuk meretas sistem, atau tantang diri Anda dengan mengklik logo Fable 5 di atas sebanyak 5 kali.
          </p>
        </div>
      </div>

      {/* Easter Egg Toast Notification */}
      {showEasterEggToast && (
        <div className="toast-notification toast-cyber" role="status" style={{ border: '1px solid #10b981' }}>
          <ShieldAlert size={18} className="toast-icon icon-neon" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
