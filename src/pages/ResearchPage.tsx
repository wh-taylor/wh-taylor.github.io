import pdcodediagram from '../images/pdcodediagram.png'

export function ResearchPage() {
    return (
        <div className="App-body">
            <h1>Research</h1>
            <div className="research-entry">
                <img src={pdcodediagram} alt="" />
                <h2>Applying Machine Learning to Knot Diagram Reduction</h2>
                <h3>Principal Investigator: Dr. Deniz Kutluay</h3>
                <p>
                    In mathematics, a knot is a one-dimensional continuous line that loops back into itself. Our research will be
                primarily focused on the projection of knots in two dimensions, called a knot diagram.
                </p>
                <p>
                    Specifically, we are interested in the implementation of software in Python for locally moving knot
    diagrams so that we can apply machine learning to solving the mysteries behind the untangling of knots.
    Our research can be broken down into three main parts: (1) developing of a Python library to efficiently
    work with knot diagrams, (2) designing methods to visualize knot diagram moves, and (3) applying of
    machine learning in the mysterious problem of untangling and differentiating knots.
                </p>
            </div>
        </div>
    );
}
