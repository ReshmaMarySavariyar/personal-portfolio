import './Hero.css'
import Reshma_pic from '../../assets/Reshma.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    return (
        <div id='home' className='Hero hero-fadein'>
            <img src={Reshma_pic} alt="Profile_Pic" className='Profil-pic hero-img-animate1' />
            <h2 className="hero-title hero-slidein">Front-End Developer | React & JavaScript Specialist</h2>
            <p className="hero-fadein-delay1">
                Hi! I’m a React.js & Next.js front-end developer who converts coffee ☕ into components 🧩 and transforms weird UI glitches into smooth, satisfying animations 🎨✨. After 3+ years of building high-performance apps, I’ve learned one thing: code behaves better when you compliment it 😌💻.
            </p>
            <p className="hero-fadein-delay2">  Clean UI? Done. ✅ |  Fast load times? Done. ⚡|  Bugs? Already running away 🏃‍♀️💨👾.</p>
            <p className="hero-fadein-delay3">
                And hey—if you’re facing a bug or stuck on a feature, just grab a cup of coffee with me ☕👀.
                Trust me, between the caffeine and my debugging magic, everything gets sorted out sooner or latte 😎✨.
            </p>
            <p className="hero-fadein-delay4">
                Scroll down… trust me, this page gets funnier 🤪, smarter 🧠, and maybe even more caffeinated ☕🚀. 😎
            </p>
            <div className="Hero-action hero-fadein-delay5">
                <div className="Contact-me">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink>
                </div>
                <a
                    href="/Reshma_Resume.pdf"
                    className="my-Resume"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Resume
                </a>
                <a
                    href="/Reshma_Resume.pdf"
                    className="my-Resume"
                    download="Reshma_Resume.pdf"
                >
                    Download Resume
                </a>
            </div>
        </div>
    )
}
export default Hero