import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Courses from './routes/classes';
import Course from './routes/class';
import Tasks from "./routes/tasks";
import Assignments from './routes/assignments';
import Assignment from './routes/assignment';
import LogIn from './routes/login';
import Dashboard from './routes/dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './contexts/UserContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: "/classes",
        element: <Courses/>,
      },
      {
        path: "/classes/:id",
        element: <Course/>,
      },
      {
        path: "/tasks",
        element: <Tasks/>,
      },
      {
        path: "/assignments",
        element: <Assignments/>,
      },
      {
        path: "/assignments/:id",
        element: <Assignment/>,
      },
    ]
  },
  {
    path: "/login",
    element: <LogIn/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>  
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        theme='colored'
        autoClose={3000}
        />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
