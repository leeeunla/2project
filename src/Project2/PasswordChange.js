import styled from "styled-components";

//비밀 번호 변경
const Container = styled.div``;

const PasswordChange = () => {
  return (
    <>
      <Container>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>비밀 번호 변경</h2>
          <label style={{ margin: "10px" }}>
            현재비밀번호 &nbsp;
            <input type="password" placeholder="" style={{ padding: "5px" }} />
          </label>
          <label style={{ margin: "10px" }}>
            새비밀번호 &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" placeholder="" style={{ padding: "5px" }} />
          </label>
          <label style={{ margin: "10px" }}>
            비밀번호 확인&nbsp;
            <input type="password" placeholder="" style={{ padding: "5px" }} />
          </label>
        </div>
        <div style={{ margin: "20px" }}>
          <button style={{ margin: "5px", padding: "5px" }}>확인</button>
          <button style={{ margin: "5px", padding: "5px" }}>새로 입력</button>
        </div>
      </Container>
    </>
  );
};
export default PasswordChange;
