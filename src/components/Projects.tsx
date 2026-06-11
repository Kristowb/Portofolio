import { useState, useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/profile';
import type { ProjectItem } from '../data/profile';

// Corner Ornament SVG Component
const CornerOrnaments = () => (
  <>
    <svg className="corner-ornament top-left" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 2 L12 2 L2 12 Z" fill="currentColor" opacity="0.3"></path>
      <circle cx="4" cy="4" r="1.5" fill="currentColor"></circle>
    </svg>
    <svg className="corner-ornament top-right" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 2 L12 2 L2 12 Z" fill="currentColor" opacity="0.3"></path>
      <circle cx="4" cy="4" r="1.5" fill="currentColor"></circle>
    </svg>
    <svg className="corner-ornament bottom-left" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 2 L12 2 L2 12 Z" fill="currentColor" opacity="0.3"></path>
      <circle cx="4" cy="4" r="1.5" fill="currentColor"></circle>
    </svg>
    <svg className="corner-ornament bottom-right" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 2 L12 2 L2 12 Z" fill="currentColor" opacity="0.3"></path>
      <circle cx="4" cy="4" r="1.5" fill="currentColor"></circle>
    </svg>
  </>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // Ref untuk mengembalikan fokus setelah modal ditutup
  const triggerButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  // Ref untuk tombol close modal
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    if (selectedProject) {
      const id = selectedProject.id;
      setSelectedProject(null);
      // Kembalikan fokus ke kartu proyek yang memicu modal
      setTimeout(() => {
        triggerButtonRefs.current[id]?.focus();
      }, 50);
    }
  };

  // Handle ESC key untuk menutup modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]); // eslint-disable-line react-hooks/exhaustive-deps

  // Kelola perpindahan fokus ketika modal terbuka/tertutup
  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }
  }, [selectedProject]);

  return (
    <section id="proyek" className="editorial-section fade-in-up">
      <div className="editorial-left">
        <h2>Stuff I've Made</h2>
      </div>

      <div className="editorial-right">
        {/* Grid Kartu Proyek */}
        <div className="stuff-grid">
          {projectsData.map((project) => (
            <button
              key={project.id}
              ref={(el) => { triggerButtonRefs.current[project.id] = el; }}
              onClick={() => handleOpenModal(project)}
              className="project-card-btn"
              aria-haspopup="dialog"
              style={{ borderRadius: '8px' }}
            >
              <div className="vintage-card">
                <CornerOrnaments />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="stuff-card-image"
                  loading="lazy"
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1.25rem 1.25rem 1.5rem 1.25rem', flexGrow: 1 }}>
                  <h3 className="project-card-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                    {project.title}
                  </h3>
                  <p className="project-card-summary" style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: 0, flexGrow: 1 }}>
                    {project.description}
                  </p>
                  {project.status && (
                    <span className={`status-badge-vintage ${project.status.toLowerCase()}`} style={{ marginTop: '0.75rem' }}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Detail Proyek (A11y Dialog) */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={handleCloseModal}
              className="modal-close-btn"
              aria-label="Tutup Detail Proyek"
            >
              <X size={20} />
            </button>

            <div className="modal-body">
              <div className="modal-image-container">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>

              <div className="modal-details">
                {selectedProject.status && (
                  <span className="modal-badge">{selectedProject.status}</span>
                )}
                <h3 id="modal-title" className="modal-project-title" style={{ fontFamily: 'var(--font-serif)' }}>
                  {selectedProject.title}
                </h3>
                
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-actions" style={{ marginTop: '2rem' }}>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Kunjungi Live <ExternalLink size={14} style={{ marginLeft: '6px' }} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
