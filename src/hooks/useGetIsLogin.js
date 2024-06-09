import { createContext, useContext, useState, useMemo } from "react";

export const IsLoginContext = createContext();

export function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState("");
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);
  return (
    <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>
  );
}

export function useGetIsLogin() {
  const context = useContext(IsLoginContext);
  if (!context) {
    throw new Error("Cannot find ContextProvider");
  }
  return { userId: context.userId };
}

export function useGetToken() {
  const context = useContext(IsLoginContext);
  if (!context) {
    throw new Error("Cannot find ContextProvider");
  }
  return { token: context.token };
}
