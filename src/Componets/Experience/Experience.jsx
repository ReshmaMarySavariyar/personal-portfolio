import React, { useState, useEffect } from 'react';
import './Experience.css';

function Experience() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detect screen size (Keeping this logic)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Experience data from your resume (Keeping this data)
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
      title: "Software Engineer 3 (UI/UX)",
      company: "Syncfusion Private Limited",
      location: "Chennai",
      duration: "Feb 2022 – March 2025",
      highlights: [
        "Improved application performance by reducing load times by 40% through component-level optimization and efficient use of React lifecycle methods.",
        "Developed dynamic UI systems for multiple applications using React.js, including tools that analyze work item details directly from Azure DevOps.",
        "Elevated user experience by 90% by implementing a flexible theming system supporting both dark and light modes across various modules.",
        "Increased workflow transparency by 75% with the development of a Notes Tab feature that enables users to add, track, and manage comments within task pipelines.",
        "Delivered key features suchs as localization, theming, and advanced editor components for the Bold Sales CRM, improving overall user adoption and usability."
      ]
    }
  ];

  return (
    <div id="experience" className="myProject">
      <div className="myProject_title">
        <h1>Experience</h1>
      </div>

      <div className="experience-timeline-container">
        {experienceData.map((exp, idx) => (
          // The main component for each job entry
          <div key={idx} className="timeline-item">
            {/* The time/date indicator on the left side */}
            <div className="timeline-duration">
              <span>{exp.duration}</span>
              <span className="timeline-location">{exp.location}</span>
            </div>

            {/* The main content card */}
            <div className="timeline-content-card">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              
              <ul className="timeline-highlights">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            {/* The circle on the timeline line */}
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;