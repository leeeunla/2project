import styled from "styled-components";

const Contanier = styled.div``;
const Attack = () => {
  return (
    <>
      <Contanier>
        <div>
          <h2>공략 게시판</h2>
          <table>
            <thead>
              <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            style={{ width: "150px", padding: "5px" }}
          ></input>
          <button style={{ padding: "5px" }}>등록</button>
        </div>
      </Contanier>
    </>
  );
};
export default Attack;
