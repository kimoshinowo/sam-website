import React from "react";
import sam from '../assets/images/sam.jpg';
import lancsLogo from '../assets/images/lancaster-uni-logo.png';
import myndspanLogo from '../assets/images/myndspan.jpg';
 
const About = () => {
    return (
        <main>
            <div className="intro">
                <div className="content">
                    <h1>Who am I?</h1>

                    <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="profile-image">
                    <img src={sam} alt="Samuel at Malham cove" ></img>
                    <svg viewBox="0 0 430.8 463.2" width="0" height="0">
                        <clipPath id="blob" clipPathUnits="objectBoundingBox" transform="scale(0.002508, 0.002296)">
                            <path class="st0" d="M332.3,48.8c32.6,18.1,58.5,49.4,64.7,83.7c6.3,34.3-7.1,71.5-15.8,107.1c-8.6,35.7-12.6,69.7-26,108.4-13.5,38.6-36.5,81.9-68,86.9c-31.4,5-71.5-28.3-117.1-41.8c-45.7-13.6-97.1-7.5-123.9-28.3c-26.7-20.8-28.9-68.5-35-115.4c-6.2-46.8-16.4-92.6-8-138c8.3-45.3,35.3-90,74.7-105s91.3-0.3,136.9,9.6C260.4,25.8,299.7,30.6,332.3,48.8z"/>
                        </clipPath>
                    </svg>
                </div>
            </div>

            <div className="content-highlight">
                <div className="image-text">
                    <span>
                        <h2>Education</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </span>
                
                    <img src={lancsLogo} alt="Lancaster University logo" ></img>
                </div>

                <div className="image-text">
                    <img className="myndspan" src={myndspanLogo} alt="MYndspan logo" ></img>

                    <span>
                        <h2>Career</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default About;