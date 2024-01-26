import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuBox = styled.div`
  position: relative;
`;
const ContainerTitle = styled.div`
  position: relative;
  background-color: rgba(255, 235, 255, 1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  z-index: 2;
`;
const ContainerSlide = styled(ContainerTitle)`
  z-index: 1;
  top: -140px;
  left: 0;
  transition: all 0.3s ease;
  &.menuOpen {
    top: 0;
  }
`;
const Title = styled.h2`
  text-align: center;
`;
const SubTitleDiv = styled.div`
  text-align: center;
`;

export function Header() {
  const [menuClass, setMenuClass] = useState("");
  const handleMenuOpen = () => {
    setMenuClass("menuOpen");
  };
  const handleMenuClose = () => {
    setMenuClass("");
  };
  return (
    <>
      <MenuBox onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
        <ContainerTitle>
          <div>
            <Title>새소식</Title>
          </div>
          <div>
            <Title>정보</Title>
          </div>
          <div>
            <Title>커뮤니티</Title>
          </div>
          <div>
            <Title>고객센터</Title>
          </div>
        </ContainerTitle>
        <ContainerSlide className={menuClass}>
          <SubTitle />
        </ContainerSlide>
      </MenuBox>
    </>
  );
}

function SubTitle() {
  function closepopup() {
    const newWindow = window.open("/quiry", "_blank", "width=800,height=400");
    newWindow.moveTo(100, 300);
  }
  return (
    <>
      <SubTitleDiv>
        <Link to="board/0" style={{ textDecoration: "none", color: "black" }}>
          <p>공지사항</p>
        </Link>
        <Link to="board/1" style={{ textDecoration: "none", color: "black" }}>
          <p>업데이트</p>
        </Link>
      </SubTitleDiv>

      <SubTitleDiv>
        <Link to="board/2" style={{ textDecoration: "none", color: "black" }}>
          <p>게임 정보</p>
        </Link>
        <Link to="board/3" style={{ textDecoration: "none", color: "black" }}>
          <p>게임 오브젝트</p>
        </Link>
        <Link to="board/4" style={{ textDecoration: "none", color: "black" }}>
          <p>맵 정보</p>
        </Link>
      </SubTitleDiv>

      <SubTitleDiv>
        <Link to="board/5" style={{ textDecoration: "none", color: "black" }}>
          <p>질문과 답변</p>
        </Link>
        <Link to="board/6" style={{ textDecoration: "none", color: "black" }}>
          <p>공략 게시판</p>
        </Link>
        <Link to="board/7" style={{ textDecoration: "none", color: "black" }}>
          <p>자유 게시판</p>
        </Link>
      </SubTitleDiv>

      <SubTitleDiv>
        <div
          onClick={closepopup}
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        >
          <p>1:1 문의</p>
        </div>
        <p>관리자페이지</p>
      </SubTitleDiv>
    </>
  );
}
