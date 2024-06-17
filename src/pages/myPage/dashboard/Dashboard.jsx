import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Banner,
  Calendar,
  Health,
  HealthCare,
  Inquiry,
} from "../../../components";
import * as S from "./Dashboard.styled";

export function Dashboard() {
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();
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
          <HealthCare />
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
          <S.CalendarContainer>
            <p style={{ fontWeight: "bold" }}>진료예정</p>
            <S.Line></S.Line>
            <Calendar setSelectedDay={setSelectedDay} />
            <S.CalendarButtons>
              <S.Button
                primary
                onClick={() => {
                  navigate("/hospital-search");
                }}
              >
                예약하기
              </S.Button>
              <S.Button>변경 및 취소</S.Button>
            </S.CalendarButtons>
          </S.CalendarContainer>

          <Inquiry />
        </div>
      </S.Content>
    </S.MainContent>
  );
}
