import styled from "styled-components";

const Container = styled.div``;
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
            border: "1px solid black",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
            marginLeft: "150px",
          }}
        >
          <p>아이디:</p>
          <p>닉네임:</p>
        </div>
        <div>
          <p>층을 많이 올라간 횟수 : </p>
        </div>
      </Container>
    </>
  );
};
export default Gameinformation;
