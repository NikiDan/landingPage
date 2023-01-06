import React from 'react';

import NavigationMobile from "../NavigationMobile";
import card from "../Portfolio/CardStore/cardStore";
import "./style.css"

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import {CardActionArea, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const PortfolioMobile = () => {
    return(
        <div className="content">
            <h1 className="portfolio__header__text">My projects</h1>
            <NavigationMobile/>
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

export default PortfolioMobile;