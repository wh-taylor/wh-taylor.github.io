import { JSX } from 'react';
import { Button } from 'react-bootstrap';
import logo from './images/logo.svg';
import gitHubLogo from './images/githublogo.svg';
import linkedInLogo from './images/linkedinlogo.svg';
import name from './images/name.svg';
import { PageProps } from './App';

export function Header({page, setPage}: PageProps): JSX.Element {
    return (
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
    );
}