import React, { JSX, useState } from 'react';
import { Home } from './pages/Home'
import { Header } from './Header';

import './App.css';

type Page = "Home" | "Research" | "Projects" | "Talks";

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
            return <Home />;
          case 'Research':
            return <Home />;
          case 'Projects':
            return <Home />;
          case 'Talks':
            return <Home />;
        }})()
      }
    </div>
  );
}

export default App;
