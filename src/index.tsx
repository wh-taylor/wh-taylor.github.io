import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ResearchPage } from './pages/ResearchPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { Post } from './pages/Post';
import { PageContainer } from './pages/PageContainer';
import { ErrorPage } from './ErrorPage';

const router = createHashRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "research",
      element: <PageContainer />,
      children: [
        {
          path: "/research",
          element: <ResearchPage />,
        },
        {
          path: "/research/:id",
          element: <Post />
        }
      ]
    },
    {
      path: "projects",
      element: <PageContainer />,
      children: [
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/projects/:id",
          element: <Post />
        }
      ]
    },
    {
      path: "articles",
      element: <PageContainer />,
      children: [
        {
          path: "/articles",
          element: <ArticlesPage />,
        },
        {
          path: "/articles/:id",
          element: <Post />
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
