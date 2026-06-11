export interface Project {
  id: string;
  title: string;
  category: 'Software' | 'UI/UX Design';
  summary: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl: string; // Resolves to placeholder/mockup
}

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Autonomous Dev Agent Loop - Ralph Dashboard',
    category: 'Software',
    summary: 'Aplikasi dashboard web interaktif untuk memantau siklus agen kecerdasan buatan otonom secara real-time.',
    description: 'Dashboard canggih yang dirancang untuk mengintegrasikan proses loop otonom Ralph. Memungkinkan developer melacak status cerita pengguna, melihat log eksekusi, memantau konsumsi token LLM, dan mengelola branch git secara otomatis melalui antarmuka visual yang intuitif.',
    technologies: ['React', 'TypeScript', 'Vite', 'PowerShell', 'Git'],
    demoUrl: 'https://github.com/snarktank/ralph',
    repoUrl: 'https://github.com/snarktank/ralph',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'proj-2',
    title: 'Fintech Mobile App - PayFlow Case Study',
    category: 'UI/UX Design',
    summary: 'Studi kasus desain antarmuka aplikasi seluler manajemen keuangan mikro dan transfer instan tanpa biaya admin.',
    description: 'PayFlow memecahkan masalah transfer uang antar bank dan pembayaran mikro untuk usaha kecil. Desain ini berfokus pada kemudahan aksesibilitas (A11y), visualisasi pengeluaran bulanan yang ramah pengguna, dan alur transaksi yang dapat diselesaikan kurang dari tiga ketukan.',
    technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping'],
    demoUrl: 'https://figma.com',
    imageUrl: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'proj-3',
    title: 'E-Commerce Platform - Bloom Decor',
    category: 'Software',
    summary: 'Platform belanja online produk kerajinan tangan dan tanaman hias dengan integrasi keranjang belanja modern.',
    description: 'Sebuah website e-commerce berkinerja tinggi yang dikembangkan dengan fokus pada pemuatan halaman instan dan pengalaman checkout yang mulus. Menggunakan vanilla CSS untuk tata letak modern dan didesain responsif sepenuhnya untuk mendongkrak konversi transaksi.',
    technologies: ['React', 'TypeScript', 'Context API', 'Vanilla CSS'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'proj-4',
    title: 'Travel Agency Website Redesign - Wanderlust',
    category: 'UI/UX Design',
    summary: 'Redesain website pemesanan tiket perjalanan wisata dengan fokus pada estetika minimalis dan navigasi intuitif.',
    description: 'Redesain Wanderlust bertujuan untuk menghilangkan kepadatan informasi pada website agensi perjalanan tradisional. Dengan menonjolkan keindahan foto destinasi wisata lewat grid asimetris dan menyederhanakan formulir pencarian tiket, konversi pemesanan meningkat pesat.',
    technologies: ['Figma', 'User Research', 'Design System', 'Typography'],
    demoUrl: 'https://figma.com',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];
