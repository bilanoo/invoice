import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage.tsx";
import { Provider } from "react-redux";
import { store } from "./pages/store.tsx";
import { EditInvoice } from "./pages/EditInvoice/Editinvoice.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/edit-invoice/:id",
    element: <EditInvoice />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
