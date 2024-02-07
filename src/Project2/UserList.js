import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 25px;
`;

const UserList = () => {
  const [password, setPassword] = useState("");
  const [loginId, setLoginId] = useState("");
  const navigate = useNavigate();
  async function apiUserList() {
    const username = JSON.parse(sessionStorage.getItem("loginState"));
    if (!username) {
      alert("로그인을 해주세요");
      navigate("/admin/login");
    } else {
      const user = {
        username: loginId,
        password: password,
      };
      const response = await fetch(`http://localhost:8080/api/authenticate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => response.json());
      console.log(response);
      if (response.resultCode === "SUCCESS") {
        alert("회원 불러오기가 완료되었습니다");
        navigate("/admin/dashboard");
      } else {
        // 에러핸들링 코드 추가
        if (response.resultCode === "ERROR") {
          alert("회원 불러오기가 완료되지않았습니다. 다시해주세요.");
          navigate("/admin/dashboard");
        }
      }
    }
  }

  return (
    <>
      <div>
        <input type="text" placeholder="검색어를 입력하세요" />
        <CiSearch />
      </div>
      <Container>
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            height: "100px",
          }}
        >
          <h2
            style={{ textAlign: "center", padding: "12px 0" }}
            onClick={apiUserList}
          >
            전체회원
          </h2>
        </div>

        <div
          style={{
            border: "1px solid black",
            width: "1200px",
            height: "700px",
          }}
        >
          <h2>회원목록</h2>
        </div>
      </Container>
    </>
  );
};

export default UserList;
