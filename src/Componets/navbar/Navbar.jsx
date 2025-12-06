import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import { GiHamburgerMenu } from "react-icons/gi"; // You need to install react-icons
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [menu, setMenu] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Toggle menu state

  return (
    <div id="navbar" className="Navbar">
      <h1>Reshma Mary Savariyar </h1>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
      </div>

      <ul className={`Nav-menu ${isOpen ? "open" : ""}`}>
        {["about", "experience", "skills", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item}`}
              onClick={() => {
                setMenu(item);
                setIsOpen(false); // Close menu on selection
              }}
            >
              <p>{item === "about" ? "About Me" : item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item ? <img src={underline} alt="" /> : null}
          </li>
        ))}
      </ul>

      <div className="Nav-Connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
