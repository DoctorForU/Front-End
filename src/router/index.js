import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as auth from "../pages/auth";
import * as common from "../pages/common";
import * as home from "../pages/home";
import * as hospital from "../pages/hospital";
import * as myPage from "../pages/myPage";

export function Router() {
  const router = createBrowserRouter([
    { path: "*", element: <common.NotFound /> },
    { path: "/", element: <home.Main /> },
    { path: "auth/login", element: <auth.Login /> },
    { path: "auth/join", element: <auth.Join /> },
    { path: "hospital-search", element: <hospital.HospitalSearch /> },
    { path: "hospital-search/:hpid", element: <hospital.HospitalDetail /> },
    { path: "mypage", element: <myPage.MyPage /> },
  ]);
  return <RouterProvider router={router} />;
}
