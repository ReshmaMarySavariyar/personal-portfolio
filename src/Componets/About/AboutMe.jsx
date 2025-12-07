import React from 'react';
import './AboutMe.css';

import github from '../../../src/assets/i_github.png';
import gmail from '../../../src/assets/i_gmail.png';
import LinkedIn from '../../../src/assets/i_linkedin.png';
import Reshma from '../../assets/PortfolioReshma.jpeg';

// List of core skills for the new visual section
const coreSkills = [
    'React.js / Next.js',
    'JavaScript (ES6+) / TypeScript',
    'Tailwind CSS / SCSS / SASS',
    'Redux / Context API',
    'RESTful APIs / Axios',
    'Micro Front-Ends',
    'Git / CI/CD',
    'Performance Optimization'
];

function AboutMe() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            
            <div className="about-section">
                <div className="about-left">
                    <img src={Reshma} alt="profile_pic" />
                </div>
                
                <div className="about-right">
                    
                    {/* TOP SECTION: Bio and Main Paragraphs */}
                    <div className="about-info-card">
                        <p className="about-tagline">
                            Hi, I’m **Reshma Mary Savariyar** — a Frontend Web Developer with **3.10 years of experience** turning tricky requirements into clean, smooth, and fast web applications ⚡💻.
                        </p>
                        <p>
                            I mostly work with **React.js**, **Next.js**, **JavaScript (ES6+)**, and **TypeScript**... and yes, “Me + JSX = perfect teamwork 😄🤝✨.” I enjoy creating beautiful, responsive UIs using **Tailwind CSS**, SCSS, and CSS3/SASS — basically, if it’s a style, I can make it smile 🎨✨😊.
                        </p>
                        <p>
                            Whether it’s state management, code splitting, or improving Lighthouse scores, I love making apps load faster 🚀 and work better 💡. I handle **Redux**, Context API, code splitting, and those dramatic **Micro Front-End** setups 🎭⚡ like a calm parent with a hyperactive child 😌👶.
                        </p>
                        <p className="about-closing">
                            My goal? To build websites so smooth and easy ✨🛋️ that users feel like everything just magically works 🪄😎. And yes… bugs 🐛 show up sometimes — but don’t worry, I make them disappear faster than a YouTube ad you skip 🏃‍♀️💨👾🎬.
                        </p>
                    </div>

                    {/* BOTTOM SECTION: Key Skills and Social Links */}
                    <div className="about-skills-and-socials">
                        
                        <div className="tech-stack-grid">
                            <h2>Core Tech Stack 🛠️</h2>
                            {coreSkills.map((skill, index) => (
                                <div key={index} className="tech-skill-pill">
                                    {skill}
                                </div>
                            ))}
                        </div>

                        <div className="about-social-links">
                            <h2 className="social-title">Connect with Me</h2>
                            <div className="media-icons-container">
                                <div className="about-media">
                                    <img src={github} alt="GitHub" />
                                    <a href="https://github.com/ReshmaMarySavariyar" target="_blank" rel="noopener noreferrer"> GitHub</a>
                                </div>
                                <div className="about-media">
                                    <img src={gmail} alt="Gmail" />
                                    <a href="mailto:reshmamary.savariyar@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                                </div>
                                <div className="about-media">
                                    <img src={LinkedIn} alt="LinkedIn" />
                                    <a href="https://www.linkedin.com/in/reshma-mary-savariyar-62b761344/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default AboutMe;