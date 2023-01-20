import React from 'react';
import './Styles/Projects.css';
import Featured from '../Components/Featured';
import OtherProjects from '../Components/OtherProjects';

const Projects = () => {
    return ( 
        <div className="Projects">
            <div className="featured-header-container">
                <h className="featured-header">FEATURED</h>
                <div className="featured-component-container-parent">
                  <div className="featured-component-container">
                      <Featured />
                      <OtherProjects/>
                  </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;
