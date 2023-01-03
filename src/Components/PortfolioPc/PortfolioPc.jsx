import React from 'react';
import {Link} from "react-router-dom";
import imgNeirika from "../img/Neirika.png";
import imgSquare from "../img/Square.png";
import imgTodo from "../img/Todo.png";
import imgSoon from "../img/coming-soon-sign.png";

import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./style.css";
import {Typography} from "@mui/material";

const PortfolioPc = () => {

    const cardRowFirst = [
        {
            key: "neirika",
            link: "https://nikidan.github.io/Neirika/index.html",
            title: "Neirika homepage",
            img: imgNeirika
        },
        {
            key: "cvetOzera",
            link: "https://nikidan.github.io/CvetOzera/index.html",
            title: "Store",
            img: imgSquare
        },
        {
            key: "todo",
            link: "https://heartfelt-bunny-71754e.netlify.app/",
            title: "Todo list",
            img: imgTodo
        },
    ]

    const cardRowSecond = [
        {
            key: "soon1",
            link: "#",
            title: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon2",
            link: "#",
            title: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon3",
            link: "#",
            title: "Coming soon ...",
            img: imgSoon
        },
    ]

    const cardRowThird = [
        {
            key: "soon4",
            link: "#",
            title: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon5",
            link: "#",
            title: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon6",
            link: "#",
            title: "Coming soon ...",
            img: imgSoon
        },
    ]

    return(
        <div className="portfolio__content__main">
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
            <div className="portfolio__content_row1">
                {cardRowFirst.map((item) => (
                    <Card className="portfolio__item portfolio__card" key={item.key} id={item.key}>
                        <CardActionArea href={item.link}
                                        target="_blank"
                                        className="portfolio__card-link"
                                        rel="noopener noreferrer"
                        >
                            <CardMedia className="card__img-container"
                                       component="img"
                                       alt="Neirika homepage"
                                       height="140"
                                       image={item.img}
                            />
                            <CardContent >
                                <Typography component="p" className="card__description">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <div className="portfolio__content_row2">
                {cardRowSecond.map((item) => (
                    <Card className="portfolio__item portfolio__card" key={item.key} id={item.key}>
                        <CardActionArea href={item.link}
                                        target="_blank"
                                        className="portfolio__card-link"
                                        rel="noopener noreferrer"
                        >
                            <CardMedia className="card__img-container"
                                       component="img"
                                       alt="Neirika homepage"
                                       height="140"
                                       image={item.img}
                            />
                            <CardContent >
                                <Typography component="p" className="card__description">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <div className="portfolio__content_row3">
                {cardRowThird.map((item) => (
                    <Card className="portfolio__item portfolio__card" key={item.key} id={item.key}>
                        <CardActionArea href={item.link}
                                        target="_blank"
                                        className="portfolio__card-link"
                                        rel="noopener noreferrer"
                        >
                            <CardMedia className="card__img-container"
                                       component="img"
                                       alt="Neirika homepage"
                                       height="140"
                                       image={item.img}
                            />
                            <CardContent >
                                <Typography component="p" className="card__description">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default PortfolioPc;