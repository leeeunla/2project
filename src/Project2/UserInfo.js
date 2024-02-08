//개인정보 수정!

import styled from "styled-components";

const Container = styled.div``;
const UserInfo = () => {
  return (
    <>
      <Container>
        <div>
          <h2>개인정보 수정</h2>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <label
            style={{
              margin: "10px",
            }}
          >
            아이디: &nbsp;
            <input type="text" placeholder="" />
          </label>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <label
            style={{
              margin: "10px",
            }}
          >
            이름: &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="" />
          </label>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <label
            style={{
              margin: "10px",
            }}
          >
            닉네임: &nbsp;
            <input type="text" placeholder="" />
          </label>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <label style={{ margin: "10px" }}>
            이메일: &nbsp;
            <input type="text" placeholder="" />
          </label>
        </div>
        <div style={{ margin: "20px" }}>
          <button style={{ margin: "5px", padding: "5px" }}>확인</button>
          <button style={{ margin: "5px", padding: "5px" }}>취소</button>
        </div>
      </Container>
    </>
  );
};
export default UserInfo;
