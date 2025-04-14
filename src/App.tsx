import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import logo from './images/logo.svg';
import gitHubLogo from './images/githublogo.svg';
import linkedInLogo from './images/linkedinlogo.svg';
import name from './images/name.svg';
import portrait from './images/portrait.jpg';
import emailLogo from './images/emaillogo.svg';
import institutionLogo from './images/institutionlogo.svg';
import './App.css';

type Page = "Home" | "Research" | "Projects" | "Talks";

function App() {
  const [page, setPage] = useState<Page>("Home");

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-div">
          <a href=".">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div className="App-header-text">
            <a href=".">
              <img src={name} className="App-logo-name" alt="Hayden Taylor" />
            </a>
            <p>Undergraduate Mathematician and Computer Scientist.</p>
          </div>
          <nav>
            <Button 
              className={page === "Home" ? "active" : "inactive"}
              onClick={() => setPage("Home")}>
              HOME
            </Button>
            <Button
              className={page === "Research" ? "active" : "inactive"}
              onClick={() => setPage("Research")}>
              RESEARCH
            </Button>
            <Button
              className={page === "Projects" ? "active" : "inactive"}
              onClick={() => setPage("Projects")}>
              PROJECTS
            </Button>
            <Button
              className={page === "Talks" ? "active" : "inactive"}
              onClick={() => setPage("Talks")}>
              TALKS
            </Button>
          </nav>
          <div className="App-header-links">
            <a href="https://github.com/wh-taylor">
              <img src={gitHubLogo} alt="GitHub Link" />
            </a>
            <a href="https://www.linkedin.com/in/william-hayden-taylor/">
              <img src={linkedInLogo} alt="LinkedIn Link" />
            </a>
          </div>
        </div>
      </header>
      <div className="big-picture">
      </div>
      <div className="App-body">
        <img className="portrait" src={portrait} alt="Portrait of Hayden Taylor" />
        <h1>W. Hayden Taylor</h1>
        <h2>University of Delaware</h2>
        <h3>
          Mathematics (H.B.S.) and Computer Science (B.S.)
        </h3>
        <div className="listing">
          <img src={emailLogo} alt="Email" />
          <a href="mailto:h.taylor2106@gmail.com">
            h.taylor2106@gmail.com
          </a>
        </div>
        <div className="listing">
          <img src={institutionLogo} alt="Institution" />
          <a href="mailto:haydent@udel.com">
            haydent@udel.edu
          </a>
        </div>
        <p>
          I am an undergraduate student at the University of Delaware. I am driven to actively pursue research, create impactful projects, and educate.
        </p>
        <p>
          My research interests are primarily in knot theory, machine learning, abstract algebra, data science, and graph theory.
        </p>
        <p>
          For the spring of 2025, I am taking a teaching assistant role in CISC 181: Introduction to Computer Science II where I assist students in developing a strong foundation in TypeScript.
        </p>
      </div>
    </div>
  );
}

export default App;
