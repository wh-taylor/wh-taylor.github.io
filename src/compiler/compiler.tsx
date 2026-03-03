import { JSX } from "react";
import { Node, parseMarkdown, Text } from "./parser";
import { MathJax } from "better-react-mathjax";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { extractFrontmatter, Frontmatter } from "./frontmatter";

function compileText(text: Text, key: number): JSX.Element | null {
    switch (text.type) {
        case "text":
            return <span key={key}>{text.text}</span>
        case "mathline":
            return <span key={key}>{`\\(${text.text}\\)`}</span>
        case "codeline":
            return <code key={key}>{text.text}</code>
        case "it":
            return <em key={key}>{text.text}</em>
        case "bb":
            return <strong key={key}>{text.text}</strong>
        case "itbb":
            return <span key={key} className="bold-italic">{text.text}</span>
    }
}

function compileTextArray(texts: Text[]): JSX.Element | null {
    let elements = texts.map(compileText);
    return <>{elements}</>;
}

function compileNode(node: Node, key: number): JSX.Element | null {
    switch (node.type) {
        case "h1":
            return <h1 key={key}>
                {compileTextArray(node.text)}
            </h1>;
        case "h2":
            return <h2 key={key}>
                {compileTextArray(node.text)}
            </h2>
        case "h3":
            return <h3 key={key}>
                {compileTextArray(node.text)}
            </h3>;
        case "h4":
            return <h4 key={key}>
                {compileTextArray(node.text)}
            </h4>;
        case "h5":
            return <h5 key={key}>
                {compileTextArray(node.text)}
            </h5>;
        case "h6":
            return <h6 key={key}>
                {compileTextArray(node.text)}
            </h6>;
        case "subt":
            return <p key={key} className="subtitle">
                {compileTextArray(node.text)}
            </p>;
        case "p":
            return <p key={key}>
                {compileTextArray(node.text)}
            </p>;
        case "mathblock":
            return <MathJax key={key}>
                {`\\[${node.text}\\]`}
            </MathJax>;
        case "codeblock":
            // return <pre key={key} className={node.lang ? `language-${node.lang}` : ''}><code>
            //     {node.text}
            // </code></pre>;
            return <SyntaxHighlighter language={node.lang ?? ""} style={stackoverflowLight}>
                {node.text}
            </SyntaxHighlighter>;
        case "img":
            return <img key={key} src={process.env.PUBLIC_URL + "/posts/images/" + node.src} alt={node.text} />
    }
}

function compileMaybeMathNode(node: Node, key: number): JSX.Element | null {
    if (node.input === "text" && node.text.some((x) => x.type === "mathline")) {
        return <MathJax key={key}>{compileNode(node, key)}</MathJax>;
    }
    return compileNode(node, key);
}

function compileNodeArray(nodes: Node[]) : JSX.Element | null {
    return <>{nodes.map((node, i) => compileMaybeMathNode(node, i))}</>;
}

function extractPlainText(texts: Text[]): string {
    return texts.map(text => text.text).join('');
}

export function compileMarkdown(markdown: string): JSX.Element | null {
    const { content } = extractFrontmatter(markdown);
    let nodes: Node[] | null = parseMarkdown(content);

    if (nodes === null) {
        return null;
    }

    return compileNodeArray(nodes);
}

export function compileMarkdownPreview(markdown: string): JSX.Element | null {
    const { content } = extractFrontmatter(markdown);
    let nodes: Node[] | null = parseMarkdown(content);

    if (nodes === null) {
        return null;
    }

    const firstParagraphIndex = nodes.findIndex(node => node.type === "p");
    const nodesToCompile = firstParagraphIndex !== -1 
        ? nodes.slice(0, firstParagraphIndex + 1)
        : nodes;
    
    const truncatedNodes = nodesToCompile.map((node, idx) => {
        if (node.type === "p" && idx === nodesToCompile.length - 1) {
            const plainText = extractPlainText(node.text);
            const words = plainText.split(/\s+/);
            if (words.length > 50) {
                const truncated = words.slice(0, 50).join(' ') + "...";
                return {
                    ...node,
                    text: [{ type: "text" as const, text: truncated }]
                };
            }
        }
        return node;
    });
    
    const convertedNodes = truncatedNodes.map(node => 
        node.type === "h1" ? { ...node, type: "h2" as const } : node
    );

    return compileNodeArray(convertedNodes);
}

export function getFrontmatter(markdown: string): Frontmatter {
    const { frontmatter } = extractFrontmatter(markdown);
    return frontmatter;
}