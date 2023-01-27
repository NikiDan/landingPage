import React from 'react';

import "./style.css";
import NavigationMobile from "../../Navigation/NavigationMobile";
import ResumeTree from "../ResumeTree";

const ResumeMobile = () => {

    return (
        <div className="content">
            <NavigationMobile/>
            <ResumeTree/>
        </div>
    )
}

export default ResumeMobile;