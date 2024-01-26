import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Free() {
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid black" }}>자유 게시판</h2>
        <table>
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th>말머리</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>15</td>
              <td>ㅋㅋㅋㅋㅋ</td>
              <td>개미핥기</td>
              <td>2024-02-15</td>
            </tr>
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
