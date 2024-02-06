import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  async function apiLogout() {
    sessionStorage.removeItem("loginState");

    alert("로그아웃 되었습니다");
    navigate("/");
  }
  return (
    <>
      <button onClick={apiLogout}>로그아웃</button>
    </>
  );
};

export default Logout;
