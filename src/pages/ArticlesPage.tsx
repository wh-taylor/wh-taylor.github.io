import { ProjectEntry } from "./ProjectEntry";

export function ArticlesPage() {
    return (
        <div className="App-body">
            <h1>Articles</h1>
            <ProjectEntry
                index={0}
                title=""
                subtitle=""
                text=""
                href=""
                />
        </div>
    );
}
