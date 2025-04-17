import React, { JSX } from "react";
import { Button } from 'react-bootstrap';
import './ProjectEntry.css';
import { useNavigate } from "react-router";

interface EntryProps {
    index: number;
    src?: string;
    title: string;
    subtitle: string;
    text: string;
    href?: string;
}

export function ProjectEntry({ index, src, title, subtitle, text, href }: EntryProps): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="project-entry" style={{animationDelay: `${0.2*index}s`}}>
            {src !== undefined &&
                <img src={src} alt="" />}
            <h2>{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <p>{text}</p>
            {href !== undefined &&
                <Button
                    onClick={() => {navigate(href)}}>
                    READ MORE
                </Button>}
        </div>
    );
}
