import React, { useState, useEffect } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Front-End Technologies",
    skills: ["React.js (95)", "Next.js (90)", "JavaScript (ES6+) (95)", "TypeScript (85)", "HTML5 (95)", "CSS3/SCSS/SASS (90)", "JQuery (80)", "Tailwind CSS (90)", "Styled Components (85)"],
    percent: 95
  },
  {
    category: "State Management & Architecture",
    skills: ["Redux (90)", "Context API (85)", "Micro Front-End Architecture (80)", "Component Optimization (95)", "Code Splitting (90)"],
    percent: 90
  },
  {
    category: "Tools, Build & Deployment",
    skills: ["Git (95)", "GitHub (90)", "GitLab (85)", "Azure DevOps (80)", "Webpack (75)", "npm/Yarn (95)", "CI/CD Integration (80)", "Chrome DevTools (95)", "Lighthouse (90)"],
    percent: 90
  },
  {
    category: "APIs & Data Handling",
    skills: ["RESTful APIs (90)", "Axios (85)", "AJAX (80)", "Asynchronous JavaScript (90)"],
    percent: 85
  },
  {
    category: "Design, Workflow & Utilities",
    skills: ["Figma (80)", "Agile/Scrum (95)", "Jira (90)", "UX-driven Dev (90)", "VS Code (95)", "GitHub Copilot (70)", "MCP Server (70)", "Responsive Design (95)", "WCAG Accessibility (85)"],
    percent: 80
  }
];

// Helper component for the individual skill card
const SkillCard = ({ category, skills, initialPercent }) => {
  const [displayPercent, setDisplayPercent] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);

  // Animate the bar on mount
  useEffect(() => {
    // Timeout to ensure CSS transitions apply after component mounts
    const timer = setTimeout(() => {
      setDisplayPercent(initialPercent);
    }, 100); 
    return () => clearTimeout(timer);
  }, [initialPercent]);

  // Handle click to maximize the bar
  const handleMaximize = () => {
    if (!isMaximized) {
      setDisplayPercent(100);
      setIsMaximized(true);
    } else {
      setDisplayPercent(initialPercent);
      setIsMaximized(false);
    }
  };
  
  // Extract skill names and optional proficiency from the string array
  const parsedSkills = skills.map(s => {
      const match = s.match(/^(.*?)\s\((\d+)\)$/);
      return match ? { name: match[1], proficiency: match[2] } : { name: s, proficiency: null };
  });

  // Function to determine the logo class (simplistic matching)
  const getLogoClass = (skillName) => {
    if (skillName.includes('React')) return 'logo-react';
    if (skillName.includes('Next')) return 'logo-nextjs';
    if (skillName.includes('TypeScript')) return 'logo-typescript';
    if (skillName.includes('Redux')) return 'logo-redux';
    if (skillName.includes('Git')) return 'logo-git';
    if (skillName.includes('Figma')) return 'logo-figma';
    if (skillName.includes('Tailwind')) return 'logo-tailwind';
    return '';
  };

  return (
    <div className="skill-card-item">
      <div className="card-header">
        <h3 className="skill-category" onClick={handleMaximize}>
          {category} {isMaximized ? '🚀' : '💡'}
        </h3>
        <span className="skill-percent-label">{displayPercent}%</span>
      </div>

      {/* Gradient Progress Bar */}
      <div className="skill-progress-bg">
        <div
          className={`skill-progress-bar ${isMaximized ? 'maximized' : ''}`}
          style={{ width: `${displayPercent}%` }}
        ></div>
      </div>
      
      {/* Detailed Skill Pills (Eye-Catching Sub-Content) */}
      <div className="skill-list-detail">
        {parsedSkills.map((skill, index) => (
            <span key={index} className={`skill-pill ${getLogoClass(skill.name)}`}>
                <span className="pill-logo"></span> {/* Logo container */}
                {skill.name}
                {skill.proficiency && <span className="pill-proficiency"> {skill.proficiency}%</span>}
            </span>
        ))}
      </div>
    </div>
  );
};


const Skills = () => {
  return (
    <div id="skills" className="myProject">
      <div className="myProject_title">
        <h1>Skills</h1>
      </div>
      
      <div className="skills-grid-container">
        <h2>Technical Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((item, idx) => (
            <SkillCard 
              key={idx} 
              category={item.category} 
              skills={item.skills} 
              initialPercent={item.percent} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;