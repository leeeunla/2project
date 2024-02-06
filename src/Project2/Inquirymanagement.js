import styled from "styled-components";

//1:1 문의 관리(관리자 게시판)
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px;
  gap: 20px;
`;
const Inquirymanagement = () => {
  return (
    <>
      <Container>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "100px",
            height: "100px",
          }}
        >
          <p>미답변</p>
          <p>답변완료</p>
        </div>
        <div>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "1000px",
              height: "500px",
            }}
          >
            <h2>미답변</h2>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "1000px",
            height: "500px",
          }}
        >
          <h2>답변완료</h2>
        </div>
      </Container>
    </>
  );
};
export default Inquirymanagement;
