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
  tools: string[];
  languages: string[];
}

export const profileData: ProfileData = {
  nameProfessional: "Kristianto Wibawa",
  namePersonal: "Kris",
  aboutProfessional: [
    "Software Engineer at Whiteopen Teknologi (Bandung). Graduate of STMIK LIKMI with a focus on Information Systems.",
    "Strong advocate for Ecosystem Play strategies, preferring one-time software payment models over monthly subscriptions."
  ],
  aboutPersonal: [
    "Dota 2 Carry player, Solana DeFi trader on Binance, Coinbase, and OpenSea, JKT48/AKB48 fan (who routinely attends concerts like Wonderland 13th Anniversary and ALL IN TOUR), 7-week workout planner, and local Indonesian culinary enthusiast (bakso, nasi goreng, seblak, soto, satai)."
  ],
  tools: [
    "JetBrains WebStorm",
    "Cursor",
    "GitHub Copilot",
    "Figma"
  ],
  languages: [
    "Indonesian (Native)",
    "English (Proficient)"
  ]
};

export const postsData: PostItem[] = [
  {
    id: "prof-1",
    title: "Migrating from Monolith Hibernate to Spring Boot with Java 17",
    readTime: "8 min read",
    date: "15 Mar 2026",
    slug: "monolith-to-spring-boot-java17",
    pinned: false
  },
  {
    id: "prof-2",
    title: "Designing a Highly Scalable Database for Beautypedia Cosmetic Marketplace",
    readTime: "6 min read",
    date: "2 Feb 2026",
    slug: "beautypedia-database-design",
    pinned: false
  },
  {
    id: "prof-3",
    title: "Implementing Clean Google OAuth Authentication in Spring Boot",
    readTime: "5 min read",
    date: "12 Jan 2026",
    slug: "spring-boot-google-oauth",
    pinned: false
  },
  {
    id: "prof-4",
    title: "Configuring Autonomous AI Agents and MCP using Hermes and OpenClaw",
    readTime: "7 min read",
    date: "3 Dec 2025",
    slug: "ai-agents-mcp-hermes-openclaw",
    pinned: false
  },
  {
    id: "pers-1",
    title: "My Solana DeFi Trading Strategy: Navigating the SOL Ecosystem on Binance, Coinbase, and OpenSea",
    readTime: "4 min read",
    date: "28 May 2026",
    slug: "solana-defi-trading-strategy",
    pinned: true
  },
  {
    id: "pers-2",
    title: "Playing Carry in Dota 2: Tips for Grinding MMR",
    readTime: "5 min read",
    date: "14 Apr 2026",
    slug: "dota2-carry-grinding-mmr",
    pinned: false
  },
  {
    id: "pers-3",
    title: "Concert Review: Wonderland JKT48 13th Anniversary and ALL IN TOUR",
    readTime: "6 min read",
    date: "20 Mar 2026",
    slug: "jkt48-akb48-concert-review",
    pinned: false
  },
  {
    id: "pers-4",
    title: "Survival Guide: Surviving the Intense 7-Week Workout Schedule",
    readTime: "3 min read",
    date: "10 Feb 2026",
    slug: "seven-week-workout-survival-guide",
    pinned: false
  },
  {
    id: "pers-5",
    title: "Bandung Culinary Tour: Finding the Best Bakso, Nasi Goreng, Seblak, Soto, and Satai",
    readTime: "4 min read",
    date: "15 Jan 2026",
    slug: "bandung-culinary-local-tour",
    pinned: false
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "beautypedia",
    title: "Beautypedia",
    description: "A cosmetic marketplace platform. Designed the database structure and integrated Xendit payment gateway.",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://beautypedia.id",
    status: "Active"
  },
  {
    id: "trustpos",
    title: "Trustpos",
    description: "Led the complete migration of the system from a monolith Hibernate architecture to a microservices architecture.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://trustpos.com",
    status: "Active"
  },
  {
    id: "google-oauth",
    title: "System Integration",
    description: "Implemented Google OAuth authentication, including writing migration scripts and service layer logic.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://github.com/Kristowb/google-oauth-migration",
    status: "Active"
  },
  {
    id: "ai-development",
    title: "AI Development",
    description: "Configured autonomous AI Agents and Model Context Protocol (MCP) using Hermes and OpenClaw.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    demoUrl: "https://github.com/Kristowb/openclaw-mcp",
    status: "Prototype"
  }
];
