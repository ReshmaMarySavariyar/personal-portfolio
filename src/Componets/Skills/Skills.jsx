import React from 'react';
import './Skills.css';

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

const Skills = () => {
  return (
    <div id="skills" className="myProject">
      <div className="myProject_title">
        <h1>Skills</h1>
      </div>
      <div className="skills-table">
        <h2>Technical Skills</h2>
        <table>
          <tbody>
            {skillsData.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <strong>{item.category}</strong>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-bar"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <div className="skill-list">{item.skills}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Skills;