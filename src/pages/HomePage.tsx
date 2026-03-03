import portrait from '../images/portrait.png';
import emailLogo from '../images/emaillogo.svg';
import institutionLogo from '../images/institutionlogo.svg';

export function HomePage() {
    return (
        <div className="App-body">
            <img className="portrait" src={portrait} alt="Portrait of Hayden Taylor" />
            <h1>W. Hayden Taylor</h1>
            <h2>University of Delaware</h2>
            <p className="subtitle">
                Mathematics (H.B.S.) and Computer Science (B.S.)
            </p>
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
                My research interests are primarily in knot theory, machine learning, abstract algebra, data science, and graph theory. I am currently involved in research in computational knot theory and topological data analysis, and I am eager to get involved in more research opportunities.
            </p>
            <p>
                For the spring of 2025, I am taking a teaching assistant role in CISC 181: Introduction to Computer Science II where I assist students in developing a strong foundation in TypeScript.
            </p>
        </div>
    );
}
