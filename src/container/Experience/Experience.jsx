import React, { useState, useEffect } from "react";
import { MdWorkOutline } from "react-icons/md";
import { FaAmazon } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Experience.scss";
import { ExperienceData } from "../../constants/defaultData";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';

    client
      .fetch(query)
      .then((data) => {
        // Sort by year
        data.sort((a, b) => a.order - b.order);
        setExperiences(data);
      })
      .catch((err) => {
        console.log(err);
        setExperiences(ExperienceData);
      });
  }, []);

  const getIcon = (company) => {
    switch (company) {
      case "Amazon":
        return <FaAmazon />;
      case "DataCentric":
        return <GiBrain />;
      default:
        return <MdWorkOutline />;
    }
  };

  return (
    <>
      <h2 className="head-text">
        My work <span>Experience</span>
      </h2>
      <br />
      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={experience.date}
            iconStyle={{ background: "#ffffff", color: "#000" }}
            icon={getIcon(experience.company)}>
            <h3 className="vertical-timeline-element-title">{experience.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p className="p-text">{experience.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default AppWrap(MotionWrap(Experience, "app__experience"), "experience", "app__primarybg");
