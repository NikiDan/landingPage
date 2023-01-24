import React from 'react';

import './style.css';
import InfBlockPc from "../../InfBlock/InfBlockPc";
import InfBlockMobile from "../../InfBlock/InfBlockMobile";
import ResumePc from "../../Resume/ResumePc";
import ResumeMobile from "../../Resume/ResumeMobile";


const Resume = () => {

    const pcMinWidth = 1262;
    const pcWidth = window.innerWidth;

    return(
        <div className="App">
            { pcWidth >= pcMinWidth ?
                <div className="pcVersion">
                    <InfBlockPc/>
                    <ResumePc/>
                </div>
                :
                <div className="mobileVersion">
                    <InfBlockMobile/>
                    <ResumeMobile/>
                </div>
            }
        </div>
    );
}

export default  Resume ;