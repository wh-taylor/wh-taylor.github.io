export type Text =
    | { type: "text", text: string }
    | { type: "mathline", text: string }
    | { type: "codeline", text: string };

export type Node =
    | { type: "h1", input: "text", text: Text[] }
    | { type: "h2", input: "text", text: Text[] }
    | { type: "h3", input: "text", text: Text[] }
    | { type: "h4", input: "text", text: Text[] }
    | { type: "h5", input: "text", text: Text[] }
    | { type: "h6", input: "text", text: Text[] }
    | { type: "subt", input: "text", text: Text[] }
    | { type: "p", input: "text", text: Text[] }
    | { type: "mathblock", input: "string", text: string }
    | { type: "codeblock", input: "string", text: string };

export function parseMarkdown(markdown: string): Node[] | null {
    return null;
}