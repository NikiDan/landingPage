import React from 'react';

import "./style.css";
import ystal from '../../img/ya-sdelyal_111857687_orig_.png';
import NavigationMobile from "../../Navigation/NavigationMobile";

const ResumeMobile = () => {

    return (
        <div className="content">
            <NavigationMobile/>
            <div className="tired">
                <img src={ystal} alt="Nikita Danilov"/>
            </div>
        </div>
    )
}

export default ResumeMobile;