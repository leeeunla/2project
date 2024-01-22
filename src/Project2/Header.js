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

  return (
    <>
      <Container onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
        <div>
          <h2 style={{ cursor: "pointer" }}>새소식</h2>
          {menuOpen && (
            <div>
              <p>공지사항</p>
              <p>업데이트</p>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ cursor: "pointer" }}>정보</h2>
          {menuOpen && (
            <div>
              <p>게임 정보</p>
              <p>게임 오브젝트</p>
              <p>맵 정보</p>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ cursor: "pointer" }}>커뮤니티</h2>
          {menuOpen && (
            <div>
              <p>질문과 답변</p>
              <p>공략 게시판</p>
              <p>자유 게시판</p>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ cursor: "pointer" }}>고객센터</h2>
          {menuOpen && (
            <div>
              <p>1:1 문의</p>
              <p>관리자페이지</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
