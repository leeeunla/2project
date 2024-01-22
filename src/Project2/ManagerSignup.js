import styled from "styled-components";

const Contanier = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export function ManagerSignup() {
  return (
    <>
      <Contanier>
        <h2>관리자 회원가입</h2>
        <div>
          <label>
            <input
              type="text"
              name="id"
              placeholder="아이디"
              style={{ padding: "10px", margin: "10px" }}
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              type="name"
              name="name"
              placeholder="이름"
              style={{ padding: "10px", margin: "10px" }}
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{ padding: "10px", margin: "10px" }}
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="email"
              placeholder="이메일"
              style={{ padding: "10px", margin: "10px" }}
            />
            @
            <input
              type="text"
              name="email"
              placeholder="입력"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <button
            style={{
              padding: "10px",
              margin: "10px",
              width: "120px",
            }}
          >
            확인
          </button>
        </div>
      </Contanier>
    </>
  );
}
