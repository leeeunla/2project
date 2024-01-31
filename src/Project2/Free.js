import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Free() {
  const data = [
    {
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      heading: "1",
      title: "오늘 점심 뭐먹지?",
      writer: "dnmks68",
      cTime: "2024-02-05",
    },
    {
      heading: "2",
      title: "내가 재미있는 얘기해줄까?",
      writer: "hom",
      cTime: "2024-02-06",
    },
    {
      heading: "3",
      title: "아몬드가 죽으면?",
      writer: "foge",
      cTime: "2024-02-07",
    },
    {
      heading: "4",
      title: "운영진들은 난이도 하향해라",
      writer: "tom",
      cTime: "2024-02-08",
    },
    {
      heading: "5",
      title: "이야 패치한 거 봄?",
      writer: "longs",
      cTime: "2024-02-09",
    },
  ];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid black" }}>자유 게시판</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((free, index) => (
              <tr key={index}>
                <td>{free.heading}</td>
                <td>{free.title}</td>
                <td>{free.writer}</td>
                <td>{free.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/witing">
            <button>글쓰기</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
