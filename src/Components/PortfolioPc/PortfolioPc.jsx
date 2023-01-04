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
import Grid from '@mui/material/Unstable_Grid2';

import "./style.css";
import {Typography} from "@mui/material";

const PortfolioPc = () => {

    const card = [
        {
            key: "neirika",
            link: "https://nikidan.github.io/Neirika/index.html",
            title: "Neirika",
            description: "Responsive and adaptive pixel perfect layout without using JavaScript",
            img: imgNeirika
        },
        {
            key: "cvetOzera",
            link: "https://nikidan.github.io/CvetOzera/index.html",
            title: "Store",
            description: "Static pixel perfect layout without using JavaScript",
            img: imgSquare
        },
        {
            key: "todo",
            link: "https://heartfelt-bunny-71754e.netlify.app/",
            title: "Todo list",
            description: "React Todo list with localStorage, filters, animations and adaptive layout",
            img: imgTodo
        },
        {
            key: "soon1",
            link: " ",
            title: "Coming soon ...",
            description: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon2",
            link: " ",
            title: "Coming soon ...",
            description: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon3",
            link: " ",
            title: "Coming soon ...",
            description: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon4",
            link: " ",
            title: "Coming soon ...",
            description: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon5",
            link: " ",
            title: "Coming soon ...",
            description: "Coming soon ...",
            img: imgSoon
        },
        {
            key: "soon6",
            link: " ",
            title: "Coming soon ...",
            description: "Coming soon ...",
            img: imgSoon
        }
    ];

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
            <Grid container spacing={{ xs: 2, md: 2 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  className="portfolio__content">
                {card.map((item) => (
                    <Grid xs={2} sm={4} md={4} key={item.key}>
                    <Card className="portfolio__card" key={item.key} id={item.key}>
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
                                <Typography gutterBottom variant="h5" component="div" className="card__title">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="card__description">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PortfolioPc;