import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/about",
                element: <AboutMe />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/internships",
                element: <Internships />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
