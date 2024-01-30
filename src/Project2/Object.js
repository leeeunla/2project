import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Object() {
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>
          게임오브젝트 (구조물)
        </h2>
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
              <td>함정</td>
              <td>운영자</td>
              <td>2024-02-15</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
