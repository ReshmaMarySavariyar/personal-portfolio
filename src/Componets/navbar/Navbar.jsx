import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [menu, setMenu] = useState("home"); // Initialize menu state to 'home'
  const [isOpen, setIsOpen] = useState(false); // Toggle menu state

  return (
    // Add sticky class for better look
    <div id="navbar" className="Navbar sticky-navbar"> 
      
      {/* Title / Home Link */}
      <AnchorLink className="anchor-link" offset={0} href="#home" onClick={() => setMenu("home")}>
        <h1 className="nav-title-gradient">Reshma Mary Savariyar</h1>
      </AnchorLink>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsOpen(!isOpen);
        }
      }}>
        {isOpen ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
      </div>

      {/* Navigation Menu */}
      <ul className={`Nav-menu ${isOpen ? "open" : ""}`}>
        {["about", "experience", "skills",'softskills', "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item}`}
              onClick={() => {
                setMenu(item);
                setIsOpen(false); // Close menu on selection
              }}
               onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setMenu(item);
              setIsOpen(false);
              // Programmatically scroll to section
              const section = document.getElementById(item);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
            >
              <p>{item === "about" ? "About Me" : item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            
            {/* Conditional Underline (Styling will be changed in CSS) */}
            {menu === item ? <img src={underline} alt="underline" className="nav-underline-img" /> : null}
          </li>
        ))}
      </ul>

      {/* Connect Button */}
      <div className="Nav-Connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;