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
                            Hi, I’m Reshma Mary Savariyar — a Frontend Web Developer with 3.10 years of experience turning tricky requirements into clean, smooth, and fast web applications ⚡💻. I mostly work with React.js, Next.js, JavaScript (ES6+), and TypeScript… and yes, “Me + JSX = perfect teamwork 😄🤝✨.”

                            <br /><br />I enjoy creating beautiful, responsive UIs using Tailwind CSS, SCSS, and CSS3/SASS — basically, if it’s a style, I can make it smile 🎨✨😊. Whether it’s state management, code splitting, or improving Lighthouse scores, I love making apps load faster 🚀 and work better 💡.

                            <br /><br />When it comes to RESTful APIs, Axios, and AJAX, I’m like a friendly messenger 📬🤖, making sure the front end and back end stay on good terms. No drama, just smooth data flow 😄🔄.

                            <br /><br />I use tools such as Git, GitHub, GitLab, Azure DevOps, Webpack, npm/Yarn, CI/CD pipelines, Chrome DevTools, and Lighthouse 🛠️✨ — and yes, debugging patience 🐞🕵️‍♀️ is included for free.

                            <br /><br />I handle Redux, Context API, code splitting, and those dramatic Micro Front-End setups 🎭⚡ like a calm parent with a hyperactive child 😌👶.

                            <br /><br />A few tweaks… a deep breath… and boom — the app behaves 🎯😄✨

                            <br /><br />I’m a big fan of writing clean and reusable code 💻🧹 — because I like keeping my future self stress-free 😌☕.
                            My goal? To build websites so smooth and easy ✨🛋️ that users feel like everything just magically works 🪄😎.

                            <br />
                            <br /><br />And yes… bugs 🐛 show up sometimes — but don’t worry, I make them disappear faster than a YouTube ad you skip 🏃‍♀️💨👾🎬.
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



