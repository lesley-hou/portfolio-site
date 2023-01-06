import React from 'react';
import './Styles/Sidebar.css';
import email from '../Assets/Home/email.png';
import linkedin from '../Assets/Home/linkedin.png';
import spotify from '../Assets/Home/spotify.png';
import github from '../Assets/Home/github.png';

const Sidebar = () => {
    return ( 
        <nav className="sidebar">
            <ul className="socials">
                <li><a href="mailto:lesleyhou28@gmail.com"><img className="email" src={email} width="35px" height="35px"/></a></li>
                <li><a href="https://www.linkedin.com/in/lesleyhou/" target="_blank"><img className="linkedin" src={linkedin} width="35px" height="35px"/></a></li>
                <li><a href="https://github.com/lesley-hou" target="_blank"><img className="github" src={github} width="35px" height="35px"/></a></li>
                <li><a href="https://open.spotify.com/user/lesleyhouu?si=965200d7bcec4f41" target="_blank"><img className="spotify" src={spotify} width="35px" height="35px"/></a></li>
            </ul>
        </nav>
    );
}
 
export default Sidebar;
