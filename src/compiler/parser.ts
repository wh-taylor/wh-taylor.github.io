export type Text =
    | { type: "text", text: string }
    | { type: "link", text: Text[], src: string }
    | { type: "mathline", text: string }
    | { type: "codeline", text: string }
    | { type: "it", text: string }
    | { type: "bb", text: string }
    | { type: "itbb", text: string };

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
    | { type: "codeblock", input: "string", lang: string | null, text: string }
    | { type: "img", input: "string", text: string, src: string };

function minimum(numbers: number[]): number {
    let min = Number.MAX_VALUE;

    for (let n of numbers) {
        if (n < min && n !== -1) {
            min = n;
        }
    }

    if (min === Number.MAX_VALUE) return -1;
    return min;
}

function parseText(text: string): Text[] | null {
    let backtick = text.indexOf("`");
    let dollar = text.indexOf("$");
    let star = text.indexOf("*");
    let leftbr = text.indexOf("[");
    let doublestar = text.indexOf("**");
    let triplestar = text.indexOf("***");
    let min = minimum([backtick, dollar, star, leftbr, doublestar, triplestar]);

    if (min === -1) {
        return [{ type: "text", text }];
    } else if (text[min - 1] == "\\") {
        let rest = text.slice(min + 1);
        let restText = parseText(rest);
        if (restText === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, min - 1) + text[min] }
        ];
        return thisText.concat(restText);
    } else if (min === leftbr) {
        let rest = text.slice(leftbr + 1);
        let rightbr = rest.indexOf("]");
        if (rest[rightbr + 1] !== "(") return null;
        let rest2 = rest.slice(rightbr + 2);
        let rightpa = rest2.indexOf(")");
        let rest3 = rest2.slice(rightpa + 1);
        let restText = parseText(rest3);
        if (restText === null) return null;
        let textLabel = parseText(text.slice(leftbr + 1, leftbr + rightbr + 1));
        if (textLabel === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, leftbr) },
            { type: "link", text: textLabel, src: text.slice(leftbr + rightbr + 3, leftbr + rightbr + rightpa + 3) },
        ]
        return thisText.concat(restText);
    } else if (min === backtick) {
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
    } else if (min === dollar) {
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
    } else if (min === triplestar) {
        let rest = text.slice(triplestar + 3);
        let triplestar2 = rest.indexOf("***");
        let rest2 = rest.slice(triplestar2 + 3);
        let restText = parseText(rest2);
        if (restText === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, triplestar) },
            { type: "itbb", text: text.slice(triplestar + 3, triplestar + triplestar2 + 3) }
        ];
        return thisText.concat(restText);
    } else if (min === doublestar) {
        let rest = text.slice(doublestar + 2);
        let doublestar2 = rest.indexOf("**");
        let rest2 = rest.slice(doublestar2 + 2);
        let restText = parseText(rest2);
        if (restText === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, doublestar) },
            { type: "bb", text: text.slice(doublestar + 2, doublestar + doublestar2 + 2) }
        ];
        return thisText.concat(restText);
    } else if (min === star) {
        let rest = text.slice(star + 1);
        let star2 = rest.indexOf("*");
        let rest2 = rest.slice(star2 + 1);
        let restText = parseText(rest2);
        if (restText === null) return null;
        let thisText: Text[] = [
            { type: "text", text: text.slice(0, star) },
            { type: "it", text: text.slice(star + 1, star + star2 + 1) }
        ];
        return thisText.concat(restText);
    }

    return null;
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
        } else if (check(feed, "![")) {
            let altText = finishUntil("]");
            if (altText === null) return null;
            if (markdown[i-1] !== "(") return null;
            let src = finishUntil(")");
            if (src === null) return null;
            nodes.push({ type: "img", input: "string", text: altText, src });
        } else if (check(feed, "$$")) {
            let text = finishUntil("$$");
            if (text === null) return null;
            nodes.push({ type: "mathblock", input: "string", text });
        } else if (check(feed, "```")) {
            let lang = finishUntil("\n");
            i--;
            let text = finishUntil("\n```");
            if (text === null) return null;
            nodes.push({ type: "codeblock", input: "string", lang, text });
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