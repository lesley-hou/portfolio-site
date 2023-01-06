import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Styles/MobileNavbar.css';
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNavbar = () => {
    const [showNav, setShowNav] = useState(false)

    let nav 
    let navMask

    if (showNav) {
        nav = 
        <div className="nav">
            <Link onClick={() => setShowNav(false)}className="mobile-navbar-link" to="/">ABOUT ME</Link>
            <Link onClick={() => setShowNav(false)} className="mobile-navbar-link"  to="/projects">EXPERIENCES</Link>
            <Link onClick={() => setShowNav(false)} className="mobile-navbar-link"  to="/contact">CONTACT ME</Link>
        </div>

        navMask =
        <div className="nav-mask" onClick={() => setShowNav(false)}></div>
    }

    return ( 
        <div className="mobile-navbar">
            <div className="site-title">LESLEY HOU</div>
            <FontAwesomeIcon className="show-menu-button"
                icon="fas fa-bars"
                onClick = {() => setShowNav(!showNav)}
            />
            {navMask}
            {nav}

        </div>
    );
}
 
export default MobileNavbar;
