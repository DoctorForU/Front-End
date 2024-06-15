import * as S from "../Prescription.styled";

const exampleData = {
  id: 2,
  drugName: "펠루비정(펠루비프로펜)",
  drugEffect:
    "1. 다음 질환의 증상이나 징후의 완화: 골관절 염, 류마티스관절염, 요통(허리통증)\n2. 다음 질환의 해열: 급성 상기도염')",
  ingredient: "cerpodoxime proxetil",
  amount: 1, // 1회 투약량
  frequency: 1, // 1회 투여횟수
  prescribeDays: 4, // 총 투약일수
};

export function Medication() {
  return (
    <S.Content
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "none",
        marginBottom: "50px",
      }}
    >
      <S.Title
        style={{
          justifyContent: "center",
          width: "95%",
          height: "50px",
          marginTop: "40px",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          처방조제정보
        </span>
      </S.Title>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>번호</S.TableHeader>
            <S.TableHeader>약품명</S.TableHeader>
            <S.TableHeader>성분명</S.TableHeader>
            <S.TableHeader>1회 투약량</S.TableHeader>
            <S.TableHeader>1회 투여횟수</S.TableHeader>
            <S.TableHeader>1회 투약일수</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {exampleData.length === 0 ? (
            <S.TableRow>
              <S.TableCell colSpan="6">
                <S.EmptyMessage>처방 내역이 없습니다.</S.EmptyMessage>
              </S.TableCell>
            </S.TableRow>
          ) : (
            <S.TableRow>
              <S.TableCell>{exampleData.id}</S.TableCell>
              <S.TableCell>{exampleData.drugName}</S.TableCell>
              <S.TableCell>{exampleData.ingredient}</S.TableCell>
              <S.TableCell>{exampleData.amount}</S.TableCell>
              <S.TableCell>{exampleData.frequency}</S.TableCell>
              <S.TableCell>{exampleData.prescribeDays}</S.TableCell>
            </S.TableRow>
          )}
        </tbody>
      </S.Table>
    </S.Content>
  );
}
