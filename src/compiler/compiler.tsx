import { JSX } from "react";
import { Node, parseMarkdown, Text } from "./parser";
import { MathJax } from "better-react-mathjax";

function compileText(text: Text): JSX.Element | null {
    switch (text.type) {
        case "text":
            return <>{text.text}</>
        case "mathline":
            return <>{`\\(${text.text}\\)`}</>
        case "codeline":
            return <code>{text.text}</code>
    }
}

function compileTextArray(texts: Text[]): JSX.Element | null {
    let elements = texts.map(compileText);
    return <>{elements}</>;
}

function compileNode(node: Node): JSX.Element | null {
    switch (node.type) {
        case "h1":
            return <h1>
                {compileTextArray(node.text)}
            </h1>;
        case "h2":
            return <h2>
                {compileTextArray(node.text)}
            </h2>
        case "h3":
            return <h3>
                {compileTextArray(node.text)}
            </h3>;
        case "h4":
            return <h4>
                {compileTextArray(node.text)}
            </h4>;
        case "h5":
            return <h5>
                {compileTextArray(node.text)}
            </h5>;
        case "h6":
            return <h6>
                {compileTextArray(node.text)}
            </h6>;
        case "subt":
            return <p className="subtitle">
                {compileTextArray(node.text)}
            </p>;
        case "p":
            return <p>
                {compileTextArray(node.text)}
            </p>;
        case "mathblock":
            return <MathJax>
                {`\\[${node.text}\\]`}
            </MathJax>;
        case "codeblock":
            return <pre><code>
                {node.text}
            </code></pre>;
    }
}

function compileMaybeMathNode(node: Node): JSX.Element | null {
    if (node.input === "text" && node.text.some((x) => x.type === "mathline")) {
        return <MathJax>{compileNode(node)}</MathJax>;
    }
    return compileNode(node);
}

function compileNodeArray(nodes: Node[]) : JSX.Element | null {
    return <>{nodes.map((node) => compileMaybeMathNode(node))}</>;
}

export function compileMarkdown(markdown: string): JSX.Element | null {
    let nodes: Node[] | null = parseMarkdown(markdown);

    if (nodes === null) {
        return null;
    }

    return compileNodeArray(nodes);
}