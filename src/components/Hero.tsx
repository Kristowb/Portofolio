import { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  siteMode: 'professional' | 'personal';
}

export default function Hero({ siteMode }: HeroProps) {
  const isProd = siteMode === 'professional';
  const name = isProd ? profileData.nameProfessional : profileData.namePersonal;
  const paragraphs = isProd ? profileData.aboutProfessional : profileData.aboutPersonal;

  const [displayName, setDisplayName] = useState(name);

  useEffect(() => {
    let active = true;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&+?@';
    
    // Teks awal adalah nilai tampilan saat ini, teks target adalah nama baru
    const startText = displayName;
    const endText = name;
    
    // Gunakan panjang maksimum agar transisi lebar teks mulus (tidak melompat)
    const maxLength = Math.max(startText.length, endText.length);
    
    let frame = 0;
    const totalFrames = 30; // ~500ms pada monitor 60Hz
    
    const tick = () => {
      if (!active) return;
      
      const progress = frame / totalFrames;
      // Easing: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const revealedCount = Math.floor(easedProgress * maxLength);
      
      let result = '';
      for (let i = 0; i < maxLength; i++) {
        if (i < revealedCount) {
          if (i < endText.length) {
            result += endText[i];
          }
        } else {
          const shouldShow = i < startText.length || i < endText.length;
          if (shouldShow) {
            const isTargetSpace = i < endText.length && endText[i] === ' ';
            const isStartSpace = i < startText.length && startText[i] === ' ';
            if (isTargetSpace || isStartSpace) {
              result += ' ';
            } else {
              result += chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }
      }
      
      setDisplayName(result);
      
      if (frame < totalFrames) {
        frame++;
        requestAnimationFrame(tick);
      } else {
        setDisplayName(endText);
      }
    };
    
    requestAnimationFrame(tick);
    
    return () => {
      active = false;
    };
  }, [name]);

  return (
    <section id="home" className="hero-section fade-in-up" style={{ padding: isProd ? '5rem 0 3rem 0' : '4rem 0' }}>
      
      {/* 3D Flip Profile Photo dengan Animasi Whirl SVG */}
      <div className={`flip-container ${!isProd ? 'flipped' : ''}`} style={{ marginBottom: '2rem' }}>
        <div className="flip-inner">
          
          {/* Front Face (Professional) */}
          <div className="flip-face flip-front">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              
              {/* Whirl SVG Layers */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
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
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              
              {/* Whirl SVG Layers */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

              {/* Profile Image Personal */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
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
      <h1 className="hero-title" style={{ fontFamily: 'var(--font-family)', transition: 'font-family 0.3s' }}>
        {displayName}
      </h1>

      {/* About Box / Editorial Description */}
      {isProd ? (
        <>
          <h2 className="hero-subtitle">
            Software Engineer at Whiteopen Teknologi
          </h2>
          <div className="hero-actions" style={{ marginBottom: '3.5rem' }}>
            <a href="#projects" className="btn btn-primary">
              Stuff I've Made <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </a>
            <a href="/resume.pdf" download="Resume_Kristianto_Wibawa.pdf" className="btn btn-secondary">
              Download Resume <Download size={14} style={{ marginLeft: '6px' }} />
            </a>
          </div>

          {/* IDE Mockup Card - Code Only */}
          <div className="ide-mockup-card" style={{ width: '100%' }}>
            <div className="ide-pane-left" style={{ width: '100%', borderRadius: '12px', borderRight: 'none' }}>
              <div className="ide-tab-bar">
                <span className="ide-tab-dot red"></span>
                <span className="ide-tab-dot yellow"></span>
                <span className="ide-tab-dot green"></span>
                <span className="ide-tab-title">about.ts</span>
              </div>
              <div className="ide-code-content" style={{ padding: '1.75rem 2.5rem' }}>
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
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>role:</span> <span style={{ color: '#98c379' }}>'Software Engineer'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">4</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>work:</span> <span style={{ color: '#98c379' }}>'Whiteopen Teknologi (Bandung)'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">5</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>education:</span> <span style={{ color: '#98c379' }}>'STMIK LIKMI'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">6</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>techStack:</span> [</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">7</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Java (Spring Boot / Microservices)'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">8</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Vue.js'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">9</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Flutter'</span></span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">10</span>
                  <span>&nbsp;&nbsp;],</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">11</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>tools:</span> [</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">12</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'JetBrains WebStorm'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">13</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Cursor / GitHub Copilot'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">14</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Figma'</span></span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">15</span>
                  <span>&nbsp;&nbsp;],</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">16</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>aiFocus:</span> [</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">17</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Autonomous AI Agents'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">18</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'MCP (Hermes & OpenClaw)'</span></span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">19</span>
                  <span>&nbsp;&nbsp;],</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">20</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>languages:</span> [</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">21</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Indonesian (Native)'</span>,</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">22</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'English (Proficient)'</span></span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">23</span>
                  <span>&nbsp;&nbsp;],</span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">24</span>
                  <span>&nbsp;&nbsp;<span style={{ color: '#abb2bf' }}>philosophy:</span> <span style={{ color: '#98c379' }}>'Ecosystem Play (One-time Software Payment)'</span></span>
                </div>
                <div className="ide-code-line">
                  <span className="ide-code-number">25</span>
                  <span>&#125;;</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="editorial-section" style={{ width: '100%', border: 'none', padding: '1.5rem 0' }}>
          <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.35rem', lineHeight: '2.1', color: 'var(--text-body)' }}>
              {paragraphs[0]}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
