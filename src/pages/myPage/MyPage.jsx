import { Layout } from "../../components/common";
import {
  Banner,
  Calendar,
  Health,
  HealthCare,
  Inquiry,
} from "../../components";
import * as S from "./MyPage.styled";

export function MyPage() {
  return (
    <Layout>
      <S.Container>
        <S.Sidebar>
          <S.SidebarItem>
            <S.Img
              style={{ height: "15px", width: "15px", margin: "0 14px 0 2px" }}
              src="img/Icon11.png"
              alt="Icon11"
            />
            <span>Dashboard</span>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.Img src="img/Icon12.png" alt="Icon12" />
            <span>진단 내역</span>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.Img src="img/Icon13.png" alt="Icon13" />
            <span>Daily Health</span>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.Img src="img/Icon14.png" alt="Icon14" />내 정보 수정
          </S.SidebarItem>
          <S.SidebarItem>
            <S.Img
              style={{ margin: "0 8px 0 2px" }}
              src="img/Icon15.png"
              alt="Icon15"
            />
            <span>문의 내역</span>
          </S.SidebarItem>
        </S.Sidebar>
        <S.MainContent>
          <S.Content>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "65%",
              }}
            >
              <Banner />
              <S.Content>
                <HealthCare title="Blood Pressure" />
                <HealthCare title="Weight" />
              </S.Content>
            </div>
            <Calendar />
          </S.Content>
          <S.Content>
            <Health />
            <Inquiry />
          </S.Content>
        </S.MainContent>
      </S.Container>
    </Layout>
  );
}
