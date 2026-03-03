import { JSX, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { compileMarkdown } from "../compiler/compiler";

export interface Structure {
    posts: string[],
}

export function Post(): JSX.Element {
    const [markdown, setMarkdown] = useState<string | null>(null);
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        fetch(`/posts/${location.pathname.slice(location.pathname.indexOf('/', 1) + 1)}.md`)
            .then((res) => {
                if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
                    return res.text();
                } else {
                    return null;
                }
            })
            .then(setMarkdown)
            .catch()
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
                {(markdown && compileMarkdown(markdown)) || <></>}
            </div>
        </div>
    );
}