import { JSX } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export function SampleArticle(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="App-body">
            <Button
                className="back-button"
                onClick={() => {navigate("/articles")}}
            >
                ← ARTICLES
            </Button>
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