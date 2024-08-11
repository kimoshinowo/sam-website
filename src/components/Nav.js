import { useState } from 'react';
import '../styles/Hamburger.css';
import '../styles/Nav.css';
import { NavLink } from "react-router-dom";

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
        <header className="masthead">
            <div className="masthead-name">
                <h1>Samuel</h1>
            </div>

            <nav className="nav-wrap">
                <div onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                
                <ul className={"nav nav-open-" + hamburgerOpen}>
                    <li>
                        <NavLink className={({ isActive }) => isActive? "nav-item-current": ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive? "nav-item-current": ""} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive? "nav-item-current": ""} to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive? "nav-item-current": ""} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
