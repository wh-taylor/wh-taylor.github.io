import React, { JSX } from "react";
import { Button } from 'react-bootstrap';
import './ProjectEntry.css';
import { Link } from "react-router";

interface EntryProps {
    index: number;
    src?: string;
    title: string;
    subtitle: string;
    text: string;
    href?: string;
}

export function ProjectEntry({ index, src, title, subtitle, text, href }: EntryProps): JSX.Element {
    return (
        <div className="project-entry" style={{animationDelay: `${0.1*index}s`}}>
            <h2>{title}</h2>
            <p className="subtitle">{subtitle}</p>
            {/* {src !== undefined &&
                <img src={src} alt="" />} */}
            <p className="preview">{text}</p>
            {href !== undefined &&
                <Link to={href}>
                    <Button>
                        READ MORE
                    </Button>
                </Link>}
        </div>
    );
}
