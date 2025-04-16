import { ProjectEntry } from "./ProjectEntry";
import problematic from "../images/problematic.png";

export function ProjectsPage() {
    return (
        <div className="App-body">
            <h1>Projects</h1>
            <ProjectEntry
                index={0}
                title="Unknotter"
                subtitle="Written in Python. Under the supervision of Dr. Deniz Kutluay."
                text="A library used for the manipulation and analysis of knots by their knot diagrams. Knots are encoded in their planar diagram notation. Particularly, manipulations have a focus around applying Reidemeister moves to knot diagrams."
                />
            <ProjectEntry
                index={1}
                src={problematic}
                title="Problematic"
                subtitle="Written in React."
                text="An AI-powered problemset generation tool. Using Google Gemini's API, given a prompt, a PDF of generated problems along with an answer key is provided as output. The PDF is compiled via LaTeX, and the LaTeX code is viewable. Primarily intended for mathematics professors and students who want an efficient and effective way to generate new practice problems."
                />
            <ProjectEntry
                index={2}
                title="MindS***"
                subtitle="Written in Python."
                text="A programming language that compiles into the notoriously simple yet difficult esoteric language BrainF***. Code is intended to stylistically replicate other common programming languages such as C and Rust, but is customized for generating BrainF*** code."
                />
        </div>
    );
}
