import {
  Banner,
  Calendar,
  Health,
  HealthCare,
  Inquiry,
} from "../../../components";
import * as S from "./Dashboard.styled";

export function Dashboard() {
  return (
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
  );
}
