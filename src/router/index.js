import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";
// import { IsLoginContext } from "../hooks";

import * as auth from "../pages/auth";
import * as common from "../pages/common";
import * as home from "../pages/home";
import * as hospital from "../pages/hospital";
import * as myPage from "../pages/myPage";
import Cookies from "js-cookie";

export function Router() {
  // const { setUserId, setIsLogin } = useContext(IsLoginContext);

  // useEffect(() => {
  //   const jwt = Cookies.get("accessToken");
  //   if (jwt) {
  //     const storedUserId = sessionStorage.getItem("userId");
  //     if (storedUserId) {
  //       setUserId(storedUserId);
  //       setIsLogin(true);
  //     }
  //   }
  // }, []);

  const router = createBrowserRouter([
    { path: "*", element: <common.NotFound /> },
    { path: "/", element: <home.Main /> },
    { path: "auth/login", element: <auth.Login /> },
    { path: "auth/join", element: <auth.Join /> },
    { path: "hospital-search", element: <hospital.HospitalSearch /> },
    { path: "hospital-search/:hpid", element: <hospital.HospitalDetail /> }, // :이 url 파람 -> 저걸로 hospital.HospitalDetail로 라우팅
    { path: "mypage/:page", element: <myPage.MyPage /> },
  ]);

  return (
      <RouterProvider router={router} />
  );
}
