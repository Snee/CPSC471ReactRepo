
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Admin} from './pages/Admin';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { User } from './pages/user';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <Admin/>,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
