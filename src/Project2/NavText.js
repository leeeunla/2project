import styled from "styled-components";
import { Header } from "./Header";
import { Link, Outlet } from "react-router-dom";
import GameSwiper from "./GameSwiper";
import { Giode } from "./Giode";
import { Put } from "./Put";
import { Footer } from "./Footer";

const Container = styled.div``;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe1e6;
`;
export function NavText() {
  return (
    <>
      <Container>
        <Div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h2 style={{ margin: "1rem" }}>링크의 모험</h2>
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
            <button
              style={{
                padding: "20px",
                backgroundColor: "#FFE3EE",
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
        <GameSwiper />
        <Outlet />
        <br />
        <Put />
        <br />
        <br />
        <br />
        <br />
        <Giode />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Container>
    </>
  );
}
