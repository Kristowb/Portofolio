export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  status?: 'Acquisition' | 'Prototype' | 'Active';
}

export interface PostItem {
  id: string;
  title: string;
  readTime: string;
  date: string;
  slug: string;
  pinned?: boolean;
}

export interface ProfileData {
  nameProfessional: string;
  namePersonal: string;
  aboutProfessional: string[];
  aboutPersonal: string[];
}

export const profileData: ProfileData = {
  nameProfessional: "Kristianto Wibawa",
  namePersonal: "Kristianto",
  aboutProfessional: [
    "Engineer & serial entrepreneur. Saat ini bekerja pada proyek asisten AI otonom (seperti Claude Code / Antigravity) di Anthropic / Google DeepMind.",
    "Sebelumnya mendirikan perusahaan game yang didukung YC dan menggalang dana $17 juta (One More Multiverse), menjual startup SaaS, membuat platform non-profit (Pubpub.org), dan menempuh studi pascasarjana di MIT Media Lab."
  ],
  aboutPersonal: [
    "Mencoba untuk memperhatikan dunia dengan saksama.",
    "Menulis tentang tanah liat, cahaya, interaksi mesin-manusia, dan filosofi pengodean."
  ]
};

export const postsData: PostItem[] = [
  {
    id: "1",
    title: "LLM-Powered Sorting with TrueSkill",
    readTime: "7 min read",
    date: "11 Feb 2025",
    slug: "sorting",
    pinned: false
  },
  {
    id: "2",
    title: "Should Developers Care about Interpretability?",
    readTime: "6 min read",
    date: "4 Nov 2024",
    slug: "interpretability",
    pinned: false
  },
  {
    id: "3",
    title: "Clay and Light",
    readTime: "2 min read",
    date: "6 Dec 2025",
    slug: "clay-and-light",
    pinned: true
  },
  {
    id: "4",
    title: "Sparse Rewards: Enlightenment and Reinforcement Learning",
    readTime: "4 min read",
    date: "28 Mar 2026",
    slug: "sparse-rewards",
    pinned: false
  },
  {
    id: "5",
    title: "I can think. I can wait. I can fast.",
    readTime: "2 min read",
    date: "20 Jan 2026",
    slug: "fast",
    pinned: false
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "multiverse",
    title: "One More Multiverse",
    description: "Perusahaan game RPG yang didukung YC yang saya kelola selama 5 tahun. Kami berhasil menjangkau lebih dari satu juta pengguna dan menjadi viral di TikTok.",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://www.playmultiverse.com",
    status: "Active"
  },
  {
    id: "latentlit",
    title: "LatentLit",
    description: "Sebuah alat bantu modern untuk membuat, melatih, dan membagikan agen-agen kecerdasan buatan (LLM-powered AI agents).",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://latentlit.goodfire.ai",
    status: "Active"
  },
  {
    id: "quickedit",
    title: "Quick Edit",
    description: "Asisten penyuntingan tulisan berbasis AI (Copyediting) dengan antarmuka pengguna yang sangat responsif dan efisien.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://quickedits.thariq.io",
    status: "Active"
  },
  {
    id: "sherpa",
    title: "Sherpa",
    description: "Agen email AI cerdas yang mengurutkan dan memprioritaskan email Anda berdasarkan jaringan kontak dan tujuan karir Anda.",
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80",
    demoUrl: "/blog/sherpa",
    status: "Prototype"
  },
  {
    id: "worldbuilding",
    title: "AI World Building",
    description: "Eksperimen dalam pembuatan dunia (world-building) bertenaga AI untuk membantu jalannya permainan bermain peran (roleplaying games).",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    demoUrl: "/blog/worldbuilding",
    status: "Prototype"
  },
  {
    id: "edgeout",
    title: "Edgeout.gg",
    description: "Platform analitik gaming bootstrapped yang saya rancang dan bangun sendiri secara penuh, lalu berhasil diakuisisi oleh blitz.gg.",
    imageUrl: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://blitz.gg",
    status: "Acquisition"
  },
  {
    id: "pubpub",
    title: "Pubpub.org",
    description: "Platform publikasi akademik nirlaba open-access yang saya dirikan bersama rekan di MIT Media Lab.",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://pubpub.org",
    status: "Active"
  },
  {
    id: "chime",
    title: "Chime",
    description: "Startup perpesanan yang saya dirikan saat masa kuliah sarjana, yang kemudian sukses diakuisisi oleh HubSpot.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://techcrunch.com/2013/03/28/hubspot-acquires-chime-prepwork/",
    status: "Acquisition"
  }
];
