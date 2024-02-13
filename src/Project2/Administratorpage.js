import styled from "styled-components";

import { useEffect, useState } from "react";
import Dashboard1 from "./Dashboard1";
import UserList from "./UserList";
import Boardmanagement from "./Boardmanagement";

import { Link, useNavigate } from "react-router-dom";

//대시보드
const Container = styled.div`
  border: 1px solid black;
  display: flex;
  text-align: center;
  width: 1800px;
`;

const Administratorpage = () => {
  const [click, setClick] = useState("보드");
  const navigate = useNavigate();

  const dashboardclick = (click) => {
    setClick(click);
  };
  async function apiLogout() {
    sessionStorage.removeItem("loginState");

    alert("로그아웃 되었습니다");
    navigate("/");
  }
  useEffect(() => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState) {
      if (loginState.authorities.includes("ROLE_ADMIN")) {
        alert("로그인 되었습니다.");
        navigate("/admin/dashboard");
      } else {
        alert("관리자 권한이 없습니다");
        navigate("/");
      }
    }
  }, []);
  return (
    <>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <button>HOME</button>
      </Link>
      <button onClick={apiLogout}>로그아웃</button>
      <Container>
        <div
          style={{
            backgroundColor: "gray",
            cursor: "pointer",
            padding: "30px",
          }}
        >
          <h2>링크의 모험</h2>
          <p onClick={() => dashboardclick("대시보드")}>대시보드</p>
          <br />
          <h2>사용자관리</h2>
          <p onClick={() => dashboardclick("사용자")}>사용자 목록</p>
          <br />
          <h2>
            컨텐츠 <br /> 관리
          </h2>
          <p onClick={() => dashboardclick("게시판")}>게시판 관리</p>
        </div>
        <div>
          {click === "대시보드" && <Dashboard1 />}
          {click === "사용자" && <UserList />}
          {click === "게시판" && <Boardmanagement />}
        </div>
      </Container>
    </>
  );
};
export default Administratorpage;
