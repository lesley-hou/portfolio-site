import React from 'react';
import './Styles/Navbar.css';
import smile from '../Assets/Home/smile.png'

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <ul className="nav_items">
                <img className="smiley" src={smile} width="35px" height="35px"/>
                <li className="nav_pages"><a href="/">ABOUT ME</a></li>
                <li className="nav_pages"><a href="/projects">EXPERIENCES</a></li>
                <li className="nav_pages"><a href="/contact">CONTACT ME</a></li>
            </ul>
            <span className="site_name">LESLEY HOU</span>
        </nav>
    );
}
 
export default Navbar;
