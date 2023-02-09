import React from 'react';

import './style.css';
import InfBlockPc from "../../InfBlock/InfBlockPc";
import PortfolioPc from "../PortfolioPc";
import InfBlockMobile from "../../InfBlock/InfBlockMobile";
import PortfolioMobile from "../PortfolioMobile";

const Portfolio = () => {

    const pcMinWidth = 1262;
    const pcWidth = window.innerWidth;

    return (
        <div className="App">
            {pcWidth >= pcMinWidth ?
                <div className="pcVersion">
                    <InfBlockPc/>
                    <PortfolioPc/>
                </div>
                :
                <div className="mobileVersion">
                    <InfBlockMobile/>
                    <PortfolioMobile/>
                </div>
            }
        </div>
    );
}

export default Portfolio;