import { Header } from "../header";

export function Layout({ children }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header color="black" />
      <div style={{ border: "1px solid #eef0f3" }}></div>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </main>
    </div>
  );
}
