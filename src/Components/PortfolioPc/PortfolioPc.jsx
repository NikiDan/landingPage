import React from 'react';
import {Link} from "react-router-dom";
import imgNeirika from "../img/Neirika.png";
import imgSquare from "../img/Square.png";
import imgTodo from "../img/Todo.png";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./style.css";
import {Typography} from "@mui/material";

const PortfolioPc = () => {
    return(
        <div className="content portfolio__content__main">
            <h1 className="portfolio__header__text">My projects</h1>
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
                <Card className="portfolio__item neirika portfolio__card">
                    <CardMedia className="card__img-container"
                               component="img"
                               alt="Neirika homepage"
                               height="140"
                               image={imgNeirika}
                    />
                    <CardContent >
                        <Typography component="p" className="card__description">
                            Neirika homepage
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <a href="https://nikidan.github.io/Neirika/index.html"
                       target="_blank"
                       className="portfolio__card-link"
                       rel="noopener noreferrer"
                    >
                        View
                    </a>
                    </CardActions>
                </Card>
                <Card className="portfolio__item square portfolio__card">
                    <CardMedia className="card__img-container"
                               component="img"
                               alt="Store"
                               height="140"
                               image={imgSquare}
                    />
                    <CardContent>
                        <Typography component="p" className="card__description">
                            Store
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <a href="https://nikidan.github.io/CvetOzera/index.html"
                       target="_blank"
                       className="portfolio__card-link"
                       rel="noopener noreferrer"
                    >
                        View
                    </a>
                    </CardActions>
                </Card>
                <Card className="portfolio__item todo portfolio__card">
                    <CardMedia className="card__img-container"
                               component="img"
                               alt="Todo list"
                               height="140"
                               image={imgTodo}
                    />
                    <CardContent>
                        <Typography component="p" className="card__description">
                            Some text
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://heartfelt-bunny-71754e.netlify.app/"
                           target="_blank"
                           className="portfolio__card-link"
                           rel="noopener noreferrer"
                        >
                            View
                        </a>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default PortfolioPc;