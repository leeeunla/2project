import styled from "styled-components";
import { Header } from "./Header";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { useContext, useEffect, useState } from "react";
import { Login } from "./Login";

const Container = styled.div``;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(to right, #1e90ff, #87cefa);
  position: relative;
  z-index: 2;
`;
const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  left: 0;
  right: 0;
  background-image: url("https://cdn.pixabay.com/photo/2016/03/27/22/06/sea-1284467_640.jpg");
  /* background-image: url("https://cdn.pixabay.com/photo/2023/09/27/21/02/nature-8280318_1280.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -100;
`;

export function NavText() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태
  useEffect(() => {
    // 컴포넌트가 마운트될 때 로그인 상태를 확인하고 설정
    const loginState = sessionStorage.getItem("loginState");
    if (loginState !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  async function apiLogout() {
    sessionStorage.removeItem("loginState");
    setIsLoggedIn(false);

    alert("로그아웃 되었습니다");
    navigate("/");
  }

  async function apiLogin() {
    // 로그인 로직 처리
    // ...

    setIsLoggedIn(true); // 로그인 시 로그인 상태를 true로 변경
  }
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
            {isLoggedIn ? (
              <Link to="/page">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  마이페이지
                </button>
              </Link>
            ) : (
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
            )}

            {isLoggedIn ? (
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                  onClick={apiLogout}
                >
                  로그아웃
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  onClick={apiLogin}
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
            )}

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
                backgroundImage: "linear-gradient(to right, #1e90ff, #87cefa)",
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
