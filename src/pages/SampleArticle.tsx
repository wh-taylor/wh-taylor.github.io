import { JSX } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { compileNodeArray } from "../compiler/compiler";
import { Node } from "../compiler/parser";

export function SampleArticle(): JSX.Element {
    const navigate = useNavigate();

    let nodes: Node[] = [
        { type: "h1", input: "text", text: [
            { type: "text", text: "Sample Title" }
        ]},
        { type: "subt", input: "text", text: [
            { type: "text", text: "Updated 4/17/2025" }
        ]},
        { type: "p", input: "text", text: [
            { type: "text", text: "This is a sample article generated from Markdown. Let " },
            { type: "mathline", text: "x" },
            { type: "text", text: " be a variable. Here is an equation:" },
        ]},
        { type: "mathblock", input: "string", text: "E = mc^2." },
    ]

    return (
        <div className="App-body">
            <Button
                className="back-button"
                onClick={() => {navigate("/articles")}}
            >
                ← ARTICLES
            </Button>

            {compileNodeArray(nodes) || ""}

            {/* <h1>Sample Article</h1>
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
            </MathJax> */}
        </div>
    );
}