import React from 'react'
import './Footer.css'
import user from '../../assets/user_icon.svg'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Added a wrapper div for the gradient border effect
    <div className="footer-wrapper"> 
      <div id='footer' className="footer">
        
        {/* --- FOOTER TOP: CORE PHILOSOPHY --- */}
        <div className="footer-top">
          <div className="footer-top-left">
            <h1 className="footer-title">Reshma Mary Savariyar</h1>
            
            {/* ENHANCED CONTENT HERE */}
            <p className="footer-philosophy-text">
              Beyond technical expertise, what truly drives me is contributing meaningfully to the **growth of the organization**. I strongly believe that by focusing on collective success, my career naturally grows alongside it. This philosophy pushes me to think **innovatively**, look for opportunities to **reduce costs**, and find smarter ways to solve problems.
              
              <br /><br />
              I approach challenges not only with technical IQ, but also with **Emotional Intelligence (EQ)** and **Adaptability (AQ)**—understanding users, empathizing with teammates, and adjusting to change effectively. For me, collaboration, adaptability, and an innovative mindset are essential for driving **sustainable, long-term impact**.
            </p>

            {/* Achievements Section */}
            <div className="footer-achievements">
              <strong>Key Contributions:</strong>
              <ul>
                <li>Developed scalable React applications for enterprise clients.</li>
                <li>Improved performance and accessibility (WCAG) across multiple projects.</li>
                <li>Built custom Figma plugins and actively contributed to open source initiatives.</li>
              </ul>
            </div>
            
          </div>
        </div>

        <div className="footer-divider-glow"></div> {/* New element for the gradient divider */}
        
        {/* --- FOOTER BOTTOM: COPYRIGHT & CONNECT --- */}
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            Portfolio created by Reshma Mary Savariyar &copy; {currentYear}
          </p>
          
          <div className="footer-bottom-right">
            <p className="footer-connect">
              {/* <img src={user} alt="user_icon" style={{verticalAlign: 'middle', marginRight: '8px', filter: 'invert(1)'}} /> */}
              Connect with me:&nbsp;
              <a href="mailto:reshmamary.savariyar@gmail.com" target="_blank" rel="noopener noreferrer" className="connect-link">Gmail</a>
              &nbsp;|&nbsp;
              <a href="https://www.linkedin.com/in/reshma-mary-savariyar-62b761344/" target="_blank" rel="noopener noreferrer" className="connect-link">LinkedIn</a>
            </p>
            <p className="footer-thanks">Thank you for visiting! I look forward to connecting. 😊</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer