import { ProjectEntry } from './ProjectEntry';
import { useEffect, useState } from 'react';
import { Structure } from './Article';

export function ResearchPage() {
    const [json, setJson] = useState<Structure | null>(null);
        
    useEffect(() => {
        fetch(`/posts/structure.json`)
            .then((res) => res.json())
            .then(setJson)
            .catch((err) => console.error('Error getting structure JSON:', err))
    }, []);

    return (
        <div className="App-body">
            <h1>Research</h1>
            
            {json?.research.map((page, i) =>
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
