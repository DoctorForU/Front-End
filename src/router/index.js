import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as auth from "../pages/auth";
import * as common from "../pages/common";
import * as pages from "../pages"; // page를 매칭한다면 -> element에 'page.'으로 꺼내기

export function Router() {
  const router = createBrowserRouter([
    { path: "*", element: <common.NotFound /> },
    { path: "auth/login", element: <auth.Login /> },
    { path: "auth/join", element: <auth.Join /> },
    { path: "hospital-search", element: <pages.HospitalSearch /> }
  ]);

  return <RouterProvider router={router} />;
}
