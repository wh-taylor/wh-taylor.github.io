import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import logo from './images/logo.svg';
import gitHubLogo from './images/githublogo.svg';
import linkedInLogo from './images/linkedinlogo.svg';
import name from './images/name.svg';
import portrait from './images/portrait.jpg';
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
            <p>Undergraduate Mathematician.</p>
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
        <p>Mathematics and computer science undergraduate student at the University of Delaware.</p>
      </div>
    </div>
  );
}

export default App;
