import React, {useEffect} from "react";
import Typewriter from "typewriter-effect";
import './Styles/About.css';
import avatar from '../Assets/Home/avatar.png'

const About = () => {
    return ( 
        <div className="About">
            <div className="intro">
                <div className="intro-left">
                    <h1 className="title">Hi, I'm Lesley</h1>
                    <span className="about-description">
                        <Typewriter
                        options={{autoStart: true,
                                loop: true,
                                delay: 90,
                                strings: [
                                    "I'm a full-time student",
                                    "I'm a software enthusiast",
                                    "I'm an art lover"
                                ]
                            }}
                        />
                    </span>
                </div>
                <img className="avatar" src={avatar}/>
                <div className="description-and-buttons">
                    <div className="about-text">
                        <p>Nice to meet you! I'm a student at Western University and Ivey Business School with a background in <strong>software development</strong> and <strong>business</strong>.</p>
                        <p>I am always seeking out new opportunities to learn and grow, and am excited to use my unique blend of technical and business knowledge to build projects with impact. </p>
                    </div>
                    <div className="buttons">
                        <button className="about-button" onClick={() => window.open('https://drive.google.com/file/d/1FZAyLdRwIgW3dREEhYGLiqKtDEya8CAP/view?usp=sharing')}>RESUME</button>
                        <button className="about-button" onClick={() => window.location.href = '/contact'}>LET'S CHAT!</button>
                    </div>  
                </div>
            </div>
        </div>
    );
}
 
export default About;
