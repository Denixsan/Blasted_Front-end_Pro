import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import Layout from "./components/Layout";
import Results from "./components/Results";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/battle",
        element: <Battle />,
      },
      {
        path: "/battle/results",
        element: <Results />,
      },
      {
        path: "*",
        element: <h3>Error!</h3>,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
