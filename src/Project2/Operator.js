import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 700px;
  margin-left: -650px;
`;
export function Operator() {
  return (
    <>
      <Container>
        <div>
          <h2>운영자</h2>
        </div>
      </Container>
    </>
  );
}
