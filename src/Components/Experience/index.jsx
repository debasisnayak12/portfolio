import React from "react";
import "./styles.css";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { motion } from "framer-motion";
import { experienceData } from "./ExperienceData";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1 className="head">Experience</h1>
      <p className="desc">
        My work experience as a Full Stack Developer and Network Engineer, working on diverse projects.
      </p>

      <div className="experience-card">
        <Timeline>
          {experienceData.map((exp, index) => (
            <TimelineItem key={exp.id}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" style={{ borderColor: "#854CE6" }} />
                  <TimelineConnector style={{ background: "#854CE6" }} />
              </TimelineSeparator>

              <TimelineContent>
                <motion.div
                  className="timeline-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="company-info">
                    <div className="company-logo">
                      <img src={exp.logo} alt={exp.company} />
                    </div>

                    <div className="company-details">
                      <div className="cmpny-role">{exp.role}</div>
                      <div className="cmpny-name">{exp.company}</div>
                      <div className="cmpny-duration">{exp.duration}</div>
                    </div>
                  </div>

                  <div className="job-details">
                    <div className="job-description">
                      <ul>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="skills-section">
                      Skills :
                      {exp.skills.map((skill, i) => (
                        <div key={i}>{skill}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;

