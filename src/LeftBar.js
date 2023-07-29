import React from "react";
import "./LeftBar.css";
import { contactMe, tachSkills, softSkils, language } from "./dataBase.js";

export const LeftBar = () => {
  return (
    <div className="left-bar">
      <img
        src="https://avatars.githubusercontent.com/u/63931417?s=400&u=87355e2fbb20017104d850f87c4891d6ad9c3550&v=4"
        alt="foto"
      />
      <h1 className="left-title">Shevchenko Viktor</h1>
      <h2>Contact Me </h2>

      <ul>
        {contactMe.map((cont, index) => (
          <li key={index}>{cont.dat}</li>
        ))}
      </ul>
      <h2>Tech Skills</h2>
      <ul>
        {tachSkills.map((tach) => (
          <li key={tach}>{tach}</li>
        ))}
      </ul>
      <h2>Soft Skills</h2>
      <ul>
        {softSkils.map((soft) => (
          <li key={soft}>{soft}</li>
        ))}
      </ul>
      <h2>Language</h2>
      <ul>
        {language.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};
