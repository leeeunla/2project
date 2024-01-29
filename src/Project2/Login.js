import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid white;
  border-radius: 15px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
`;
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url("https://img.freepik.com/premium-photo/abstract-color-pastel-background-a-soft-sky-with-cloud-background-in-pastel-color_6529-331.jpg"); */
  background-image: url("https://cdn.pixabay.com/photo/2018/04/19/11/58/flower-3332961_1280.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
`;

export function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    e.preventDefault();
  }
  function openpopup() {
    window.open("find", "_blank", "width=500,height=300");
  }
  return (
    <>
      <Contanier>
        <BackgroundImage />
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
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
