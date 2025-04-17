import { JSX } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { compileMarkdown } from "../compiler/compiler";
import { Node } from "../compiler/parser";

export function SampleArticle(): JSX.Element {
    const navigate = useNavigate();

    // let nodes: Node[] = [
    //     { type: "h1", input: "text", text: [
    //         { type: "text", text: "Sample Title" }
    //     ]},
    //     { type: "subt", input: "text", text: [
    //         { type: "text", text: "Updated 4/17/2025" }
    //     ]},
    //     { type: "p", input: "text", text: [
    //         { type: "text", text: "This is a sample article generated from Markdown. Let " },
    //         { type: "mathline", text: "x" },
    //         { type: "text", text: " be a variable. Here is an equation:" },
    //     ]},
    //     { type: "mathblock", input: "string", text: "E = mc^2." },
    // ]

    return (
        <div className="App-body">
            <Button
                className="back-button"
                onClick={() => {navigate("/articles")}}>
                ← ARTICLES
            </Button>

            {compileMarkdown(`
                # Sample Title Here

                This is a sample page.

                ## Sample Section

                Hello. $3x+5$ is inline math and \`print("hello world")\` is inline code. Here is some block math:

                $$
                    \\int_0^\\infty \\frac{1}{x^2} dx,
                $$

                and here is some block code:

                \`\`\`for (int i = 0; i < n; i++) {
    print("hello world");
}
                \`\`\`
            `) || <p>An error occured while compiling the markdown for this page.</p>}
        </div>
    );
}