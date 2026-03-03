import React, { JSX, useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import './ProjectEntry.css';
import { Link } from "react-router";
import { compileMarkdownPreview } from "../compiler/compiler";

interface EntryProps {
    index: number;
    href: string;
}

export function ProjectEntry({ index, href }: EntryProps): JSX.Element {
    const [markdown, setMarkdown] = useState<string | null>(null);
    
    useEffect(() => {
        fetch(`/posts/${href}.md`)
            .then((res) => {
                if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
                    return res.text();
                } else {
                    return null;
                }
            })
            .then(setMarkdown)
            .catch()
    }, [setMarkdown, href]);

    return (
        <div className="project-entry" style={{animationDelay: `${0.1*index}s`}}>
            {(markdown && compileMarkdownPreview(markdown)) || <></>}
            {href !== undefined &&
                <Link to={href.slice(href.indexOf('/') + 1)}>
                    <Button>
                        READ MORE
                    </Button>
                </Link>}
        </div>
    );
}
