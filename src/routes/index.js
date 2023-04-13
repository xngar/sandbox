import { createBrowserRouter } from "react-router-dom";
import Contacto from "../Contacto";
import Home, { fetchDatos, fetchDatos2, usuarios } from "../Home";
import NotFound from "../NotFound";
import Layout from "../layout/index";
import Post, { recuperarPost } from "../Post";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/contacto",
        element: <Contacto />
      },
      {
        path: "/",
        element: <Home />,
        loader: usuarios
      },
      {
        path: "/edit-contacto/:id",
        element: <Contacto />
      },
      {
        path: "/post/:id",
        element: <Post />,
        loader: recuperarPost
      }
    ]
  }
]);
