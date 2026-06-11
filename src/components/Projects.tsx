import { useState, useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import { projectsData } from '../data/projects';

// Ikon GitHub SVG Inline yang tangguh dan independen
const GithubIcon = ({ size = 20, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Software' | 'UI/UX Design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Ref untuk mengembalikan fokus setelah modal ditutup
  const triggerButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  // Ref untuk tombol close modal
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Filter proyek
  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const handleOpenModal = (project: Project) => {
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
      // Pindahkan fokus ke tombol close modal setelah terbuka
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }
  }, [selectedProject]);

  return (
    <section id="proyek" className="projects-section fade-in-up">
      <div className="section-header">
        <h2 className="section-title">Galeri Portofolio</h2>
        <p className="section-subtitle">Daftar proyek rekayasa perangkat lunak dan studi kasus desain UI/UX</p>
      </div>

      {/* Filter Kategori */}
      <div className="filter-container">
        {(['All', 'Software', 'UI/UX Design'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat === 'All' ? 'Semua Proyek' : cat}
          </button>
        ))}
      </div>

      {/* Grid Kartu Proyek */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            ref={(el) => { triggerButtonRefs.current[project.id] = el; }}
            onClick={() => handleOpenModal(project)}
            className="project-card-btn"
            aria-haspopup="dialog"
          >
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <span className="project-badge">{project.category}</span>
              </div>
              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-summary">{project.summary}</p>
                <div className="project-card-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
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
                <span className="modal-badge">{selectedProject.category}</span>
                <h3 id="modal-title" className="modal-project-title">
                  {selectedProject.title}
                </h3>
                
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-tech-section">
                  <h4 className="modal-subtitle-tech">Teknologi & Alat:</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
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
                  {selectedProject.repoUrl && selectedProject.category === 'Software' && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Lihat Kode <GithubIcon size={14} style={{ marginLeft: '6px' }} />
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
