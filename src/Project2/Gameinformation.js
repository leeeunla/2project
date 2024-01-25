import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;
`;
// 게임 정보
const Gameinformation = () => {
  return (
    <>
      <Container>
        <div>
          <img />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
            marginLeft: "250px",
            border: "1px solid black",
            borderRadius: "50px",
            width: "500px",
          }}
        >
          <p>아이디:</p>
          <p>닉네임:</p>
        </div>
        <div style={{ textAlign: "center", marginRight: "250px" }}>
          <p>층을 많이 올라간 횟수 : </p>
        </div>
      </Container>
    </>
  );
};
export default Gameinformation;
