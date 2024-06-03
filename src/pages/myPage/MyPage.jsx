import { useState } from "react";
import { Layout } from "../../components/common";
import { Dashboard } from "./";
import * as S from "./MyPage.styled";

export function MyPage() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <Dashboard />;
      case "진단 내역":
        return <Dashboard />;
      case "Daily Health":
        return <Dashboard />;
      case "내 정보 수정":
        return <Dashboard />;
      case "문의 내역":
        return <Dashboard />;
      default:
        return null;
    }
  };
  return (
    <Layout>
      <S.Container>
        <S.Sidebar>
          <S.SidebarItem
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          >
            <S.Img
              style={{ height: "15px", width: "15px", margin: "0 14px 0 2px" }}
              src="img/Icon11.png"
              alt="Icon11"
            />
            <span>Dashboard</span>
          </S.SidebarItem>
          <S.SidebarItem
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          >
            <S.Img src="img/Icon12.png" alt="Icon12" />
            <span>진단 내역</span>
          </S.SidebarItem>
          <S.SidebarItem
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          >
            <S.Img src="img/Icon13.png" alt="Icon13" />
            <span>Daily Health</span>
          </S.SidebarItem>
          <S.SidebarItem
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          >
            <S.Img src="img/Icon14.png" alt="Icon14" />내 정보 수정
          </S.SidebarItem>
          <S.SidebarItem
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          >
            <S.Img
              style={{ margin: "0 8px 0 2px" }}
              src="img/Icon15.png"
              alt="Icon15"
            />
            <span>문의 내역</span>
          </S.SidebarItem>
        </S.Sidebar>
        <Dashboard />
      </S.Container>
    </Layout>
  );
}
