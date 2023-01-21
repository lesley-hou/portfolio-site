import React, { useState, useEffect } from 'react';
import './Styles/MobileNavbar.css';
import smile from '../Assets/Home/smile.png'

const MobileNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <nav className="reactive-navbar">
      <div className="navbar-links">
        <ul className="nav-items">
          <li className="nav-pages"><img className="smiley-face" src={smile} width="35px" height="35px"/></li>
          <li className="nav-pages"><a href="/">ABOUT ME</a></li>
          <li className="nav-pages"><a href="/projects">EXPERIENCES</a></li>
          <li className="nav-pages"><a href="/contact">CONTACT ME</a></li>
        </ul>
      </div>
      <a href="#" className="toggle-button" onClick={() => setOpenNavbar(!openNavbar)}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </a>
      <div className="site-name">LESLEY HOU</div>
      {windowWidth <= 1000 && openNavbar && (
        <div className="navbar-links-active">
          <ul className="nav-items">
            <li className="nav-pages"><a href="/">ABOUT ME</a></li>
            <li className="nav-pages"><a href="/projects">PROJECTS</a></li>
            <li className="nav-pages"><a href="/contact">CONTACT ME</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;
