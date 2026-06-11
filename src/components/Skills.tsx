import { Code2, FileCode, Globe, Layers, PenTool, Layout, Search, Zap, Palette, GitBranch, Server, Flame, Package, Terminal } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // Persentase (0-100)
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    skills: [
      { name: 'React', level: 90, icon: Code2 },
      { name: 'TypeScript', level: 85, icon: FileCode },
      { name: 'JavaScript', level: 90, icon: FileCode },
      { name: 'HTML5 & CSS3', level: 95, icon: Globe },
      { name: 'Next.js', level: 80, icon: Layers }
    ]
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Figma', level: 90, icon: PenTool },
      { name: 'Wireframing', level: 85, icon: Layout },
      { name: 'User Research', level: 80, icon: Search },
      { name: 'Prototyping', level: 85, icon: Zap },
      { name: 'Design Systems', level: 80, icon: Palette }
    ]
  },
  {
    title: 'Tools & Lainnya',
    skills: [
      { name: 'Git & GitHub', level: 85, icon: GitBranch },
      { name: 'Node.js', level: 75, icon: Server },
      { name: 'Vite & Bundlers', level: 80, icon: Flame },
      { name: 'npm / pnpm', level: 85, icon: Package },
      { name: 'VS Code', level: 90, icon: Terminal }
    ]
  }
];

const getSkillColor = (name: string): string => {
  const peach = 'var(--timeline-thinking)';
  const mint = 'var(--timeline-grep)';
  const blue = 'var(--timeline-read)';
  const lavender = 'var(--timeline-edit)';
  const gold = 'var(--timeline-done)';

  const mapping: { [key: string]: string } = {
    'React': peach,
    'Figma': peach,
    'Node.js': peach,
    'TypeScript': mint,
    'Wireframing': mint,
    'Git & GitHub': mint,
    'JavaScript': blue,
    'User Research': blue,
    'Vite & Bundlers': blue,
    'HTML5 & CSS3': lavender,
    'Prototyping': lavender,
    'npm / pnpm': lavender,
    'Next.js': gold,
    'Design Systems': gold,
    'VS Code': gold
  };

  return mapping[name] || 'var(--accent-color)';
};

export default function Skills() {
  return (
    <section id="keahlian" className="editorial-section fade-in-up">
      <div className="editorial-left">
        <h2>Skills</h2>
      </div>

      <div className="editorial-right">
        <div className="skills-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillsData.map((category) => (
            <div key={category.title} className="skills-category-card">
              <h3 className="skills-category-title">{category.title}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-name-wrapper">
                          <IconComponent className="skill-icon" size={18} />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Interaktif */}
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{ 
                            '--skill-level': `${skill.level}%`,
                            '--skill-color': getSkillColor(skill.name)
                          } as React.CSSProperties}
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
