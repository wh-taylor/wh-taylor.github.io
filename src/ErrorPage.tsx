import { JSX } from "react";
import { Header } from "./Header";

export function ErrorPage(): JSX.Element {
    return (
        <div className="App">
        <header className="App-header">
            <Header route="" />
        </header>
        <div className="App-body">
            <h1>404</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
        </div>
    );
}