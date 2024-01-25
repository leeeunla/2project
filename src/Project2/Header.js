import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(255, 235, 255, 1);
  display: flex;
  justify-content: space-around;
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  function closepopup() {
    window.open("/quiry", "_blank", "width=800,height=400");
  }

  return (
    <>
      <Container onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
        <div>
          <h2 style={{ cursor: "pointer" }}>새소식</h2>
          {menuOpen && (
            <div>
              <Link
                to="board/0"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>공지사항</p>
              </Link>
              <Link
                to="board/1"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>업데이트</p>
              </Link>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ cursor: "pointer" }}>정보</h2>
          {menuOpen && (
            <div>
              <Link
                to="board/2"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>게임 정보</p>
              </Link>
              <Link
                to="board/3"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>게임 오브젝트</p>
              </Link>
              <Link
                to="board/4"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>맵 정보</p>
              </Link>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ cursor: "pointer" }}>커뮤니티</h2>
          {menuOpen && (
            <div>
              <Link
                to="board/5"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>질문과 답변</p>
              </Link>
              <Link
                to="board/6"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>공략 게시판</p>
              </Link>
              <Link
                to="board/7"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>자유 게시판</p>
              </Link>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ cursor: "pointer" }}>고객센터</h2>
          {menuOpen && (
            <div>
              <Link
                onClick={closepopup}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>1:1 문의</p>
              </Link>
              <p>관리자페이지</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
