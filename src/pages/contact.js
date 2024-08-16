import React from "react";
import githubIcon from '../assets/images/icons/github.svg';
import linkedinIcon from '../assets/images/icons/linkedin.svg';
import rgIcon from '../assets/images/icons/researchgate.svg';
 
const Contact = () => {
    return (
        <main>
            <h1 className="center">Contact me</h1>

            <div className="content-highlight margin-bottom">
                <h2 className="margin-bottom">Find me in these places:</h2>

                <div className="grid">
                    <div className="grid-item">
                        <a href="https://github.com/samuelchardy" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="Github icon" class="social-icon social-icon--large"></img>
                            <h3>GitHub</h3>
                            <p class="large cancel-margin-bottom">@samuelchardy</p>
                        </a>
                    </div>

                    <div className="grid-item">
                        <a href="https://www.linkedin.com/in/samuel-chad-hardy/" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn icon" class="social-icon social-icon--large"></img>
                            <h3>LinkedIn</h3>
                            <p class="large cancel-margin-bottom">samuel-chad-hardy</p>
                        </a>
                    </div>

                    <div className="grid-item">
                        <a href="https://www.researchgate.net/profile/Samuel_Hardy10" target="_blank" rel="noreferrer">
                            <img src={rgIcon} alt="ResearchGate icon" class="social-icon social-icon--large"></img>
                            <h3>Research Gate</h3>
                            <p class="large cancel-margin-bottom">Samuel_Hardy10</p>
                        </a>
                    </div>
                </div>
            </div>
            
            <h3 className="margin-bottom center">Or contact me directly by completing this form:</h3>

            <form action="https://formspree.io/f/mdkndppw" method="POST">
                <div className="form-item">
                    <label for="name">Name:</label>
                    <input type="text" name="name" required></input>
                </div>

                <div className="form-item">
                    <label for="message">Message:</label>
                    <textarea type="text" name="message" rows="10" required></textarea>
                </div>

                <div className="form-item">
                    <label for="email">Email address:</label>
                    <input type="email" name="email" required></input>
                </div>

                <button type="submit">SEND</button>
            </form>
        </main>
    );
};

export default Contact;
