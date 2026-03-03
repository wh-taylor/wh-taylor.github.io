import { JSX } from "react";
import { Header } from "./Header";
import { ErrorContent } from "./ErrorContent";

export function ErrorPage(): JSX.Element {
    return (
        <div className="App">
        <header className="App-header">
            <Header route="" />
        </header>
        <div className="App-body">
           <ErrorContent />
        </div>
        </div>
    );
}