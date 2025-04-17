import { JSX } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { MathJax } from "better-react-mathjax";

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
                Here is an equation rendered using MathJax:
            </p>

            <MathJax>{`\\[
                \\int_0^1 x^2 dx
                = \\frac{1}{3} \\left[x^3\\right]_0^1
                = \\frac{1}{3}.
            \\]`}</MathJax>

            <MathJax>
                <p>
                    Inline math: {"\\(x = 1 + 2 + 3\\)"}.
                </p>
            </MathJax>
        </div>
    );
}