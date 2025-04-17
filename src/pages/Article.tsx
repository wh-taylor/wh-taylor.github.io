import { JSX, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { compileMarkdown } from "../compiler/compiler";

interface PageDescriptor {
    src: string | null,
    title: string,
    subtitle: string,
    text: string,
    href: string,
}

export interface Structure {
    articles: PageDescriptor[],
    projects: PageDescriptor[],
    research: PageDescriptor[],
}

export function Article(): JSX.Element {
    const [markdown, setMarkdown] = useState<string | null>(null);
    const location = useLocation();
    const path = location.pathname;
    
    useEffect(() => {
        fetch(`/posts${location.pathname}.md`)
            .then((res) => res.text())
            .then(setMarkdown)
            .catch((err) => console.error('Error loading markdown:', err))
    }, [location]);

    const returnPath = path.slice(0, path.indexOf("/", 1))

    return (
        <div className="App-body">
            <Link to={returnPath}>
                <Button
                    className="back-button">
                    ← {returnPath.slice(1).toUpperCase()}
                </Button>
            </Link>
            <div className="article">
                {(markdown && compileMarkdown(markdown)) || <p>An error occured while compiling the markdown for this page.</p>}
            </div>
        </div>
    );
}