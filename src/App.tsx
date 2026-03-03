import React, { JSX } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import { Header } from './Header';
import './App.css';
import './Header.css';
import './pages/WorkEntry.css';
import { MathJaxContext } from 'better-react-mathjax';

export interface PageProps {
  route: string;
}

function App(): JSX.Element {
  const route = useLocation().pathname;

  return (
    <MathJaxContext>
      <div className="App">
        <header className="App-header">
          <Header route={route} />
        </header>
        <Outlet />
      </div>
    </MathJaxContext>
  );
}

export default App;
