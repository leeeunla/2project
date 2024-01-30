import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Game() {
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>게임정보</h2>
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
              <td>1</td>
              <td>게임조작법</td>
              <td>운영자</td>
              <td>2024-02-15</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
