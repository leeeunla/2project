import styled from "styled-components";

const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  border-radius: 15px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
`;
export function Managerlogin() {
  return (
    <>
      <Contanier>
        <h2>관리자 로그인</h2>
        <div>
          <p>
            <input
              type="text"
              placeholder="아이디"
              style={{
                padding: "12px",
                width: "220px",
              }}
            ></input>
          </p>
          <p>
            <input
              type="password"
              placeholder="비밀번호"
              style={{
                padding: "12px",
                width: "220px",
              }}
            ></input>
          </p>
          <button
            style={{
              padding: "10px",
              marginBottom: "5px",
              width: "100px",
              cursor: "pointer",
            }}
          >
            로그인
          </button>
          <p>회원가입</p>
        </div>
      </Contanier>
    </>
  );
}
