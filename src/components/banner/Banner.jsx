import * as S from "./Banner.styled";

const exampleData = [
  {
    hpid: "A1100017",
    dutyAddr: "서울특별시 종로구 대학로 101 (연건동)",
    dutyName: "서울대학교병원",
    dutyTel1: "1588-5700",
  },
  {
    hpid: "A1100029",
    dutyAddr: "서울특별시 종로구 새문안로 9, 적십자병원 (평동)",
    dutyName: "서울적십자병원",
    dutyTel1: "02-2002-8000",
  },
];
export function Banner() {
  const userId = sessionStorage.getItem("userId");
  const groupedData = [];
  for (let i = 0; i < exampleData.length; i += 2) {
    groupedData.push(exampleData.slice(i, i + 2));
  }

  return (
    <S.Container>
      <S.Img src="/img/Icon23.png" alt="Icon23" />
      {/* <S.Title>대한민국 No.1 의료 통합 플랫폼</S.Title> */}
      {/* {groupedData.map((group, index) => (
        <S.CardGroup key={index}>
          {group.map((hospital) => (
            <S.Card key={hospital.hpid}>
              <S.HospitalName>{hospital.dutyName}</S.HospitalName>
              <S.Content>
                <S.HospitalAddr>{hospital.dutyAddr}</S.HospitalAddr>
                <S.HospitalTel>{hospital.dutyTel1}</S.HospitalTel>
              </S.Content>
            </S.Card>
          ))}
        </S.CardGroup>
      ))} */}
    </S.Container>
  );
}
