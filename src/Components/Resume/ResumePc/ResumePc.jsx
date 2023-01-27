import React from 'react';

import './style.css';
import NavigationPc from "../../Navigation/NavigationPc";
import ResumeTree from "../ResumeTree";

const ResumePc = () => {

    return(
        <div className="content">
            <NavigationPc/>
            <ResumeTree/>
        </div>
    )
}

export default ResumePc;