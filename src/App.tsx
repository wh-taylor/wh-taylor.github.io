import React from 'react';
import logo from './images/logo.svg';
import gitHubLogo from './images/githublogo.svg';
import linkedInLogo from './images/linkedinlogo.svg';
import name from './images/name.svg';
import mainPicture from './images/mainpicture.jpg';
import './App.css';

function App() {
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
            <p>Mathematics & Computer Science Bachelors Student</p>
            <p>University of Delaware</p>
          </div>
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
        <img src={mainPicture} alt="Hayden Taylor giving a talk on computational knot theory." />
      </div>
      <div className="App-body">
        
      </div>
    </div>
  );
}

export default App;
