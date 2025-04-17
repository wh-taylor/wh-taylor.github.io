import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ResearchPage } from './pages/ResearchPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { SampleArticle } from './pages/SampleArticle';
import { Articles } from './pages/Articles';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <h1>404</h1>,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "research",
      element: <ResearchPage />,
    },
    {
      path: "projects",
      element: <ProjectsPage />,
    },
    {
      path: "articles",
      element: <Articles />,
      children: [
        {
          path: "/articles",
          element: <ArticlesPage />,
        },
        {
          path: "sample-article",
          element: <SampleArticle />
        }
      ]
    },
  ]
}]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
