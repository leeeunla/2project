import { useState } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import PasswordChange from "./PasswordChange";
import Withdrawal from "./Withdrawal";
import Gameinformation from "./Gameinformation";
import Postmanagement from "./Postmanagement";
import Account from "./Account";

const Container = styled.div`
  border: 1px solid black;
  width: 1000px;
  display: flex;
  flex-direction: column;
`;
const Mypage = () => {
  const [tab, setTab] = useState("회원정보");

  const tabClick = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <Container>
        <div>
          <h2>내정보</h2>
          <p onClick={() => tabClick("계정관리")}>계정관리</p>
          <p onClick={() => tabClick("게임정보")}>게임정보</p>
          <p onClick={() => tabClick("게시물관리")}>게시물 관리</p>
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
