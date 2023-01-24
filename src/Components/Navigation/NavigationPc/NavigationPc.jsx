import React from 'react';

import './style.css';
import { Link } from "react-router-dom";

const NavigationPc = () => {

    return(
        <div className="nav-container">
            <ul className="nav">
                <li className="nav__item">
                    <Link className="active" to="/">About</Link>
                </li>
                <li className="nav__item">
                    <Link className="active" to="/resume">Resume</Link>
                </li>
                <li className="nav__item">
                    <Link className="active" to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationPc;