import React from 'react';

import './style.css';
import ystal from '../../img/ya-sdelyal_111857687_orig_.png';
import NavigationPc from "../../Navigation/NavigationPc";

const ResumePc = () => {
    return(
        <div className="content">
            <NavigationPc/>
            <div className="tired">
                <img src={ystal} alt="Nikita Danilov"/>
            </div>
        </div>
    )
}

export default ResumePc;