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

function parseText(text: string): Text[] | null {
    let backtick = text.indexOf("`");
    let dollar = text.indexOf("$");
    if (backtick !== -1 && (backtick < dollar || dollar === -1)) {
        let rest = text.slice(backtick + 1);
        let backtick2 = rest.indexOf("`");
        let rest2 = rest.slice(backtick2 + 1);
        let restText = parseText(rest2);
        if (restText === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, backtick) },
            { type: "codeline", text: text.slice(backtick + 1, backtick + backtick2 + 1) }
        ];
        return thisText.concat(restText);
    } else if (dollar !== -1 && (dollar < backtick || backtick === -1)) {
        let rest = text.slice(dollar + 1);
        let dollar2 = rest.indexOf("$");
        let rest2 = rest.slice(dollar2 + 1);
        let restText = parseText(rest2);
        if (restText === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, dollar) },
            { type: "mathline", text: text.slice(dollar + 1, dollar + dollar2 + 1) }
        ];
        return thisText.concat(restText);
    } else {
        return [{ type: "text", text }];
    }
}

export function parseMarkdown(markdown: string): Node[] | null {
    markdown += "\n";
    let i = 0;
    let nodes: Node[] = [];

    const finishUntil = (until: string): string | null => {
        let j = markdown.slice(i).indexOf(until);
        if (j === -1) return null;
        let iOld = i;
        i += j + until.length + 1;
        let text = markdown.slice(iOld, iOld+j);
        return text;
    };

    const finishLine = (): Text[] | null => {
        let text = finishUntil("\n");
        if (text === null) return null;
        return parseText(text);
    };

    const check = (feed: string, test: string): boolean => {
        let bool = feed.startsWith(test);
        if (bool) {
            i += test.length;
        }
        return bool;
    };

    while (i < markdown.length) {
        let feedLength = 6;
        let feed = markdown.slice(i, i+feedLength);
        if (feed.startsWith("\n")) {
            i += 1;
        } else if (check(feed, "######")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "h6", input: "text", text });
        } else if (check(feed, "#####")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "h5", input: "text", text });
        } else if (check(feed, "####")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "h4", input: "text", text });
        } else if (check(feed, "###")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "h3", input: "text", text });
        } else if (check(feed, "##")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "h2", input: "text", text });
        } else if (check(feed, "#")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "h1", input: "text", text });
        } else if (check(feed, "::")) {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "subt", input: "text", text });
        } else if (check(feed, "$$")) {
            let text = finishUntil("$$");
            if (text === null) return null;
            nodes.push({ type: "mathblock", input: "string", text });
        } else if (check(feed, "```\n")) {
            let text = finishUntil("\n```");
            if (text === null) return null;
            nodes.push({ type: "codeblock", input: "string", text });
        } else if (check(feed, " ")) {
            // skip whitespace
        } else {
            let text = finishLine();
            if (text === null) return null;
            nodes.push({ type: "p", input: "text", text })
        }
    }

    return nodes;
}