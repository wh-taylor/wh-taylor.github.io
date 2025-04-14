import portrait from '../images/portrait.jpg';
import emailLogo from '../images/emaillogo.svg';
import institutionLogo from '../images/institutionlogo.svg';

export function HomePage() {
    return (
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
    );
}
