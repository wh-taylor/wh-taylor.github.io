import { useEffect, useState } from "react";
import { ProjectEntry } from "./ProjectEntry";
import { Structure } from "./Post";

export function ArticlesPage() {
    const [json, setJson] = useState<Structure | null>(null);

    useEffect(() => {
        fetch(`/posts/structure.json`)
            .then((res) => res.json())
            .then(setJson)
            .catch((err) => console.error('Error getting structure JSON:', err))
    }, []);

    return (
        <div className="App-body">
            <h1>Articles</h1>
            
            <p>There are currently no articles published. The article below is a proof of concept for the near future.</p>

            {json?.articles.map((page, i) =>
                <ProjectEntry
                    key={i}
                    index={i}
                    src={process.env.PUBLIC_URL + "/posts/images/" + page.src || undefined}
                    title={page.title}
                    subtitle={page.subtitle}
                    text={page.text}
                    href={page.href} />)}
        </div>
    );
}
