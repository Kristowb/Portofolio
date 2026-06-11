import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section fade-in-up">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, Saya <span className="hero-name-highlight">Ryan Carson</span>
        </h1>
        <h2 className="hero-subtitle">
          Software Engineer & UI/UX Designer
        </h2>
        <p className="hero-description">
          Saya membangun produk digital yang berkinerja tinggi, fungsional, dan memiliki estetika visual yang premium serta ramah pengguna. Menggabungkan kode yang bersih dengan prinsip desain yang presisi.
        </p>
        
        <div className="hero-actions">
          <a href="#proyek" className="btn btn-primary">
            Lihat Proyek <ArrowRight size={14} style={{ marginLeft: '6px' }} />
          </a>
          <a href="/resume.pdf" download="Resume_Ryan_Carson.pdf" className="btn btn-secondary">
            Unduh CV / Resume <Download size={14} style={{ marginLeft: '6px' }} />
          </a>
        </div>
      </div>

      <div className="ide-mockup-card">
        <div className="ide-pane-left">
          <div className="ide-tab-bar">
            <span className="ide-tab-dot red"></span>
            <span className="ide-tab-dot yellow"></span>
            <span className="ide-tab-dot green"></span>
            <span className="ide-tab-title">about.ts</span>
          </div>
          <div className="ide-code-content">
            <div className="ide-code-line">
              <span className="ide-code-number">1</span>
              <span><span style={{ color: '#e06c75' }}>const</span> <span style={{ color: '#61afef' }}>profile</span> = &#123;</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">2</span>
              <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>name:</span> <span style={{ color: '#98c379' }}>'Ryan Carson'</span>,</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">3</span>
              <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>role:</span> <span style={{ color: '#98c379' }}>'Software Engineer'</span>,</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">4</span>
              <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>focus:</span> <span style={{ color: '#98c379' }}>'Clean Code & UI/UX'</span>,</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">5</span>
              <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>passions:</span> [</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">6</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Aesthetic Web Design'</span>,</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">7</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'AI-first Dev Tools'</span></span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">8</span>
              <span>&nbsp;&nbsp;]</span>
            </div>
            <div className="ide-code-line">
              <span className="ide-code-number">9</span>
              <span>&#125;;</span>
            </div>
          </div>
        </div>
        <div className="ide-pane-right">
          <h3 className="about-title">Tentang Saya</h3>
          <p className="about-text">
            Dengan latar belakang di bidang teknik komputer dan desain grafis, saya mengikis batas antara kode dan visual. Saya percaya bahwa software hebat tidak hanya harus berjalan tanpa cela di belakang layar, melainkan juga harus memukau pengguna pada detik pertama mereka melihatnya.
          </p>
        </div>
      </div>
    </section>
  );
}
