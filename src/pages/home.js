import React from "react";

import profileImage from '../assets/images/profile-image.png';
import emailIcon from '../assets/images/icons/email.svg';
import githubIcon from '../assets/images/icons/github.svg';
import linkedinIcon from '../assets/images/icons/linkedin.svg';
import rgIcon from '../assets/images/icons/researchgate.svg';

const Home = () => {
    return (
        <main>
            <div className="profile-image">
                <img src={profileImage} alt="Portrait photograph of Samuel Hardy" />
                <svg viewBox="0 0 430.8 463.2" width="0" height="0">
                    <clipPath id="blob4" clipPathUnits="objectBoundingBox" transform="scale(0.002508, 0.002296)">
                        <path class="st0" d="M332.3,48.8c32.6,18.1,58.5,49.4,64.7,83.7c6.3,34.3-7.1,71.5-15.8,107.1c-8.6,35.7-12.6,69.7-26,108.4-13.5,38.6-36.5,81.9-68,86.9c-31.4,5-71.5-28.3-117.1-41.8c-45.7-13.6-97.1-7.5-123.9-28.3c-26.7-20.8-28.9-68.5-35-115.4c-6.2-46.8-16.4-92.6-8-138c8.3-45.3,35.3-90,74.7-105s91.3-0.3,136.9,9.6C260.4,25.8,299.7,30.6,332.3,48.8z"/>
                    </clipPath>
                </svg>
            </div>

            <div className="content">
                <h2>Hi, <br></br>I&rsquo;m Sam</h2>
                <h3><i>Data Scientist</i></h3>
                
                <div className="social-icons">
                    <a href="https://github.com/samuelchardy" target="_blank"><img src={githubIcon} alt="Github icon" class="social-icon"></img></a>
                    <a href="https://www.linkedin.com/in/samuel-chad-hardy/" target="_blank"><img src={linkedinIcon} alt="LinkedIn icon" class="social-icon"></img></a>
                    <a href="https://www.researchgate.net/profile/Samuel_Hardy10" target="_blank"><img src={rgIcon} alt="ResearchGate icon" class="social-icon"></img></a>
                    <a href="mailto:samuelchadhardy@gmail.com" target="_blank"><img src={emailIcon} alt="Email icon" class="social-icon"></img></a>
                </div>
            </div>
        </main>
    );
}

export default Home;