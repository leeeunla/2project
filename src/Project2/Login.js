import { useState } from "react";
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

export function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Contanier>
        <h1>링크의 모험</h1>
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
              style={{ padding: "12px", width: "220px" }}
            ></input>
          </p>
          <button
            style={{
              width: "150px",
              height: "35px",
              borderRadius: "5px",
              backgroundColor: "lightgray",
              cursor: "pointer",
              borderWidth: "1px",
            }}
          >
            로그인
          </button>
          <div
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <p>회원가입 &#124;</p>
            <p>아이디찾기</p>
          </div>
        </div>
      </Contanier>
    </>
  );
}
