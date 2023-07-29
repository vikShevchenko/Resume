import "./dataBase.css";
import { SiVercel } from "react-icons/si";
import {
  AiOutlineGithub,
  AiFillGoogleSquare,
  AiFillMobile,
} from "react-icons/ai";

export const contactMe = [
  {
    dat: (
      <a href="tel: +380955314768">
        <AiFillMobile /> (095)531-47-68
      </a>
    ),
  },
  {
    dat: (
      <a href="mailto: vik.shevchenko1@gmail.com">
        <AiFillGoogleSquare /> vik.shevchenko1@gmail.com
      </a>
    ),
  },
  {
    dat: (
      <a href="https://github.com/vikShevchenko">
        <AiOutlineGithub /> https://github.com/vikShevchenko
      </a>
    ),
  },
];
export const tachSkills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React Hooks&Components",
  "React Redux",
  "React Mobx",
  "React Native",
  "Node.js",
];
export const softSkils = [
  "Team Work",
  "Problem Solving",
  "Strong Adaptation Skills",
  "High Analytics Skills",
  "Communicative",
  "Stress Resistant",
];
export const language = ["English - pre-intermediate", "Ukrainian - native"];

export const project = [
  {
    tag: (
      <div>
        <a href="https://react-typescript-pizza-order.vercel.app/">

          App Pizza Order<span className="dotes">...............................................................</span>
          <SiVercel />
        </a>
        <p className="links">Website for posting content.</p>
        <p className="links">
          Technologies: HTML, CSS, Type Script, React.
          {/* Technologies: HTML, CSS, Node.js, Express, EJS, MongoDB. */}
        </p>
        <p></p>
      </div>
    ),
  },
  {
    tag: (
      <div>
        <a href="https://vikshevchenko.github.io/Weather-proj/">
          Weather
          Bar<span className="dotes">.....................................................................</span>
          <AiOutlineGithub />
        </a>
        <p className="links">
          Provides access to real-time weather conditions.
        </p>
        <p className="links">Technologies: HTML, CSS, JS.</p>
        <p></p>
      </div>
    ),
  },
  {
    tag: (
      <div>
        <a href="https://vikshevchenko.github.io/goit-react-hw-06-phonebook/">
          Phone Book
          Widget<span className="dotes">.........................................................</span>
          <AiOutlineGithub />
        </a>
        <p className="links">Alows to store people names and phone numbers.</p>
        <p className="links">Technologies: HTML, CSS, React.</p>
        <p></p>
      </div>
    ),
  },
  {
    tag: (
      <div>
        <a href="https://vikshevchenko.github.io/goit-react-hw-05-movies">
          Movie
          Columnist<span className="dotes">.............................................................</span>
          <AiOutlineGithub />
        </a>
        <p className="links">
          Presents a list of popular movies, allows searching detailed info
          about perticular movie.
        </p>
        <p className="links">
          Technologies: HTML, CSS, React, React Redux, React Hooks.
        </p>
        <p></p>
      </div>
    ),
  },
  {
    tag: (
      <div>
        <a href="https://magazin-fawn.vercel.app/">
          Simple Souvenir
          Shop<span className="dotes">.....................................................</span>
          < SiVercel />
        </a>
        <p className="links">Application.</p>
        <p className="links">Technologies: HTML, CSS, JS. </p>
        <p></p>
      </div>
    ),
  },
  {
    tag: (
      <div>
        <a href="https://vikshevchenko.github.io/TodoList-React-TS-SCSS/">
          Boring TodoList
          <span className="dotes">...............................................................</span>
          < AiOutlineGithub />
        </a>
        <p className="links">Test Demo Application.</p>
        <p className="links">Technologies: HTML, SCSS, React, TypeScript. </p>
        <p></p>
      </div>
    ),
  },
];

export const info =
  "I am a Front End developer, specializing in HTML, CSS, JS, and React. I am able to skilfully analyse issues and provide accurate solutions. I am constantly working towards improving my skills as a specialist. Ensuring consistent and reliable results in my work is a top priority, and I am always dedicated to achieving them.";
