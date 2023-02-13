import React from 'react';

import './style.css';
import {Link} from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import {useShowNav} from "../NavigationPc/hooks";

const NavigationPc = () => {

    const userWidth = window.innerWidth;
    const btnViewWidth = 650;

    const showNav = useShowNav();

    return (
        <div className="nav-container">
            {
                userWidth > btnViewWidth ?

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
                    :
                    <div className="nav-container" id="nav-container">
                        <ul className="nav__hidden" id="navMobile">
                            <li className="nav__item">
                                <Link className="active" to="/">About</Link>
                            </li>
                            <li className="nav__item nav__resume">
                                <Link className="active" to="/resume">Resume</Link>
                            </li>
                            <li className="nav__item nav__portfolio">
                                <Link className="active" to="/portfolio">Portfolio</Link>
                            </li>
                        </ul>
                        <button className="nav__btn" id="btnNav" onClick={showNav} type="submit">
                            <MenuOpenIcon/>
                        </button>
                    </div>
            }
        </div>
    );
}

export default NavigationPc;