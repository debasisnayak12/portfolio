import React from 'react';
import school from "../../assets/edu/school.png";
import college from "../../assets/edu/college.jpg";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import "./styles.css";

const Education = () => {
  const educationData = [
    {
      img: college,
      role: "Chaibasa Engineering College",
      name: "Bachelor of Technology - Computer Science",
      duration: "July 2018 - July 2022",
      grade: "7.37 CGPA",
      description: "I have completed Bachelor's degree in Computer Science and Engineering from Chaibasa Engineering College, Chaibasa."
    },
    {
      img: school,
      role: "Kendriya Vidyalaya Surda",
      name: "Higher Secondary Education - Computer Science",
      duration: "July 2017 - July 2018",
      grade: "6.7 CGPA",
      description: "I completed my class 12 high school on science stream education at Kendriya Vidyalaya Surda, Ghatshila."
    },
    {
      img: school,
      role: "Kendriya Vidyalaya Surda",
      name: "Secondary Education",
      duration: "July 2016 - July 2017",
      grade: "8.2 CGPA",
      description: "I completed my class 10 education at Kendriya Vidyalaya Surda, Ghatshila."
    }
  ];

  return (
    <div id='education' className='education'>
      <h1 className='head'>Education</h1>
      <div className="experience-card">
        <Timeline>
          {educationData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" style={{ borderColor: "#854CE6" }} />
                {index < educationData.length  && <TimelineConnector style={{ background: "#854CE6" }} />}
              </TimelineSeparator>
              <TimelineContent>
                <div className="timeline-content">
                  <div className="company-info">
                    <div className="company-logo"><img src={item.img} alt={item.role} /></div>
                    <div className="company-details">
                      <div className="cmpny-role">{item.role}</div>
                      <div className="cmpny-name">{item.name}</div>
                      <div className="cmpny-duration">{item.duration}</div>
                    </div>
                  </div>
                  <div className="job-details">
                    <div className="job-grade">Grade : {item.grade}</div>
                    <div className="job-description">
                      {item.description}
                    </div>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default Education;
