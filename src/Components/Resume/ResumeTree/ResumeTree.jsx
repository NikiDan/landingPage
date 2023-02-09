import React from 'react';

import './style.css';

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

const ResumeTree = () => {
    return (
        <Timeline id="timeLine">
            <TimelineItem>
                <TimelineOppositeContent id="pointText">
                    Trainee Full stack developer
                    <p className="pointText__description">HTML CSS PHP</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent id="pointTitle">
                    Neirika
                    <p className="pointTitle__description">March 2019 - June 2019</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent id="pointText">
                    Trainee Full stack developer
                    <p className="pointText__description">HTML CSS JS PHP Symfony jQuery MySQL</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent id="pointTitle">
                    Intexsoft
                    <p className="pointTitle__description">July 2019 - September 2019</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent id="pointText">
                    Trainee Front end developer
                    <p className="pointText__description">JS React</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent id="pointTitle">
                    Cogniteq
                    <p className="pointTitle__description">November 2019 - December 2019</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent id="pointText">
                    Trainee Front end developer
                    <p className="pointText__description">HTML CSS JS</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent id="pointTitle">
                    EPAM Systems
                    <p className="pointTitle__description">February 2020 - April 2020</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent id="pointText">
                    Software developer
                    <p className="pointText__description">1C FoxPro MySQL</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent id="pointTitle">
                    Subsidiary «Khimvolokno Plant»
                    <p className="pointTitle__description">August 2020 - To this day</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default ResumeTree;