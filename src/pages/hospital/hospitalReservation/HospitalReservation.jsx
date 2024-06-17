import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, Layout } from "../../../components";
import { getHospitalReservation, postHospitalReservation } from "../../../api";

//import { exampleData } from "./Data";
import dayjs from "dayjs";
import * as S from "./HospitalReservation.styled";

export function HospitalReservation() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedReservations, setSelectedReservations] = useState([]);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    handleReservation();
  }, []);

  const handleReservation = async () => {
    const res = await getHospitalReservation(params.hpid);
    console.log(res);
    if (res) {
      setData(res);
    } // else setData(exampleData);
  };

  useEffect(() => {
    handleSelectReservation();
  }, [selectedDay]);

  const handleSelectReservation = () => {
    // 선택 날짜 -> 예약 가능한 타임테이블
    const dayOfWeek = dayjs(selectedDay).format("dddd").toLowerCase(); // 요일 출력
    const reservations = data[dayOfWeek] || []; // 요일 선택
    setSelectedReservations(reservations);
  };

  const onReservation = async (time) => {
    const item = sessionStorage.getItem("userId");
    if (item === null) {
      alert("로그인 후 이용가능한 서비스입니다.");
      navigate("/auth/login");
    }

    const data = {
      userId: item,
      hpid: params.hpid,
      date: dayjs(selectedDay).format("YYYY-MM-DD"),
      time: time,
    };
    console.log(data);

    const res = await postHospitalReservation(data);
    if (res) {
      alert("예약 완료되었습니다.");
      navigate("/mypage/dashboard");
    } else alert("잘못된 요청입니다.");
  };

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <h1 style={{ fontSize: "40px" }}>진료 예약</h1>
          <S.InfoContainer>
            <S.Img src="/img/Icon21.png" alt="Icon21" />
            <div style={{ marginLeft: "20px" }}>
              <h2>{data.dutyName}</h2>
              <span>주소: {data.dutyAddr}</span>
              <p>전화번호: {data.dutyTel1}</p>
              <span>
                진료 시간: {data.dutyTime1c} - {data.dutyTime1s}
              </span>
            </div>
          </S.InfoContainer>
          <S.ReservationContainer>
            <Calendar setSelectedDay={setSelectedDay} />
            <S.TimeContainer>
              <h3>예약 시간</h3>
              <S.Line></S.Line>
              <S.Table>
                {selectedReservations.map((item, index) => (
                  <S.TableRow key={index}>
                    <S.TableCell>{item}</S.TableCell>
                    <S.TableCell>
                      <S.Button
                        onClick={() => {
                          onReservation(item);
                        }}
                      >
                        예약하기
                      </S.Button>
                    </S.TableCell>
                  </S.TableRow>
                ))}
              </S.Table>
            </S.TimeContainer>
          </S.ReservationContainer>
        </S.Content>
      </S.Container>
    </Layout>
  );
}
