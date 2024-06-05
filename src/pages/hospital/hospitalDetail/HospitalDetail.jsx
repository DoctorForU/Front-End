import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../../components";
import * as S from "./HospitalDetail.styled";
import { getHospitalDetail } from "../../../api";

export function HospitalDetail() {
  const [hospitalData, setHospitalData] = useState(null);
  const [activeTab, setActiveTab] = useState("basic");
  const [error, setError] = useState(null);
  const params = useParams(); // 이게 현재 HPID

  const handleHospitalDetail = async () => {
    try {
      console.log(`Fetching data for HPID: ${params.hpid}`);
      const data = await getHospitalDetail(params.hpid);
      console.log('Received data:', data);
      if (data) {
        setHospitalData(data); // 데이터를 단일 객체로 처리
      } else {
        throw new Error("잘못된 요청입니다.");
      }
    } catch (error) {
      console.error('Error fetching hospital detail:', error);
      setError(error.message || '데이터를 가져오는 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    handleHospitalDetail();
  }, [params.hpid]);

  const renderValue = (value) => {
    if (value === "Y") return "가능";
    if (value === "N") return "불가";
    return value ? value : "정보 없음";
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hospitalData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <S.Container>
        <h1>병원 상세정보</h1>
        <S.Section>
          <S.HospitalInfo>
            <h2>
              {hospitalData.dutyName}{" "}
              <span className="hospital-type">응급진료병원</span>
            </h2>
            <p className="hospital-tel">{hospitalData.dutyTel1}</p>
            <p className="hospital-addr">{hospitalData.dutyAddr}</p>
          </S.HospitalInfo>
        </S.Section>
        <S.TabNav>
          <button
            className={activeTab === "basic" ? "active" : ""}
            onClick={() => setActiveTab("basic")}
          >
            기본정보
          </button>
          <button
            className={activeTab === "beds" ? "active" : ""}
            onClick={() => setActiveTab("beds")}
          >
            병상정보
          </button>
          <button
            className={activeTab === "surgery" ? "active" : ""}
            onClick={() => setActiveTab("surgery")}
          >
            수술가능여부
          </button>
          <button
            className={activeTab === "emergency" ? "active" : ""}
            onClick={() => setActiveTab("emergency")}
          >
            실시간 응급 상황
          </button>
          <button
            className={activeTab === "equipment" ? "active" : ""}
            onClick={() => setActiveTab("equipment")}
          >
            가용가능 장비현황
          </button>
        </S.TabNav>
        {activeTab === "basic" && (
          <S.Section>
            <h3>기본정보</h3>
            <p>진료과목: {hospitalData.dgidIdName}</p>
            <p>진료가능시간</p>
            <p>월요일: {hospitalData.dutyTime1s} - {hospitalData.dutyTime1c}</p>
            <p>화요일: {hospitalData.dutyTime2s} - {hospitalData.dutyTime2c}</p>
            <p>수요일: {hospitalData.dutyTime3s} - {hospitalData.dutyTime3c}</p>
            <p>목요일: {hospitalData.dutyTime4s} - {hospitalData.dutyTime4c}</p>
            <p>금요일: {hospitalData.dutyTime5s} - {hospitalData.dutyTime5c}</p>
            <p>토요일: {hospitalData.dutyTime6s} - {hospitalData.dutyTime6c}</p>
            <p>공휴일: {hospitalData.dutyTime7s} - {hospitalData.dutyTime7c}</p>
            <p>기관설명상세: {hospitalData.dutyInf}</p>
            <p>응급실운영여부: {renderValue(hospitalData.dutyEryn)}</p>
          </S.Section>
        )}
        {activeTab === "beds" && (
          <S.Section>
            <h3>병상정보</h3>
            <S.Table>
              <thead>
                <tr>
                  <th>종류</th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>일반병상</td>
                  <td>{renderValue(hospitalData.hpbdn)}</td>
                </tr>
                <tr>
                  <td>응급실</td>
                  <td>{renderValue(hospitalData.hperyn)}</td>
                </tr>
                <tr>
                  <td>입원실</td>
                  <td>{renderValue(hospitalData.hpgryn)}</td>
                </tr>
                <tr>
                  <td>수술실</td>
                  <td>{renderValue(hospitalData.hvoc)}</td>
                </tr>
                <tr>
                  <td>일반중환자실</td>
                  <td>{renderValue(hospitalData.hpicuyn)}</td>
                </tr>
                <tr>
                  <td>흉부중환자실</td>
                  <td>{renderValue(hospitalData.hpccuyn)}</td>
                </tr>
                <tr>
                  <td>신경중환자실</td>
                  <td>{renderValue(hospitalData.hpcuyn)}</td>
                </tr>
              </tbody>
            </S.Table>
          </S.Section>
        )}
        {activeTab === "surgery" && (
          <S.Section>
            <h3>수술가능여부</h3>
            <S.Table>
              <thead>
                <tr>
                  <th>종류</th>
                  <th>가능여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>응급수술</td>
                  <td>{renderValue(hospitalData.o001)}</td>
                </tr>
                <tr>
                  <td>뇌출혈수술</td>
                  <td>{renderValue(hospitalData.mkioskTy1.trim())}</td>
                </tr>
                <tr>
                  <td>뇌경색수술</td>
                  <td>{renderValue(hospitalData.mkioskTy2.trim())}</td>
                </tr>
                <tr>
                  <td>심근경색수술</td>
                  <td>{renderValue(hospitalData.mkioskTy3.trim())}</td>
                </tr>
                <tr>
                  <td>복부손상의수술</td>
                  <td>{renderValue(hospitalData.mkioskTy4.trim())}</td>
                </tr>
                <tr>
                  <td>사지접합의수술</td>
                  <td>{renderValue(hospitalData.mkioskTy5.trim())}</td>
                </tr>
                <tr>
                  <td>응급내시경</td>
                  <td>{renderValue(hospitalData.mkioskTy6.trim())}</td>
                </tr>
                <tr>
                  <td>응급투석</td>
                  <td>{renderValue(hospitalData.mkioskTy7.trim())}</td>
                </tr>
                <tr>
                  <td>조산산모</td>
                  <td>{renderValue(hospitalData.mkioskTy8.trim())}</td>
                </tr>
                <tr>
                  <td>정신질환수술</td>
                  <td>{renderValue(hospitalData.mkioskTy9.trim())}</td>
                </tr>
                <tr>
                  <td>신생아응급수술</td>
                  <td>{renderValue(hospitalData.mkioskTy10.trim())}</td>
                </tr>
                <tr>
                  <td>중증화상수술</td>
                  <td>{renderValue(hospitalData.mkioskTy11.trim())}</td>
                </tr>
              </tbody>
            </S.Table>
          </S.Section>
        )}
        {activeTab === "emergency" && (
          <S.Section>
            <h3>실시간 응급상황 현황판</h3>
            <S.CardsContainer>
              {[
                { label: "응급실 일반병상", value: hospitalData.o001 },
                { label: "응급실 소아 병상", value: hospitalData.o002 },
                { label: "응급실 음압격리 병상", value: hospitalData.o003 },
                { label: "응급실 일반격리 병상", value: hospitalData.o004 },
                { label: "응급전용 중환자실", value: hospitalData.o005 },
                { label: "내과중환자실", value: hospitalData.o006 },
                { label: "외과중환자실", value: hospitalData.o007 },
                { label: "신생아중환자실", value: hospitalData.o008 },
                { label: "소아 중환자실", value: hospitalData.o009 },
                { label: "소아응급전용 중환자실 병상", value: hospitalData.o010 },
                { label: "신경과중환자실", value: hospitalData.o011 },
                { label: "신경외과중환자실", value: hospitalData.o012 },
                { label: "화상중환자실", value: hospitalData.o013 },
                { label: "외상중환자실", value: hospitalData.o014 },
                { label: "심장내과 중환자실", value: hospitalData.o015 },
                { label: "흉부외과 중환자실", value: hospitalData.o016 },
                { label: "일반 중환자실", value: hospitalData.o017 },
                { label: "중환자실 내 음압격리 병상", value: hospitalData.o018 },
                { label: "응급전용 입원실", value: hospitalData.o019 },
                { label: "소아응급전용 입원 병상", value: hospitalData.o020 },
                { label: "외상전용 입원실", value: hospitalData.o021 },
                { label: "수술실", value: hospitalData.o022 },
                { label: "외상전용 수술실", value: hospitalData.o023 },
                { label: "정신과 폐쇄 병상", value: hospitalData.o024 },
                { label: "음압 격리 병상", value: hospitalData.o025 },
              ].map((item, index) => (
                <S.Card key={index}>
                  <h4>{item.label}</h4>
                  <p>{renderValue(item.value)}</p>
                </S.Card>
              ))}
            </S.CardsContainer>
          </S.Section>
        )}
        {activeTab === "equipment" && (
          <S.Section>
            <h3>실시간 사용가능 장비</h3>
            <S.Table>
              <thead>
                <tr>
                  <th>종류</th>
                  <th>가능여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>분만실</td>
                  <td>{renderValue(hospitalData.o026)}</td>
                </tr>
                <tr>
                  <td>CT</td>
                  <td>{renderValue(hospitalData.o027)}</td>
                </tr>
                <tr>
                  <td>MRI</td>
                  <td>{renderValue(hospitalData.o028)}</td>
                </tr>
                <tr>
                  <td>혈관촬영기</td>
                  <td>{renderValue(hospitalData.o029)}</td>
                </tr>
                <tr>
                  <td>인공호흡기</td>
                  <td>{renderValue(hospitalData.o030)}</td>
                </tr>
                <tr>
                  <td>인공호흡기(소아)</td>
                  <td>{renderValue(hospitalData.o031)}</td>
                </tr>
                <tr>
                  <td>인큐베이터</td>
                  <td>{renderValue(hospitalData.o032)}</td>
                </tr>
                <tr>
                  <td>CRRT</td>
                  <td>{renderValue(hospitalData.o033)}</td>
                </tr>
                <tr>
                  <td>ECMO</td>
                  <td>{renderValue(hospitalData.o034)}</td>
                </tr>
                <tr>
                  <td>치료적 저체온 요법</td>
                  <td>{renderValue(hospitalData.o035)}</td>
                </tr>
                <tr>
                  <td>화상전용 처치실</td>
                  <td>{renderValue(hospitalData.o036)}</td>
                </tr>
                <tr>
                  <td>고압산소치료기</td>
                  <td>{renderValue(hospitalData.o037)}</td>
                </tr>
              </tbody>
            </S.Table>
          </S.Section>
        )}
      </S.Container>
    </Layout>
  );
}
