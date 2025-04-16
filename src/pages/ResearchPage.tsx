import pdcodediagram from '../images/pdcodediagram.png'

export function ResearchPage() {
    return (
        <div className="App-body">
            <h1>Research</h1>
            <div className="project-entry" style={{animationDelay: "0s"}}>
                <img src={pdcodediagram} alt="" />
                <h2>Applying Machine Learning to Knot Diagram Reduction</h2>
                <h3>Principal Investigator: Dr. Deniz Kutluay</h3>
                <p>
                    We are interested in the implementation of software in Python for locally moving knot diagrams so that we can apply machine learning to algorithmically untangle knots.
                </p>
            </div>
            <div className="project-entry" style={{animationDelay: "0.2s"}}>
                <h2>Topological Data Analysis</h2>
                <h3>Principal Investigator: Mario Cicchinelli</h3>
                <p>
                    We are interested in the implementation of software in Python for locally moving knot diagrams so that we can apply machine learning to algorithmically untangle knots.
                </p>
            </div>
        </div>
    );
}
