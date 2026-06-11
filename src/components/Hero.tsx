import { Download, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  siteMode: 'professional' | 'personal';
}

export default function Hero({ siteMode }: HeroProps) {
  const isProd = siteMode === 'professional';
  const name = isProd ? profileData.nameProfessional : profileData.namePersonal;
  const paragraphs = isProd ? profileData.aboutProfessional : profileData.aboutPersonal;

  return (
    <section className="hero-section fade-in-up" style={{ padding: isProd ? '5rem 0 3rem 0' : '4rem 0' }}>
      
      {/* 3D Flip Profile Photo dengan Animasi Whirl SVG */}
      <div className="flip-container" style={{ marginBottom: '2rem' }}>
        <div className="flip-inner">
          
          {/* Front Face (Professional) */}
          <div className="flip-face flip-front">
            <div className="relative" style={{ width: '100%', height: '100%' }}>
              
              {/* Whirl SVG Layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <g className="whirl-slow">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--color-gold)', opacity: 0.4 }}></circle>
                    <path d="M 100 5 A 95 95 0 0 1 195 100" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-gold)', opacity: 0.7 }}></path>
                    <path d="M 195 100 A 95 95 0 0 1 100 195" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-gold)', opacity: 0.5 }}></path>
                  </g>
                  <g className="whirl-medium">
                    <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-bronze)', opacity: 0.3 }}></circle>
                    <path d="M 100 12 A 88 88 0 0 1 188 100" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-bronze)', opacity: 0.6 }}></path>
                    <path d="M 12 100 A 88 88 0 0 1 100 12" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--color-bronze)', opacity: 0.4 }}></path>
                  </g>
                  <g className="whirl-fast">
                    <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-gold)', opacity: 0.2 }}></circle>
                    <path d="M 100 18 A 82 82 0 0 1 150 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--color-gold)', opacity: 0.6 }}></path>
                    <path d="M 182 100 A 82 82 0 0 1 170 150" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--color-gold)', opacity: 0.6 }}></path>
                    <path d="M 100 182 A 82 82 0 0 1 50 170" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--color-gold)', opacity: 0.6 }}></path>
                    <path d="M 18 100 A 82 82 0 0 1 30 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--color-gold)', opacity: 0.6 }}></path>
                  </g>
                </svg>
              </div>

              {/* Profile Image */}
              <div className="relative flex items-center justify-center" style={{ width: '100%', height: '100%', padding: '12px' }}>
                <div className="profile-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Kristianto Wibawa Professional" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Back Face (Personal) */}
          <div className="flip-face flip-back">
            <div className="relative" style={{ width: '100%', height: '100%' }}>
              
              {/* Whirl SVG Layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <g className="whirl-slow">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--color-gold)', opacity: 0.4 }}></circle>
                  </g>
                </svg>
              </div>

              {/* Profile Image Personal */}
              <div className="relative flex items-center justify-center" style={{ width: '100%', height: '100%', padding: '12px' }}>
                <div className="profile-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Kristianto Wibawa Personal" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Hero Title */}
      <h1 className="hero-title" style={{ fontFamily: isProd ? 'var(--font-family)' : 'var(--font-serif)', transition: 'font-family 0.3s' }}>
        {name}
      </h1>

      {/* About Box / Editorial Description */}
      {isProd ? (
        <>
          <h2 className="hero-subtitle">
            Software Engineer & AI Creator
          </h2>
          <p className="hero-description">
            {paragraphs[0]} {paragraphs[1]}
          </p>
          <div className="hero-actions">
            <a href="#proyek" className="btn btn-primary">
              Stuff I've Made <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </a>
            <a href="/resume.pdf" download="Resume_Kristianto_Wibawa.pdf" className="btn btn-secondary">
              Unduh CV / Resume <Download size={14} style={{ marginLeft: '6px' }} />
            </a>
          </div>

          {/* IDE Mockup Card */}
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
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>name:</span> <span style={{ color: '#98c379' }}>'Kristianto Wibawa'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">3</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>role:</span> <span style={{ color: '#98c379' }}>'Software Engineer & AI Creator'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">4</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>focus:</span> <span style={{ color: '#98c379' }}>'AI-first Developer Tools'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">5</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>passions:</span> [</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">6</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Aesthetic Web Systems'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">7</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Autonomous Coding Agents'</span></span>
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
                Dengan latar belakang di bidang teknik komputer, saya mengikis batas antara kode dan visual. Saya percaya bahwa software hebat tidak hanya harus berjalan tanpa cela di belakang layar, melainkan juga harus memukau pengguna pada detik pertama mereka melihatnya.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="editorial-section" style={{ width: '100%', border: 'none', padding: '1.5rem 0' }}>
          <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <p className="font-garamond" style={{ fontSize: '1.35rem', lineHeight: '2.1', color: 'var(--text-body)' }}>
              {paragraphs[0]}
            </p>
            <p className="font-garamond" style={{ fontSize: '1.35rem', lineHeight: '2.1', color: 'var(--text-body)', marginTop: '1.5rem' }}>
              {paragraphs[1]}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
