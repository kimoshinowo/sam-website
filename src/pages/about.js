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

                    <p className="large">A professional data scientist living in West Yorkshire, with experience in personalised analysis, engaging with stakeholders, and managing projects. My skills include data cleaning, exploratory analysis, modelling, clustering, and predictive analysis, with the effect of uncovering relationships and trends which provide actionable insights with real world impact.</p>
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

                        <p>I studied at Lancaster University from 2017-2021, achieving first class honours in BSc Computer Science, and distinction in MSc Data Science. During both these courses I explored projects with heavy machine learning and artificial intelligence components, which provided a solid foundation for the data driven analysis I now provide.</p>
                        
                        <p>During my time at university I was asked to provide a talk to the academics and students of the Data Science Institute regarding my undergraduate dissertation. Additionally, after the first year of my undergraduate studies I received a letter of commendation from the school of computing and communications as recognition for outstanding coursework and exam results. Following this I was able to work for the university as a teaching assistant, helping students with programming, mathematics, and logic in laboratory and seminar sessions.</p>
                    </span>
                
                    <img src={lancsLogo} alt="Lancaster University logo" ></img>
                </div>

                <div className="image-text">
                    <img className="myndspan" src={myndspanLogo} alt="MYndspan logo" ></img>

                    <span>
                        <h2>Career</h2>

                        <p>After leaving university I joined a small neuro-technology startup, where I have been fortunate to work with leaders in both industry and academia. My focus has been utilising brain data to produce data-driven insights for individuals looking to understand more about their brain activity, including machine learning to predict an individual's age using their brain activity, and measures of "brain stability" between multiple recordings of brain activity. An academic paper detailing the team's work on brain age prediction was published in Imaging Neuroscience.</p>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default About;