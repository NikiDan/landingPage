import React from 'react';
import {Link} from "react-router-dom";
import imgNeirika from "../img/Neirika.png";
import imgSquare from "../img/Square.png";
import imgTodo from "../img/Todo.png";

import "./style.css";

const PortfolioPc = () => {
    return(
        <div className="content portfolio__content__main">
            {/*<h1 className="portfolio__header__text">Hi ! Here you can look at my portfolio projects</h1>*/}
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav__item">
                        <Link className="active" to="/">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="active" to="/">Resume</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="active">Portfolio</Link>
                    </li>
                </ul>
            </div>
            <div className="portfolio__content">
                <div className="portfolio__item neirika portfolio__card">
                    <a href="https://nikidan.github.io/Neirika/index.html"
                       target="_blank"
                       className="portfolio__card-link"
                       rel="noopener noreferrer"
                    >
                        <div className="card__img-container">
                            <img src={imgNeirika} alt="Project" className="card__img"/>
                        </div>
                    </a>
                    <p className="card__description">Some text</p>
                </div>
                <div className="portfolio__item square portfolio__card">
                    <a href="https://nikidan.github.io/CvetOzera/index.html"
                       target="_blank"
                       className="portfolio__card-link"
                       rel="noopener noreferrer"
                    >
                        <div className="card__img-container">
                            <img src={imgSquare} alt="Project" className="card__img"/>
                        </div>
                    </a>
                    <p className="card__description">Some text</p>
                </div>
                <div className="portfolio__item todo portfolio__card">
                    <a href="https://heartfelt-bunny-71754e.netlify.app/"
                       target="_blank"
                       className="portfolio__card-link"
                       rel="noopener noreferrer"
                    >
                        <div className="card__img-container">
                            <img src={imgTodo} alt="Project" className="card__img"/>
                        </div>
                    </a>
                    <p className="card__description">Some text</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPc;