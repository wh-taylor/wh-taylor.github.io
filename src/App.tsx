import React, { JSX, useState } from 'react';
import { Header } from './Header';
import { HomePage } from './pages/HomePage'
import { ResearchPage } from './pages/ResearchPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import './App.css';

type Page = "Home" | "Research" | "Projects" | "Articles";

export interface PageProps {
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

function App(): JSX.Element {
  const [page, setPage] = useState<Page>("Home");

  return (
    <div className="App">
      <header className="App-header">
        <Header page={page} setPage={setPage} />
      </header>
      <div className="big-picture">
      </div>
      {
        (() => {switch (page) {
          case 'Home':
            return <HomePage />;
          case 'Research':
            return <ResearchPage />;
          case 'Projects':
            return <ProjectsPage />;
          case 'Articles':
            return <ArticlesPage />;
        }})()
      }
    </div>
  );
}

export default App;
