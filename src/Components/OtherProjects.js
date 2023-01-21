import React from 'react';
import './Styles/OtherProjects.css';
import wai from '../Assets/Projects/western-ai.png'
import workmate from '../Assets/Projects/workmate.png'
import lock from '../Assets/Projects/lock.png'

const OtherProjects = () => {

    return ( 
        <div className="projects-frame">
            <div className="project-div">
                <img src={workmate} width="200"></img>
                <p className="project-description-short">Unleash your potential.</p>
                <div className="project-labels-container">
                    <span className="project-label">iOS</span>
                    <span className="project-label">React Native</span>
                    <span className="project-label">Project</span>
                    <span className="project-label">App Development</span>
                </div>
                <p className="project-description-long">An app that matches you with like-minded partners to keep you motivated, accountable, and on track for success. For SheHacks+ 7, 2023. </p>
                <button className="project-show-detail-button">Details soon ‎<img src={lock} width="18"/></button>
            </div>
            <div className="vertical-divider"></div>
            <div className="project-div">
                <p className="project-title">IVEY LEARN PLUS</p>
                <p className="project-description-short">It's like Learn, but better.</p>
                <div className="project-labels-container">
                    <span className="project-label">Chrome Extension</span>
                    <span className="project-label">JavaScript</span>
                    <span className="project-label">Project</span>
                </div>
                <p className="project-description-long">Extended functionality for Learn including navigation and UI improvements to Room Bookings page. See it in action (soon).</p>
                <button className="project-show-detail-button">Details soon ‎<img src={lock} width="18"/></button>
            </div>
            <div className="vertical-divider"></div>
            <div className="project-div">
                <div className="project-title-and-logo">
                    <img src={wai} width="35" height="28"/>
                    <p className="project-title">‎ Western AI</p>
                </div>
                <p className="project-description-short">Team birds!</p>
                <div className="project-labels-container">
                    <span className="project-label">Python</span>
                    <span className="project-label">Tensorflow</span>
                    <span className="project-label">Project</span>
                    <span className="project-label">Web Application</span>
                </div>
                <p className="project-description-long">An web application that identifies bird species from an image or a live video feed. For Western AI’s Projects team.</p>
                <button className="project-show-detail-button">Details soon ‎<img src={lock} width="18"/></button>
            </div>
            
        </div>
    );
}
 
export default OtherProjects;
