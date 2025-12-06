import './Hero.css'
import Reshma_pic from '../../assets/Reshma.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'



function Hero(){
    return(
        <div id='home' className='Hero'>
            <img src={Reshma_pic} alt="Profile_Pic" className='Profil-pic' />
            <h1 ><span>I'm Reshma Mary Savariyar,</span> I completed my Bachelor of Engineering in ECE at PSNA college of Engineering and Technology </h1>
            <p >I have a strong interest in front-end development, especially working with React.I’ve been learning and building projects using React to sharpen my skills. I really enjoy turning UI designs into clean, interactive web experiences.</p>
            <div className="Hero-action">
                <div className="Contact-me"><AnchorLink className='anchor-link ' offset={50} href='#contact'>Contact Me</AnchorLink></div>    
            
                {/* <a href="/Swadeshwar_K_Resume.pdf" className="my-Resume" target="_blank" rel="noopener noreferrer">  My Resume</a> */}
                <a href={`/Swadeshwar_K_Resume.pdf?v=${new Date().getTime()}`} className="my-Resume" target="_blank" rel="noopener noreferrer">
  My Resume
</a>

            </div>
        </div>
    )
}
export default Hero