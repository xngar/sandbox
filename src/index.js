import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { route } from "./routes";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { tienda } from "./store/tienda";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={tienda}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>
);
