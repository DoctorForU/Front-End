import { Header } from "../header";

export function Layout({ children }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header color="black"/>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          overflow: "hidden",
        }}
      >
        {children}
      </main>
    </div>
  );
}
