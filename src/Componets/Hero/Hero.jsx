import React from 'react';
import './Hero.css';
import Reshma_pic from '../../assets/Reshma.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
    return (
        <div id='home' className='Hero hero-fadein'>
            {/* PROFILE PICTURE */}
            <img src={Reshma_pic} alt="Profile_Pic" className='Profil-pic hero-img-animate' />
            
            {/* MAIN TITLE (Using H1 now, with span for gradient) */}
            <h1 className="hero-main-title hero-slidein">
                I'm Reshma, a <span className="title-gradient">Front-End Developer</span> | React & JavaScript Specialist
            </h1>
            
            {/* ENGAGING TAGLINE */}
            <p className="hero-tagline hero-fadein-delay1">
                Hi! I’m a React.js & Next.js front-end developer who converts **coffee ☕ into components 🧩** and transforms weird UI glitches into smooth, satisfying animations 🎨✨. After 3+ years of building high-performance apps, I’ve learned one thing: code behaves better when you compliment it 😌💻.
            </p>
            
            {/* KEY METRICS / PUNCHLINE */}
            <div className="hero-metrics hero-fadein-delay2">
                <span>Clean UI? Done. ✅</span>
                <span>Fast load times? Done. ⚡</span>
                <span>Bugs? Already running away 🏃‍♀️💨👾.</span>
            </div>
            
            {/* CALL TO ACTION MESSAGE */}
            <p className="hero-cta-message hero-fadein-delay3">
                And hey—if you’re facing a bug or stuck on a feature, just grab a cup of coffee with me ☕👀. Trust me, between the caffeine and my debugging magic, everything gets sorted out sooner or latte 😎✨.
            </p>
            
            {/* ACTION BUTTONS (The most eye-catching part) */}
            <div className="Hero-action hero-fadein-delay4">
                
                {/* CONTACT ME BUTTON (Primary Gradient Button) */}
                <div className="Contact-me">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink>
                </div>
                
                {/* RESUME BUTTONS (Secondary/Outline Buttons) */}
                <a
                    href="/Reshma_Resume.pdf"
                    className="my-Resume my-Resume-view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Resume
                </a>
                <a
                    href="/Reshma_Resume.pdf"
                    className="my-Resume my-Resume-download"
                    download="Reshma_Resume.pdf"
                >
                    Download Resume
                </a>
            </div>
            
            {/* SCROLL HINT (Removed the "funny" text and added a cleaner hint) */}
            <p className="hero-scroll-hint hero-fadein-delay5">
                Scroll down to see my work and experience 👇
            </p>
            
        </div>
    )
}
export default Hero