import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;

  text-align: center;
`;
// 게임 정보
const Gameinformation = () => {
  return (
    <>
      <Container>
        <div></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
            marginLeft: "250px",

            width: "500px",
          }}
        >
          <img src="1x.png" />
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
