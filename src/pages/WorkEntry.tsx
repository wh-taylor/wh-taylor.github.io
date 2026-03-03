import React, { JSX, useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import './WorkEntry.css';
import './WorkPage.css';
import { Link } from "react-router";
import { compileMarkdownPreview, getFrontmatter } from "../compiler/compiler";

interface EntryProps {
    index: number;
    href: string;
    selectedTags?: Set<string>;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
    });
}

export function ProjectEntry({ index, href, selectedTags = new Set() }: EntryProps): JSX.Element | null {
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

    // Filter based on selected tags
    if (selectedTags.size > 0) {
        const postTags = frontmatter.tags || [];
        const hasMatchingTag = Array.from(selectedTags).some(tag => 
            postTags.includes(tag)
        );
        if (!hasMatchingTag) {
            return null;
        }
    }

    return (
        <div className="project-entry" style={{animationDelay: `${0.1*index}s`}}>
            {(markdown && compileMarkdownPreview(markdown)) || <></>}
            {frontmatter.date && (
                <div className="date">
                    {formatDate(frontmatter.date)}
                    {frontmatter.end ? ` to ${formatDate(frontmatter.end)}` : ""}
                </div>
            )}
            {frontmatter.tags && (
                <div className="tags">
                    {frontmatter.tags.map(tag => (
                        <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                            {tag.toUpperCase()}
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
