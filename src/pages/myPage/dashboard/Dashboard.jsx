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
            width: "64%",
            height: "100%",
          }}
        >
          <Banner />
          <S.Content>
            <HealthCare title="Blood Pressure" />
            <HealthCare title="Weight" />
          </S.Content>
          <Health />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "35%",
            height: "100%",
          }}
        >
          <Calendar />
          <Inquiry />
        </div>
      </S.Content>
    </S.MainContent>
  );
}
