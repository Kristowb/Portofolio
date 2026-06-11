import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // Validasi real-time
  const validateField = (name: keyof FormFields, value: string) => {
    let errorMsg = '';
    
    if (!value.trim()) {
      errorMsg = `${name.charAt(0).toUpperCase() + name.slice(1)} wajib diisi.`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = 'Format email tidak valid.';
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg ? errorMsg : undefined
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof FormFields, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi akhir sebelum submit
    const currentErrors: FormErrors = {};
    Object.keys(fields).forEach((key) => {
      const val = fields[key as keyof FormFields];
      if (!val.trim()) {
        currentErrors[key as keyof FormFields] = `${key.charAt(0).toUpperCase() + key.slice(1)} wajib diisi.`;
      } else if (key === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          currentErrors.email = 'Format email tidak valid.';
        }
      }
    });

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Mock API Simulasi
    setTimeout(() => {
      console.log('=== Formulir Kontak Dikirim ===');
      console.log('Nama   :', fields.name);
      console.log('Email  :', fields.email);
      console.log('Subjek :', fields.subject);
      console.log('Pesan  :', fields.message);
      console.log('===============================');

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset Formulir
      setFields({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hilangkan toast pesan sukses setelah 4 detik
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="kontak" className="contact-section fade-in-up" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <h2 className="section-title">Hubungi Saya</h2>
        <p className="section-subtitle">Punya proyek menarik, tawaran pekerjaan, atau hanya ingin menyapa? Silakan kirim pesan Anda.</p>
      </div>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={fields.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="Nama Anda"
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Alamat Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="nama@email.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-message" role="alert">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subjek</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              className={`form-input ${errors.subject ? 'input-error' : ''}`}
              placeholder="Tawaran Kolaborasi / Pertanyaan"
              disabled={isSubmitting}
            />
            {errors.subject && <span className="error-message" role="alert">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={5}
              className={`form-textarea ${errors.message ? 'input-error' : ''}`}
              placeholder="Tulis pesan Anda di sini..."
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <span className="error-message" role="alert">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={isSubmitting}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {isSubmitting ? (
              <span className="spinner-loader">Mengirim...</span>
            ) : (
              <>
                Kirim Pesan <Send size={16} style={{ marginLeft: '8px' }} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Toast Notifikasi Sukses */}
      {submitSuccess && (
        <div className="toast-notification" role="status">
          <CheckCircle2 size={18} className="toast-icon" />
          <span>Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.</span>
        </div>
      )}
    </section>
  );
}
