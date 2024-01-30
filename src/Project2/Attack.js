import { Link } from "react-router-dom";
import styled from "styled-components";

const Contanier = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const Attack = () => {
  return (
    <>
      <Contanier>
        <h2 style={{ borderBottom: "1px solid black" }}>공략 게시판</h2>
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
              <td>코뿔소</td>
              <td>2024-02-15</td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/witing">
            <button>글쓰기</button>
          </Link>
        </div>
      </Contanier>
    </>
  );
};
export default Attack;
