import React from 'react';
import './SoftSkills.css';

const skillsData = [
  {
    category: "Front-End Technologies",
    skills: "React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, JQuery, SASS, Tailwind CSS, Styled Components",
    percent: 95
  },
  {
    category: "State Management & Architecture",
    skills: "Redux, Context API, Micro Front-End Architecture, Component Optimization, Code Splitting",
    percent: 90
  },
  {
    category: "Tools, Build & Deployment",
    skills: "Git, GitHub, GitLab, Azure DevOps, Webpack, npm/Yarn, CI/CD pipeline Integration, Chrome DevTools, Lighthouse",
    percent: 90
  },
  {
    category: "APIs & Data Handling",
    skills: "RESTful APIs, Axios, AJAX, Asynchronous JavaScript",
    percent: 85
  },
  {
    category: "Design, Workflow & Utilities",
    skills: "Figma, Agile/Scrum Methodologies, Jira, UX-driven Development, VS Code, GitHub Copilot, MCP Server, Responsive Design, WCAG Accessibility Standards",
    percent: 80
  }
];
const SoftSkillCard = ({ title, description, icon }) => {
  return (
    <div className="soft-skill-card-fancy"> {/* Updated class name */}
      <div className="skill-header">
        {icon && <span className="skill-icon">{icon}</span>}
        <h3 className="skill-title">{title}</h3>
      </div>
      <p className="skill-description">{description}</p>
      <div className="skill-footer">
        {/* Changed philosophy accent color to match the gradient start color */}
        <span className="skill-philosophy">
          <span className="philosophy-text">📈 **My Philosophy:** **Org Growth** ➡️ **My Growth**</span>
        </span>
      </div>
    </div>
  );
};

const SoftSkills = () => {
  const skills = [
    {
      title: 'Growth-Focused Mindset',
      description:
        'Prioritizing the organization\'s growth as the primary goal, believing personal career advancement is a natural result of collective success.',
      icon: '🌱',
    },
    {
      title: 'Innovation & Cost Reduction',
      description:
        'Actively seeking innovative solutions to not only improve processes but also strategically reduce time and cost overhead for the business.',
      icon: '💡',
    },
    {
      title: 'EQ, IQ, and AQ Balance',
      description:
        'Focusing on Emotional Quotient (EQ) and Adaptability Quotient (AQ) alongside technical IQ to better embrace and drive the organizational vision.',
      icon: '🧠',
    },
    {
      title: 'Time & Quality Management',
      description:
        'A strong commitment to quality over mere quantity, coupled with effective time management to deliver high-impact results consistently.',
      icon: '⏳',
    },
    {
      title: 'Leadership & Communication',
      description:
        'Leading by example and fostering open, clear communication to align team efforts and drive projects toward shared objectives.',
      icon: '🗣️',
    },
  ];

  return (
    <section id="softskills" className="myProject softskills-section-container">
        <div className="myProject_title">
            <h1>Soft Skills</h1>
        </div>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <SoftSkillCard
                    key={index}
                    title={skill.title}
                    description={skill.description}
                    icon={skill.icon}
                />
            ))}
        </div>
    </section>
  );
}

export default SoftSkills;