import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState) {
      alert("이미 로그인되어 있습니다");
      navigate("/");
    }
  }, []);

  function openpopup() {
    window.open("find", "_blank", "width=500,height=300");
  }

  async function apiLogin() {
    const user = {
      username: id,
      password: password,
    };

    const response = await fetch("http://localhost:8080/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      const loginState = {
        username: response.data.username,
        authorities: response.data.authoritySet,
        token: response.data.token,
      };
      sessionStorage.setItem("loginState", JSON.stringify(loginState));
      navigate("/");
    } else {
      if (response.resultCode === "ERROR") {
        const loginState = {
          username: response.data.username,
          authorities: response.data.authoritySet,
          token: response.data.token,
        };
        sessionStorage.setItem("loginState", JSON.stringify(loginState));
        navigate("/login");
      }
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
            onClick={apiLogin}
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
