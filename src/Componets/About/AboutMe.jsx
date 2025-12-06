import './AboutMe.css'

import github from '../../../src/assets/i_github.png'
import gmail from '../../../src/assets/i_gmail.png'
import LinkedIn from '../../../src/assets/i_linkedin.png'
import Reshma from '../../assets/PortfolioReshma.jpeg';



function AboutMe() {
    return (
        <div id='about' className='about'>
            <div className="about-title">About Me</div>
            <div className="about-section">
                <div className="about-left"><img src={Reshma} alt="profile_pic" /></div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I'm <b>Reshma Mary Savariyar</b>, a Frontend Web Developer with 3.10 years of hands-on experience in building scalable, high-performing, and responsive web applications using React.js, Next.js, JavaScript (ES6+), and TypeScript.<br />
                            Skilled in modern UI development with Tailwind CSS, SCSS, and CSS3/SASS. Strong expertise in state management, code splitting, and front-end performance optimization, including improving Lighthouse scores.<br />
                            Focused on writing clean, reusable, and maintainable code while consistently delivering smooth and intuitive user experiences.
                        </p>
                        <div className="about-media"><img src={github} alt="GitHub" /><a href="https://github.com/ReshmaMarySavariyar" target="_blank" rel="noopener noreferrer"> GitHub</a></div>
                        <div className="about-media"><img src={gmail} alt="Gmail" /><a href="mailto:reshmamary.savariyar@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a></div>
                        <div className="about-media"><img src={LinkedIn} alt="LinkedIn" /><a href="https://www.linkedin.com/in/reshma-mary-savariyar-62b761344/" target="_blank" rel="noopener noreferrer"> LinkedIn</a></div>
                    </div>
                   

                </div>

            </div>
        </div>
    );
}
export default AboutMe



