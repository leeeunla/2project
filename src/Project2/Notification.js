import styled from "styled-components";

const Contanier = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;

const Notification = () => {
  return (
    <>
      <Contanier>
        <h2 style={{ borderBottom: "1px solid black" }}>공지사항</h2>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Contanier>
    </>
  );
};
export default Notification;
