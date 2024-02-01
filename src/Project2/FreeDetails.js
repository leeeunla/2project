import { useParams } from "react-router-dom";
import styled from "styled-components";

//상세페이지(게시판에서 글을 클릭시 보이게 하려는 것으로 만듬!)
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function FreeDetails() {
  const data = [
    {},
    {
      heading: "1",
      title: "오늘 점심 뭐먹지?",
      text: "점심 뭐 먹을지 추천좀 대신 먹어드림ㅋ",
      writer: "dnmks68",
      createDate: "2024-02-05",
    },
    {
      heading: "2",
      title: "내가 재미있는 얘기해줄까?",
      text: "주말 오려면 2일 남음ㅋㅋㅋ ",
      writer: "hom",
      createDate: "2024-02-06",
    },
    {
      heading: "3",
      title: "아몬드가 죽으면?",
      text: "다이아몬드ㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      writer: "foge",
      createDate: "2024-02-07",
    },
    {
      heading: "4",
      title: "운영진들은 난이도 하향해라",
      text: "난이도 실화냐고 니네도 못 꺠는 게임 우리도 깨라고 하지 마라! 난이도 하향해라!!",
      writer: "tom",
      createDate: "2024-02-08",
    },
    {
      heading: "5",
      title: "이야 패치한 거 봄?",
      text: "패치한 거 겁나 개 같던데 자게 보긴 한데?",
      writer: "longs",
      createDate: "2024-02-09",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedFree = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>자유게시판</h2>
        {selectedFree ? (
          <>
            {selectedFree.title && <h3>{selectedFree.title}</h3>}
            {selectedFree.text && <p>{selectedFree.text}</p>}
            <p>작성자: {selectedFree.writer}</p>
            <p>작성일: {selectedFree.createDate}</p>
          </>
        ) : (
          <p>선택한 자유 정보가 없습니다.</p>
        )}
        <div>
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            style={{ width: "150px", padding: "5px" }}
          ></input>
          <button style={{ padding: "5px" }}>등록</button>
        </div>
      </Container>
    </>
  );
}
