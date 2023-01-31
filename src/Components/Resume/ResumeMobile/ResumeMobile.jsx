import React from 'react';

import "./style.css";
import NavigationMobile from "../../Navigation/NavigationMobile";
import ResumeTree from "../ResumeTree";

const ResumeMobile = () => {

    return (
        <div className="content">
            <NavigationMobile/>
            <h2 className="workTitle">Work experience</h2>
            <ResumeTree/>
            <div className="study">
                <h2>Education</h2>
                <p>
                    I finished Yanka Kupala State University of Grodno with a degree in Information systems and technologies (in economics) in 2020.
                </p>
                <p>
                    I took part in WorldSkills (in web-design and programming) in 2020. I need to create a game on HTML, CSS and JS and create a web-site on Wordpress.
                </p>
                <p>
                    I also have thesis by &quot;Development of new UX/UI design of Yanka Kupala State University of Grodno educational portal&quot;.
                </p>
                <p>
                    Upper independent English level
                </p>
            </div>
        </div>
    )
}

export default ResumeMobile;