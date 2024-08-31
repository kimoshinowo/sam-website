import React from "react";
import brushIcon from '../assets/images/icons/skills/brush.svg';
import graphIcon from '../assets/images/icons/skills/graph.svg';
import areaChartIcon from '../assets/images/icons/skills/area-chart.svg';
import dashboardIcon from '../assets/images/icons/skills/dashboard.svg';
import dataAnalyticsIcon from '../assets/images/icons/skills/data-analytics.svg';
 
const Skills = () => {
    return (
        <main>
            <h1 className="margin-bottom-large center">What are my skills?</h1>

            <div className="content-highlight content-highlight--offset image-text">
                <span>
                    <h2>Cleaning</h2>
                    
                    <p>Almost all data usually needs cleaning and/or formatting prior to analysis, this is necessary as a quality assurance step and ensuring any requirement of analysis algorithms are met.</p>

                    <p>This process is comprised of the handling of missing values (either imputation or deletion), scaling (standardisation or normalisation), preprocessing (calculation of additional features from the existing data), and formatting.</p>
                </span>

                <img src={brushIcon} alt="Sweeping brush icon" ></img>
            </div>

            <div className="content-highlight content-highlight--dark content-highlight--offset image-text">
                <img src={dataAnalyticsIcon} alt="Graphs with magnifying glass icon" ></img>

                <span>
                    <h2>Exploratory Analysis</h2>

                    <p>Exploratory analysis is performed in order to understand the relationships between variables in the data, this involves assessing both discrete and continuous associations.</p>

                    <p>Thoroughly understanding the associations in the data is a prerequisite to maximising the practical application and depth of insight achievable in all following steps.</p>
                </span>
            </div>

            <div className="content-highlight content-highlight--offset image-text">
                <span>
                    <h2>Clustering</h2>
                    
                    <p>Clustering is used to find naturally occurring groups within the data, allowing further analysis to assess the reasoning behind the differences between groups.</p>

                    <p>Examples could include finding profiles of purchasing habits, detecting anomalous data points, and grouping search results.</p>
                </span>

                <img src={areaChartIcon} alt="Area graph icon" ></img>
            </div>

            <div className="content-highlight content-highlight--dark content-highlight--offset image-text">
                <img src={graphIcon} alt="Bar graph icon" ></img>

                <span>
                    <h2>Modelling</h2>

                    <p>In some situations establishing the trends between a set of variables and a target variable can facilitate prediction of the target variable in future or otherwise unavailable or unseen data sets.</p>

                    <p>Some examples of modelling are predicting future revenue growth, employee turnover, or business responses to potential market conditions.</p>
                </span>
            </div>

            <div className="content-highlight content-highlight--offset image-text">
                <span>
                    <h2>Visualisation</h2>
                    
                    <p>Presentation of analysis results is paramount to conveying the findings in a digestible manner, which informs and provokes further thought.</p>

                    <p>Both slide decks and data plots can be used in tandem to this effect, additionally the use of dynamic plots can allow exploration and greater depth of understanding when necessary.</p>
                </span>

                <img src={dashboardIcon} alt="Monitor icon with report on" ></img>
            </div>
        </main>
    );
};

export default Skills;