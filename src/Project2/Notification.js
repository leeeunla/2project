import styled from "styled-components";

const Contanier = styled.div``;
const Th = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  height: 45px;
  padding-top: 20px;
`;
const Notification = () => {
  return (
    <>
      <Contanier>
        <div>
          <h2>공지사항</h2>
          <table style={{ marginLeft: "auto", marginRight: "auto" }}>
            <thead>
              <tr
                style={{
                  display: "flex",
                  gap: "200px",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <Th>글번호</Th>
                <Th>제목</Th>
                <Th>작성자</Th>
                <Th>작성일</Th>
              </tr>
            </thead>
            <tbody style={{ marginLeft: "auto", marginRight: "auto" }}>
              <tr
                style={{
                  display: "flex",
                  gap: "200px",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  padding: "20px",
                }}
              >
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
