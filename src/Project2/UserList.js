import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { all } from "axios";

const Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 25px;
`;

const UserList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    apiGetUserList();
  }, []);
  async function apiGetUserList() {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState && loginState.token) {
      const response = await fetch(`http://localhost:8080/api/alluser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginState.token}`,
        },
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        setData(response.data);
      } else {
        if (response.resultCode === "ERROR") {
        }
      }
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

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
            onClick={apiGetUserList}
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
          {data?.map((item, index) => (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                }}
              >
                <p>{index + 1}</p>
                <p>{item.username}</p>
                <p>{item.email}</p>
              </div>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default UserList;
