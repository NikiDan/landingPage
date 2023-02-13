import React from 'react';

import './style.css';
import InfBlockPc from "../../InfBlock/InfBlockPc";
import PortfolioPc from "../PortfolioPc";

const Portfolio = () => {

    return (
        <div className="App">
            <div className="appComponents">
                <InfBlockPc/>
                <PortfolioPc/>
            </div>
        </div>
    );
}

export default Portfolio;