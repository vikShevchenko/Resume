import React from "react";
import "./rightBar.css";
import { project, info } from "./dataBase.js";

export const RightBar = () => {
  const education = [
    "2022-2023 IT School GoIT Fullstack Developer",
    "1998-2003 Kherson State University",
  ];

  return (
    <div className="right-bar">
      <h1>Viktor Shevchenko</h1>
      <p className="title">Frontend Developer</p>
      <p>{info}</p>
      <h2>Project Experience</h2>
      <ul>
        {project.map((proj, index) => (
          <li key={index}>{proj.tag}</li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {education.map((educ) => (
          <li key={educ}>{educ}</li>
        ))}
      </ul>
    </div>
  );
};
