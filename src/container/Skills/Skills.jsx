import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { SkillsData } from "../../constants/defaultData";

const Skills = () => {
  const [skillsFrontend, setSkillsFrontend] = useState([]);
  const [skillsBackend, setSkillsBackend] = useState([]);
  const [skillsOther, setSkillsOther] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client
      .fetch(skillsQuery)
      .then((data) => {
        // Sort by alphabet
        data.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        setSkillsFrontend(
          data.filter(
            (skill) =>
              skill.type.toLowerCase().includes("frontend") ||
              skill.type.toLowerCase().includes("all")
          )
        );
        setSkillsBackend(
          data.filter(
            (skill) =>
              skill.type.toLowerCase().includes("backend") ||
              skill.type.toLowerCase().includes("all")
          )
        );
        setSkillsOther(
          data.filter(
            (skill) =>
              skill.type.toLowerCase().includes("other") || skill.type.toLowerCase().includes("all")
          )
        );
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setSkillsFrontend(
          SkillsData.filter(
            (skill) =>
              skill.type.toLowerCase().includes("frontend") ||
              skill.type.toLowerCase().includes("all")
          )
        );
        setSkillsBackend(
          SkillsData.filter(
            (skill) =>
              skill.type.toLowerCase().includes("backend") ||
              skill.type.toLowerCase().includes("all")
          )
        );
        setSkillsOther(
          SkillsData.filter(
            (skill) =>
              skill.type.toLowerCase().includes("backend") ||
              skill.type.toLowerCase().includes("all")
          )
        );
      });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-category">
          <div>
            <h3 className="app__skills-category-name">Frontend</h3>
          </div>
          <div className="app__skills-skill-group">
            {skillsFrontend.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}>
                <div className="app__flex">
                  {loaded ? (
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  ) : (
                    <img src={skill.icon} alt={skill.name} />
                  )}
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="app__skills-category">
          <h3 className="app__skills-category-name">Backend</h3>
          <div className="app__skills-skill-group">
            {skillsBackend.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}>
                <div className="app__flex">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="app__skills-category">
          <h3 className="app__skills-category-name">Other</h3>
          <div className="app__skills-skill-group">
            {skillsOther.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}>
                <div className="app__flex">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__primarybg");
