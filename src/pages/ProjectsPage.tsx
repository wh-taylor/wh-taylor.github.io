import { ProjectEntry } from "./ProjectEntry";
import { useEffect, useState } from "react";
import { Structure } from "./Post";

export function ProjectsPage() {
    const [json, setJson] = useState<Structure | null>(null);
    
    useEffect(() => {
        fetch(`/posts/structure.json`)
            .then((res) => res.json())
            .then(setJson)
            .catch((err) => console.error('Error getting structure JSON:', err))
    }, []);

    return (
        <div className="App-body">
            <h1>Projects</h1>

            <div className="entry-list">
                {json?.posts.map((page, i) =>
                    <ProjectEntry
                        key={i}
                        index={i}
                        href={page} />)}
            </div>
        </div>
    );
}
