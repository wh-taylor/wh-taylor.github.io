import { JSX } from "react";

export function SampleArticle(): JSX.Element {
    return (
        <div className="App-body">
            <h1>Sample Article</h1>
            <p className="subtitle">Updated 4/16/2025</p>

            <p>
                This is an example of what an article will look like once one is published.
            </p>

            <h2>Sample Section</h2>

            <p>
                More text here.
            </p>
        </div>
    );
}