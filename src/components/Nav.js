import { useState } from 'react';
import '../styles/Nav.css';
import Hamburger from './Hamburger';

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
