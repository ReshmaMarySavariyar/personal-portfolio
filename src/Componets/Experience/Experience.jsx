import React, { useState, useEffect } from 'react';
import './Experience.css';

function Experience() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show first 3 projects on mobile if not expanded

  // Experience data from your resume
  const experienceData = [
    {
      title: "Front-End Developer (UI/UX)",
      company: "Verizon Communications India Pvt Ltd",
      location: "Chennai",
      duration: "March 2025 – Present",
      highlights: [
        "Designed and developed major modules for the Assisted Sales Platform, a Micro Front-End application, enhancing scalability and sales workflow efficiency.",
        "Led the end-to-end development of the Manager Dashboard using React.js, TypeScript, and Styled Components, ensuring full responsiveness and compliance with WCAG accessibility standards.",
        "Built a custom Figma plugin that extracts design properties and uses GitHub Copilot to auto-generate reusable, standards-compliant React components, streamlining development workflows.",
        "Integrated RESTful APIs to enable smooth, high-performance communication between front-end microservices and backend systems.",
        "Worked closely with cross-functional teams in an Agile/Scrum environment to maintain performance, reliability, and adherence to brand guidelines."
      ]
    },
    {
      title: "Front-End Developer (UI/UX)",
      company: "Syncfusion Private Limited",
      location: "Chennai",
      duration: "Feb 2022 – March 2025",
      highlights: [
        "Improved application performance by reducing load times by 40% through component-level optimization and efficient use of React lifecycle methods.",
        "Developed dynamic UI systems for multiple applications using React.js, including tools that analyze work item details directly from Azure DevOps.",
        "Elevated user experience by 90% by implementing a flexible theming system supporting both dark and light modes across various modules.",
        "Increased workflow transparency by 75% with the development of a Notes Tab feature that enables users to add, track, and manage comments within task pipelines.",
        "Delivered key features such as localization, theming, and advanced editor components for the Bold Sales CRM, improving overall user adoption and usability."
      ]
    }
  ];
  const visibleProjects = isMobile && !showAll ? experienceData.slice(0, 3) : experienceData;

  return (
    <div id="experience" className="myProject">
      <div className="myProject_title">
        <h1>Experience</h1>
      </div>

      {/* Experience Table */}
      <div className="experience-table">
        <h2>Work Experience</h2>
        <table>
          <tbody>
            {experienceData.map((exp, idx) => (
              <tr key={idx}>
                <td>
                  <strong>{exp.title}</strong><br />
                  {exp.company} ({exp.location})<br />
                  <em>{exp.duration}</em>
                  <ul>
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;