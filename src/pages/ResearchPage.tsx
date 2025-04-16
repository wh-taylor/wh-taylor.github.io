import { ProjectEntry } from './ProjectEntry';
import pdcodediagram from '../images/pdcodediagram.png'

export function ResearchPage() {
    return (
        <div className="App-body">
            <h1>Research</h1>
            <ProjectEntry
                index={0}
                src={pdcodediagram}
                title="Applying Machine Learning to Knot Diagram Reduction"
                subtitle="Principal Investigator: Dr. Deniz Kutluay"
                text="We are interested in the implementation of software in Python for locally moving knot diagrams so that we can apply machine learning to algorithmically untangle knots."
                />
            <ProjectEntry
                index={1}
                title="Topological Data Analysis in Stock Market Data"
                subtitle="Principal Investigator: Mario Cicchinelli"
                text="We are interested in the application of topological data analysis in analyzing trends in stock market. Our goal is to effectively predict crashes in the stock market via an early warning system (EWS)."
                />
        </div>
    );
}
