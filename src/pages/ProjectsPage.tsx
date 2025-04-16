export function ProjectsPage() {
    return (
        <div className="App-body">
            <h1>Projects</h1>
            <div className="project-entry" style={{animationDelay: "0s"}}>
                <h2>Unknotter</h2>
                <h3>Written in Python. Under the supervision of Dr. Deniz Kutluay.</h3>
                <p>
                    A library used for the manipulation and analysis of knots by their knot diagrams. Knots are encoded in their planar diagram notation. Particularly, manipulations have a focus around applying Reidemeister moves to knot diagrams.
                </p>
            </div>
            <div className="project-entry" style={{animationDelay: "0.2s"}}>
                <h2>Problematic</h2>
                <h3>Written in React.</h3>
                <p>
                    An AI-powered problemset generation tool. Using Google Gemini's API, given a prompt, a PDF of generated problems along with an answer key is provided as output. The PDF is compiled via LaTeX, and the LaTeX code is viewable. Primarily intended for mathematics professors and students who want an efficient and effective way to generate new practice problems.
                </p>
            </div>
            <div className="project-entry" style={{animationDelay: "0.4s"}}>
                <h2>MindS***</h2>
                <h3>Written in Python.</h3>
                <p>
                    A programming language that compiles into the notoriously simple yet difficult esoteric language BrainF***. Code is intended to stylistically replicate other common programming languages such as C and Rust, but is customized for generating BrainF*** code.
                </p>
            </div>
        </div>
    );
}
