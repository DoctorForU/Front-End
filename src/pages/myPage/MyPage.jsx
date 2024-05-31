import { Layout } from "../../components/common";
import * as S from "./MyPage.styled";

const Card = ({ title, value, chart }) => {
  return (
    <S.Card>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardValue>{value}</S.CardValue>
      <S.CardChart>{chart}</S.CardChart>
    </S.Card>
  );
};

export function MyPage() {
  return (
    <Layout>
      <S.Container>
        <S.Sidebar>
          <S.SidebarItem>Dashboard</S.SidebarItem>
          <S.SidebarItem>진단 내역</S.SidebarItem>
          <S.SidebarItem>Daily Health</S.SidebarItem>
          <S.SidebarItem>내 정보 수정</S.SidebarItem>
          <S.SidebarItem>문의 내역</S.SidebarItem>
        </S.Sidebar>
        <S.MainContent>
          <S.CardsContainer>
            <Card title="Blood Pressure" value="89 g/dL" chart={<div></div>} />
            <Card title="Weight" value="47 kg" chart={<div></div>} />
          </S.CardsContainer>
        </S.MainContent>
      </S.Container>
    </Layout>
  );
}
