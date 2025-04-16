import { JSX } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import logo from './images/logo.svg';
import gitHubLogo from './images/githublogo.svg';
import linkedInLogo from './images/linkedinlogo.svg';
import name from './images/name.svg';
import { PageProps } from './App';
import './Header.css';

export function Header({ route }: PageProps): JSX.Element {
  const navigate = useNavigate();
  
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
              className={route === "/" ? "active" : "inactive"}
              onClick={() => navigate("/")}>
              HOME
            </Button>
            <Button
              className={route === "/research" ? "active" : "inactive"}
              onClick={() => navigate("/research")}>
              RESEARCH
            </Button>
            <Button
              className={route === "/projects" ? "active" : "inactive"}
              onClick={() => navigate("/projects")}>
              PROJECTS
            </Button>
            <Button
              className={route === "/articles" ? "active" : "inactive"}
              onClick={() => navigate("/articles")}>
              ARTICLES
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