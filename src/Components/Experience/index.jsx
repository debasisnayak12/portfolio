import React from "react";
import "./styles.css";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import logo from "../../assets/exp/acciojob_logo.jpg";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1 className="head">Experience</h1>
      <p className="desc">
        My work experience as a Full Stack Developer and working on different
        projects.
      </p>
      <div className="experience-card">
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" style={{ borderColor: "#854CE6" }} />
            <TimelineConnector style={{ background: "#854CE6" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div className="timeline-content">
              <div className="company-info">
                <div className="company-logo"><img src={logo} /></div>
                <div className="company-details">
                    <div className="cmpny-role">Full Stack Developer Trainee</div>
                    <div className="cmpny-name">Acciojob</div>
                    <div className="cmpny-duration">Jan 2024 - June 2024</div>
                </div>
              </div>
              <div className="job-details">
                <div className="job-description">
                  I worked on various projects, focusing on full stack development using technologies such as React, Node.js, and MongoDB.
                </div>
                <div className="skills-section">Skills :  <div> HTML</div> <div> CSS</div> <div> JavaScript</div> <div> React</div> <div> Redux</div> <div> Node.js</div> <div> MongoDB</div></div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
    </div>
  );
};

export default Experience;
