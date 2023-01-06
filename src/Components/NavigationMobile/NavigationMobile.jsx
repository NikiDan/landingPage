import React from "react";

import "./style.css";
import {Link} from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {useShowNav} from "../ContentMobile/hooks";

const NavigationMobile = () => {

    const userWidth = window.innerWidth;
    const btnViewWidth = 650;

    const showNav = useShowNav();

    return(
        <div>
            {userWidth > btnViewWidth ?
                <div className="nav-container" id="nav-container">
                    <ul className="nav" id="nav">
                        <li className="nav__item">
                            <Link className="active" to="/">About</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="active" to="/"> Resume</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="active" to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                    <button className="nav__btn" id="btnNav" onClick={showNav} type="submit">
                        <MenuOpenIcon/>
                    </button>
                </div>
                :
                <div className="nav-container" id="nav-container">
                    <ul className="nav__hidden" id="nav">
                        <li className="nav__item">
                            <Link className="active" to="/">About</Link>
                        </li>
                        <li className="nav__item nav__resume">
                            <Link className="active" to="/"> Resume</Link>
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

export default NavigationMobile;