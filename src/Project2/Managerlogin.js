import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState) {
      if (loginState.authorities.includes("ROLE_ADMIN")) {
        alert("이미 로그인되어 있습니다");
        navigate("/admin/dashboard");
      } else {
        alert("관리자 권한이 없습니다");
        navigate("/");
      }
    }
  }, []);

  async function apiLogin() {
    const user = {
      username: id,
      password: password,
    };

    const response = await fetch(
      "http://localhost:8080/api/admin/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      const loginState = {
        username: response.data.username,
        authorities: response.data.authoritySet,
        token: response.data.token,
      };
      sessionStorage.setItem("loginState", JSON.stringify(loginState));
      navigate("/admin/dashboard");
    } else {
      // 에러핸들링 코드 추가
      alert("관리자 권한이 없습니다");
      navigate("/");
    }
  }

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
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="비밀번호"
              style={{
                padding: "12px",
                width: "220px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <button
            onClick={apiLogin}
            style={{
              padding: "10px",
              marginBottom: "5px",
              width: "100px",
              cursor: "pointer",
            }}
          >
            로그인
          </button>
        </div>
      </Contanier>
    </>
  );
}
