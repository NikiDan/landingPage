import React from 'react';

import './style.css';
import InfBlockPc from "../../InfBlock/InfBlockPc";
import ResumePc from "../../Resume/ResumePc";

const Resume = () => {

    return (
        <div className="App">
            <div className="appComponents">
                <InfBlockPc/>
                <ResumePc/>
            </div>
        </div>
    );
}

export default Resume;