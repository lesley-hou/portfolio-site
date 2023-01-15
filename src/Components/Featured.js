import React, { useState } from 'react';
import './Styles/Featured.css';
import minmize from '../Assets/Contact/minimize.png'
import fullscreen from '../Assets/Contact/fullscreen.png'
import close from '../Assets/Contact/close.png'
import planet from '../Assets/Projects/planet.png'

const Featured = () => {
    const [org, setOrg] = useState('');

    const handleClick = (org) => {
        setOrg(org);
    };

    return ( 
        <div className="featured">
            <div className="featured-section">
                <span className="featured-left">
                    <div className="featured-experience">
                        <div className="experience-number">01</div>
                        <div>
                            <p className="org-name">Greencube Analytics</p>
                            <p className="role">Backend Developer Intern</p>
                        </div>
                        <button className="show-more" onClick={() => handleClick("GC")}>↗</button>
                    </div>
                    <div className="horizontal_divider" />
                    <div className="featured-experience">
                        <div className="experience-number">02</div>
                        <div>
                            <p className="org-name">CS Undergraduate Society</p>
                            <p className="role">Web Developer</p>
                        </div>
                        <button className="show-more" onClick={() => handleClick("CSUS")}>↗</button>
                    </div>

                    <div className="horizontal_divider" />
                    <div className="featured-experience">
                        <div className="experience-number">03</div>
                        <div>
                            <p className="org-name">Hack Western</p>
                            <p className="role">Director of Logistics</p>
                        </div>
                        <button className="show-more" onClick={() => handleClick("HW")}>↗</button>
                    </div>
                </span>
                <span className="featured-right">
                    <div className="windows-bar">
                        <label className="experience-details">Experience Details</label>
                        <div className="browser_buttons">
                            <img className="browser_button" src={minmize} width="15px" height="12px"/>
                            <img className="browser_button" src={fullscreen} width="12px" height="12px"/>
                            <img className="browser_button" src={close} width="12px" height="12px"/>
                        </div>
                    </div>
                    {org === "GC" && (
                        <div className="detailed-company">
                            <div className="detailed-line">
                                <label className="detail-label">ROLE</label>
                                <span className="detail-role-info"><span className="role-point">
                                    Backend Developer Intern
                                    </span></span>
                            </div>
                            <div className="horizontal_divider" />
                            <div className="detailed-line">
                                <label className="detail-label">DATE</label>
                                <span className="detail-role-info"><span className="date-point">
                                    Summer 2022
                                    </span></span>
                            </div>
                            <div className="horizontal_divider" />
                            <div className="tldr-line">
                                <label className="detail-label">TLDR</label>
                                <div className="detail-role-info">
                                    <div className="tldr-point">Designed and implemented RESTful APIs using Python-Flask and SQLAlchemy for <a className="link-to-org" href="https://www.greencube.ai/" target="_blank">Greencube</a></div>
                                    <br></br>
                                    <div className="tldr-point">Developed web crawler using Python libraries such as BeautifulSoup</div>
                                </div>
                            </div>
                        </div>
                    )}
                    {org === "CSUS" && (
                        <div className="detailed-company">
                        <div className="detailed-line">
                            <label className="detail-label">ROLE</label>
                            <span className="detail-role-info"><span className="role-point">
                                Web Developer
                                </span></span>
                        </div>
                        <div className="horizontal_divider" />
                        <div className="detailed-line">
                            <label className="detail-label">DATE</label>
                            <span className="detail-role-info"><span className="date-point">
                                Oct 2022 to present
                                </span></span>
                        </div>
                        <div className="horizontal_divider" />
                        <div className="tldr-line">
                            <label className="detail-label">TLDR</label>
                            <div className="detail-role-info">
                                <div className="tldr-point">Designed and implemented website updates using Javascript, HTML/CSS, and React.js</div>
                                <br></br>
                                <div className="tldr-point">Developed and maintained comprehensive documentation for the website and development processes</div>
                            </div>
                        </div>
                    </div>
                    )}
                    {org === "HW" && (
                        <div className="detailed-company">
                        <div className="detailed-line">
                            <label className="detail-label">ROLE</label>
                            <span className="detail-role-info"><span className="role-point">
                                Director of Logistics
                                </span></span>
                        </div>
                        <div className="horizontal_divider" />
                        <div className="detailed-line">
                            <label className="detail-label">DATE</label>
                            <span className="detail-role-info"><span className="date-point">
                                Apr 2021 to present
                                </span></span>
                        </div>
                        <div className="horizontal_divider" />
                        <div className="tldr-line">
                            <label className="detail-label">TLDR</label>
                            <div className="detail-role-info">
                                <div className="tldr-point">Liaised with potential sponsors and acquired partnerships through corporate outreach</div>
                                <br></br>
                                <div className="tldr-point">To learn more about Hack Western, visit our <a className="link-to-org" href="https://www.hackwestern.com/" target="_blank">live site</a>!</div>
                            </div>
                        </div>
                    </div>
                    )}
                    {org !== "GC" && org !== "HW" && org !== "CSUS" && (
                    <div className="select-org-for-details">
                        <div className="select-org">SELECT &nbsp;↗&nbsp; TO SEE <br></br> MORE DETAILS</div>
                        <img className="select-org-planet" src={planet} width="160vw"/>
                    </div>
                    )}
                </span>
            </div>
        </div>
    );
}
 
export default Featured;
