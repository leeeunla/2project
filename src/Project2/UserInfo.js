import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const UserInfo = () => {
  // 개인정보 상태 관리
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  // 입력값 변경 이벤트 처리
  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 수정 버튼 클릭 이벤트 처리
  const handleUpdate = () => {
    // 개인정보 수정 로직 작성
    // 서버로 수정된 개인정보 전송 등의 작업 수행
    console.log("개인정보 수정 완료");
  };

  // 취소 버튼 클릭 이벤트 처리
  const handleCancel = () => {
    // 수정 취소 로직 작성
    // 이전 페이지로 이동 등의 작업 수행
    console.log("수정 취소");
  };

  return (
    <Container>
      <div>
        <h2>개인정보 수정</h2>
      </div>
      <div style={{ margin: "10px" }}>
        <label style={{ margin: "10px" }}>
          아이디: &nbsp;
          <input
            type="text"
            placeholder=""
            value={id}
            onChange={handleIdChange}
          />
        </label>
      </div>
      <div style={{ margin: "10px" }}>
        <label style={{ margin: "10px" }}>
          이름: &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder=""
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div style={{ margin: "10px" }}>
        <label style={{ margin: "10px" }}>
          닉네임: &nbsp;
          <input
            type="text"
            placeholder=""
            value={nickname}
            onChange={handleNicknameChange}
          />
        </label>
      </div>
      <div style={{ margin: "10px" }}>
        <label style={{ margin: "10px" }}>
          이메일: &nbsp;
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div style={{ margin: "20px" }}>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={handleUpdate}
        >
          확인
        </button>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={handleCancel}
        >
          취소
        </button>
      </div>
    </Container>
  );
};

export default UserInfo;
