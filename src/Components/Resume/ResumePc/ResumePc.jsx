import React from 'react';

import './style.css';
import NavigationPc from "../../Navigation/NavigationPc";
import ResumeTree from "../ResumeTree";

const ResumePc = () => {

    return (
        <div className="content">
            <NavigationPc/>
            <h2 className="workTitle">Work experience</h2>
            <ResumeTree/>
            <div className="study">
                <h2>Education</h2>
                <p>
                    I finished the Yanka Kupala State University of Grodno with a degree in Information systems and
                    technologies (in economics) in 2020.
                </p>
                <p>
                    I took part in WorldSkills contest (web-design and programming) in 2020. I was to create a game
                    using HTML, CSS and JS and a web-site using Wordpress.
                </p>
                <p>
                    I also have thesis &quot;Development of new UX/UI design for Yanka Kupala State University of Grodno
                    Educational Portal&quot;.
                </p>
                <p>
                    P.s. I have Upper-Intermediate English level.
                </p>
            </div>
        </div>
    )
}

export default ResumePc;