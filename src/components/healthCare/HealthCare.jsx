import * as S from "./HealthCare.styled";

export function HealthCare({ title }) {
  return (
    <S.Container>
      <S.Title>
        <span>{title}</span>
        <S.Value>"89 g/dL"</S.Value>
      </S.Title>
      <div></div>
    </S.Container>
  );
}
