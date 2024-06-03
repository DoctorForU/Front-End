import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../../components";
import * as S from "./HospitalDetail.styled";
import { getHospitalDetail } from "../../../api";

export function HospitalDetail() {
  const [hospitalData, setHospitalData] = useState(null);
  const [activeTab, setActiveTab] = useState("basic");
  const params = useParams();

  const handleHospitalDetail = async () => {
    const res = await getHospitalDetail(params.hpid);
    if (res) {
      setHospitalData(res.data);
    } else alert("잘못된 요청입니다.");
  };

  useEffect(() => {
    handleHospitalDetail();
  }, []);

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
        </S.TabNav>
        {activeTab === "basic" && (
          <S.Section>
            <h3>기본정보</h3>
            <p>{hospitalData.dutyInf}</p>
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
                  <td>{hospitalData.hpbdn}</td>
                </tr>
                <tr>
                  <td>응급실</td>
                  <td>{hospitalData.hperyn}</td>
                </tr>
                <tr>
                  <td>수술실</td>
                  <td>{hospitalData.hvoc}</td>
                </tr>
                {/* Add more rows as necessary */}
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
                  <td>{hospitalData.MKioskTy25 === "Y" ? "가능" : "불가"}</td>
                </tr>
                <tr>
                  <td>뇌출혈수술</td>
                  <td>{hospitalData.MKioskTy1 === "Y" ? "가능" : "불가"}</td>
                </tr>
                <tr>
                  <td>뇌경색수술</td>
                  <td>{hospitalData.MKioskTy2 === "Y" ? "가능" : "불가"}</td>
                </tr>
                {/* Add more rows as necessary */}
              </tbody>
            </S.Table>
          </S.Section>
        )}
      </S.Container>
    </Layout>
  );
}
