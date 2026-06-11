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
            Lihat Proyek <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </a>
          <a href="/resume.pdf" download="Resume_Ryan_Carson.pdf" className="btn btn-secondary">
            Unduh CV / Resume <Download size={16} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>

      <div className="about-box">
        <h3 className="about-title">Tentang Saya</h3>
        <p className="about-text">
          Dengan latar belakang di bidang teknik komputer dan desain grafis, saya mengikis batas antara kode dan visual. Saya percaya bahwa software hebat tidak hanya harus berjalan tanpa cela di belakang layar, melainkan juga harus memukau pengguna pada detik pertama mereka melihatnya.
        </p>
      </div>
    </section>
  );
}
