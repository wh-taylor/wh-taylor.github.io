import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { Post } from './pages/WorkPost';
import { PageContainer } from './pages/PageContainer';
import { ErrorPage } from './ErrorPage';

const router = createHashRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <AboutPage />,
    },
    {
      path: "work",
      element: <PageContainer />,
      children: [
        {
          path: "/work",
          element: <WorkPage />,
        },
        {
          path: "/work/:id",
          element: <Post />
        }
      ]
    }
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
