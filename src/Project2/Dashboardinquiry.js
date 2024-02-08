import styled from "styled-components";

//대시보드 1:1 문의
const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  height: 500px;
`;
export function Dashboardinquiry() {
  return (
    <>
      <Container>
        <div>
          <h2>1:1문의 질문</h2>
        </div>
      </Container>
    </>
  );
}
