import React, { useState } from "react";
import { motion } from "framer-motion";

import { BiHomeAlt, BiBook, BiMessageDetail, BiBriefcaseAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineCopy } from "react-icons/ai";
import { images } from "../../constants";
import "./FloatingNavbar.scss";

const FloatingNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="app__floatingnavbar-icon-links">
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}>
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <AiOutlineCopy />
      </a>
      <a
        href="#works"
        onClick={() => setActiveNav("#works")}
        className={activeNav === "#works" ? "active" : ""}>
        <BiBriefcaseAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageDetail />
      </a>
    </div>
  );
};

export default FloatingNavbar;
