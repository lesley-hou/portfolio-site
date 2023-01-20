import React from 'react';
import './Styles/Leadership.css';
import arrow from '../Assets/Projects/diagonal-arrow.png'

const Leadership = () => {
    return ( 
        <div className="leadership-frame">
            <div className="leadership-section">
                <span className="leadership-org">RE(SOURCE) Fashion</span>
                <button className="show-more" onClick={() => window.open('https://resourcefashion.co/')}>↗</button>
                <p className="leadership-role-title">Business Development Intern</p>
                <p className="leadership-description">A modern production supply chain solution for fashion brands. Identified potential 
                    partnerships, clients, and business opportunities, collaborated with cross-functional teams to drive the development 
                    and execution of go-to-market strategies.
                </p>
            </div>
            <div className="horizontal-divider"/>
            <div className="leadership-section">
                <span className="leadership-org">Western Founders Network</span>
                <button className="show-more" onClick={() => window.open('https://www.foundersnetwork.ca/')}>↗</button>
                <p className="leadership-role-title">Vice President of Industry</p>
                <p className="leadership-description">Co-chaired Technology Consulting Competition, Western's largest student-run 
                technology and business organization that facilitates networking and experiential learning opportunities. 
                </p>
            </div>
        </div>
    );
}
 
export default Leadership;
