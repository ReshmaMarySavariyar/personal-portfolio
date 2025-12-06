import React from 'react'
import './Footer.css'
import user from '../../assets/user_icon.svg'

function Footer() {
  return (
    <div>
      <div id='footer' className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <h1>Reshma Mary Savariyar</h1>
            <p>
              I have a strong interest in front-end development, especially working with React.<br />
              <b>Declaration:</b> All information and achievements listed in this portfolio are true to the best of my knowledge.<br />
              <b>Achievements:</b>
              <ul>
                <li>Developed scalable React applications for enterprise clients.</li>
                <li>Improved performance and accessibility in multiple projects.</li>
                <li>Built custom Figma plugins and contributed to open source.</li>
              </ul>
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            Portfolio created by Reshma Mary Savariyar &mdash; {new Date().getFullYear()}
          </p>
          <div className="footer-bottom-right">
            <p>
              <span className="footer-connect">
                <img src={user} alt="user_icon" style={{verticalAlign: 'middle', marginRight: '8px'}} />
                Connect with me:&nbsp;
                <a href="mailto:reshmamary.savariyar@gmail.com" target="_blank">Gmail</a>
                &nbsp;|&nbsp;
                <a href="https://www.linkedin.com/in/reshma-mary-savariyar-62b761344/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </span>
            </p>
            <p>Thank you for visiting!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer