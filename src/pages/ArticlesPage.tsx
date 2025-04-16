import { ProjectEntry } from "./ProjectEntry";

export function ArticlesPage() {
    return (
        <div className="App-body">
            <h1>Articles</h1>
            <ProjectEntry
                index={0}
                title="How do you calculate a knot?"
                subtitle="Updated 4/16/2025"
                text="Knots are particularly tricky mathematical objects to work with. However, there is a way to store knots in memory that allow you to easily manipulate them just like how you could in real life."
                href="how-do-you-calculate-a-knot"
                />
        </div>
    );
}
