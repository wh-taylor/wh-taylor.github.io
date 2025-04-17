import { ProjectEntry } from "./ProjectEntry";

export function ArticlesPage() {
    return (
        <div className="App-body">
            <h1>Articles</h1>
            <p>There are currently no articles published. The article below is a proof of concept for the near future.</p>
            <ProjectEntry
                index={0}
                title="Sample Article"
                subtitle="Updated 4/16/2025"
                text="This is a sample description."
                href="sample-article"
                />
        </div>
    );
}
