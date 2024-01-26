import { useState } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import PasswordChange from "./PasswordChange";
import Withdrawal from "./Withdrawal";
import Gameinformation from "./Gameinformation";
import Postmanagement from "./Postmanagement";
import Account from "./Account";
import { hover } from "@testing-library/user-event/dist/hover";

const Container = styled.div`
  border: 1px solid black;
  /* width: 1500px; */
  border-radius: 25px;
`;
const Mypage = () => {
  const [tab, setTab] = useState("회원정보");

  const tabClick = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px",
            borderBottom: "3px solid black",
            alignItems: "center",
          }}
        >
          <h2>내정보</h2>
          <div style={{ display: "flex", margin: "15px", gap: "50px" }}>
            <p onClick={() => tabClick("계정관리")}>계정관리</p>
            <p onClick={() => tabClick("게임정보")}>게임정보</p>
            <p onClick={() => tabClick("게시물관리")}>게시물 관리</p>
          </div>
        </div>
        <div>
          {tab === "계정관리" && <Account />}
          {tab === "게임정보" && <Gameinformation />}
          {tab === "게시물관리" && <Postmanagement />}
        </div>
      </Container>
    </>
  );
};
export default Mypage;
