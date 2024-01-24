// 계정관리(개인정보수정, 비밀번호변경, 회원탈퇴가 들어갈 예정임.)

import { useState } from "react";
import PasswordChange from "./PasswordChange";
import UserInfo from "./UserInfo";
import Withdrawal from "./Withdrawal";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 15px;
`;
const Account = () => {
  const [tab, setTab] = useState("내정보");

  const tabClick = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <Container>
        <div>
          <h2>계정관리</h2>
          <p onClick={() => tabClick("개인정보")} style={{ cursor: "pointer" }}>
            개인정보
          </p>
          <p
            onClick={() => tabClick("비밀번호변경")}
            style={{ cursor: "pointer" }}
          >
            비밀번호변경
          </p>
          <p onClick={() => tabClick("회원탈퇴")} style={{ cursor: "pointer" }}>
            회원탈퇴
          </p>
        </div>
        <div style={{ paddingLeft: "50px" }}>
          {tab === "개인정보" && <UserInfo />}
          {tab === "비밀번호변경" && <PasswordChange />}
          {tab === "회원탈퇴" && <Withdrawal />}
        </div>
      </Container>
    </>
  );
};
export default Account;
