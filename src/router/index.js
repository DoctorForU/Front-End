import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as auth from "../pages/auth";
import * as common from "../pages/common";

export function Router() {
  const router = createBrowserRouter([
    { path: "*", element: <common.NotFound /> },
    { path: "auth/login", element: <auth.Login /> },
    { path: "auth/join", element: <auth.Join /> },
  ]);

  return <RouterProvider router={router} />;
}
