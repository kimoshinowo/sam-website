import { useState } from 'react';
import '../styles/Hamburger.css';
import '../styles/Nav.css';

function Hamburger({ isOpen }) {
    return (
        <div className="hamburger">
            <div className={"burger " + (isOpen ? 'burger1-open' : '')}></div>
            <div className={"burger " + (isOpen ? 'burger2-open' : '')}></div>
            <div className={"burger " + (isOpen ? 'burger3-open' : '')}></div>
        </div>
    );
}

const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="nav-wrap">
            <div onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            
            <ul className={"nav nav-open-" + hamburgerOpen}>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Nav;
