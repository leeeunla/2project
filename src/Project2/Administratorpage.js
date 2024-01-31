import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { Dashboardchart } from "./Dashboardchart";
import { useState } from "react";
import Dashboard1 from "./Dashboard1";
import UserList from "./UserList";
import Boardmanagement from "./Boardmanagement";
import Inquirymanagement from "./Inquirymanagement";

//대시보드
const Container = styled.div`
  border: 1px solid black;
  display: flex;
  text-align: center;
`;
const Administratorpage = () => {
  const [click, setClick] = useState("보드");

  const dashboardclick = (click) => {
    setClick(click);
  };
  return (
    <>
      <Container>
        <div style={{ backgroundColor: "gray", cursor: "pointer" }}>
          <h2>링크의 모험</h2>
          <p>운영자</p>
          <p onClick={() => dashboardclick("대시보드")}>대시보드</p>
          <br />
          <h2>사용자관리</h2>
          <p onClick={() => dashboardclick("사용자")}>사용자 목록</p>
          <br />
          <h2>컨텐츠 관리</h2>
          <p onClick={() => dashboardclick("게시판")}>게시판 관리</p>
          <p onClick={() => dashboardclick("문의")}>1:1 문의 관리</p>
        </div>
        <div>
          {click === "대시보드" && <Dashboard1 />}
          {click === "사용자" && <UserList />}
          {click === "게시판" && <Boardmanagement />}
          {click === "문의" && <Inquirymanagement />}
        </div>
      </Container>
    </>
  );
};
export default Administratorpage;
