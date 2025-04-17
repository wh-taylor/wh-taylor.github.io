import { JSX, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
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
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/posts/articles/${id}.md`)
            .then((res) => res.text())
            .then(setMarkdown)
            .catch((err) => console.error('Error loading markdown:', err))
    }, [id]);

    return (
        <div className="App-body">
            <Button
                className="back-button"
                onClick={() => {navigate("/articles")}}>
                ← ARTICLES
            </Button>
            <div className="article">
                {(markdown && compileMarkdown(markdown)) || <p>An error occured while compiling the markdown for this page.</p>}
            </div>
        </div>
    );
}