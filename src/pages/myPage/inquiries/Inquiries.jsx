import * as S from "./Inquiries.styled";

export function Inquiries() {
  const inquiries = [
    {
      title: "비밀번호",
      content: "비밀번호 바꾸는 방법 알려주세요",
      date: "2024-06-06",
      status: "접수완료", // 접수완료, 답변완료
    },
  ];

  return (
    <S.Container>
      <S.Title>
        <h1 style={{ margin: "2em 0 0 4em" }}>문의 내역</h1>
      </S.Title>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>번호</S.TableHeader>
            <S.TableHeader>문의 제목</S.TableHeader>
            <S.TableHeader>문의 내용</S.TableHeader>
            <S.TableHeader>문의 날짜</S.TableHeader>
            <S.TableHeader>상태</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {inquiries.length === 0 ? (
            <S.TableRow>
              <S.TableCell colSpan="5">
                <S.EmptyMessage>문의 내역이 없습니다.</S.EmptyMessage>
              </S.TableCell>
            </S.TableRow>
          ) : (
            inquiries.map((inquiry, index) => (
              <S.TableRow key={index}>
                <S.TableCell>{index + 1}</S.TableCell>
                <S.TableCell>{inquiry.title}</S.TableCell>
                <S.TableCell>{inquiry.content}</S.TableCell>
                <S.TableCell>{inquiry.date}</S.TableCell>
                <S.TableCell>{inquiry.status}</S.TableCell>
              </S.TableRow>
            ))
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
