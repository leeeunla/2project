import styled from "styled-components";

const Contanier = styled.div``;
const Notification = () => {
  return (
    <>
      <Contanier>
        <div>
          <h2>공지사항</h2>
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
      </Contanier>
    </>
  );
};
export default Notification;
