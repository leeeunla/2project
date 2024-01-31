import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function openpopup() {
    window.open("find", "_blank", "width=500,height=300");
  }
  function onSubmit(e) {
    e.preventDefault();
    if (id === "") {
      setError("아이디를 입력해 주세요!");
      return;
    }
    if (password === "") {
      setError("비밀번호를 입력하세요");
      return;
    }
  }
  return (
    <>
      <Contanier>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#6495Ed",
          }}
        >
          <h1>링크의 모험</h1>
        </Link>
        <div>
          <p>
            <input
              type="text"
              placeholder="아이디"
              style={{
                padding: "12px",
                width: "220px",
              }}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="비밀번호"
              style={{ padding: "12px", width: "220px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <button
            style={{
              width: "250px",
              height: "35px",
              borderRadius: "5px",
              backgroundColor: "#6495Ed",
              cursor: "pointer",
              borderWidth: "1px",
              color: "white",
            }}
            onClick={onSubmit}
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
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>회원가입 &#124;</p>
            </Link>
            <div
              onClick={openpopup}
              style={{ textDecoration: "none", color: "" }}
            >
              <p>아이디찾기</p>
            </div>
          </div>
        </div>
      </Contanier>
    </>
  );
}
