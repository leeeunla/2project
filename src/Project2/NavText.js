import styled from "styled-components";
import { Header } from "./Header";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

const Container = styled.div``;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgb(100, 149, 237);
  position: relative;
  z-index: 2;
`;
const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  left: 0;
  right: 0;
  background-image: url("https://cdn.pixabay.com/photo/2022/06/08/05/47/stars-7249785_1280.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -100;
`;

export function NavText() {
  const navigate = useNavigate();
  const GameStart = () => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (!loginState) {
      alert("로그인 하세요");
      navigate("/login");
    } else {
      alert("로그인 확인되었습니다");
      navigate("/gamestart");
    }
  };

  return (
    <>
      <Container>
        <BG />
        <Div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h2 style={{ margin: "1rem", color: "white" }}>링크의 모험</h2>
          </Link>

          <div style={{ margin: "15px" }}>
            <Link to="/signup">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                회원가입
              </button>
            </Link>
            <Link to="/login">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginRight: "15px",
                  cursor: "pointer",
                }}
              >
                로그인
              </button>
            </Link>

            <Link to="/admin/login">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginRight: "15px",
                  cursor: "pointer",
                }}
              >
                관리자 로그인
              </button>
            </Link>

            <button
              onClick={GameStart}
              style={{
                padding: "20px",
                backgroundImage: "linear-gradient(to right, #6495Ed, #4682B4)",
                borderWidth: "1px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              게임 시작
            </button>
          </div>
        </Div>

        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}
