import React, { JSX, useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import './ProjectEntry.css';
import { Link } from "react-router";
import { compileMarkdownPreview, getFrontmatter } from "../compiler/compiler";

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

    const frontmatter = markdown ? getFrontmatter(markdown) : {};

    return (
        <div className="project-entry" style={{animationDelay: `${0.1*index}s`}}>
            {(markdown && compileMarkdownPreview(markdown)) || <></>}
            {frontmatter.tags && (
                <div className="tags">
                    {frontmatter.tags.map(tag => (
                        <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {href !== undefined &&
                <Link to={href.slice(href.indexOf('/') + 1)}>
                    <Button>
                        READ MORE
                    </Button>
                </Link>}
        </div>
    );
}
