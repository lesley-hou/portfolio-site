import React from 'react';
import './Styles/Projects.css';
import Featured from '../Components/Featured';
import OtherProjects from '../Components/OtherProjects';
import Leadership from '../Components/Leadership';

const Projects = () => {
    return ( 
        <div className="Projects">
            <div className="section-header-container">
                <span className="section-header">FEATURED</span>
                <div className="section-component-container-parent">
                  <div className="section-component-container">
                      <Featured />
                  </div>
                </div>
            </div>
            <div className="section-header-container">
                <span className="section-header">PROJECTS</span>
                <div className="section-component-container-parent">
                  <div className="section-component-container">
                      <OtherProjects />
                  </div>
                </div>
            </div>
            <div className="section-header-container">
                <span className="section-header">LEADERSHIP</span>
                <div className="section-component-container-parent">
                  <div className="section-component-container">
                      <Leadership />
                  </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;
