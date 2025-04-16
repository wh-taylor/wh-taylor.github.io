import React, { JSX } from "react";
import './ProjectEntry.css';

interface EntryProps {
    index: number;
    src?: string;
    title: string;
    subtitle: string;
    text: string;
}

export function ProjectEntry({ index, src, title, subtitle, text }: EntryProps): JSX.Element {
    return (
        <div className="project-entry" style={{animationDelay: `${0.2*index}s`}}>
            {src !== undefined && <img src={src} alt="" />}
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{text}</p>
        </div>
    );
}
