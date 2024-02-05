import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function UpdateDetalis() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiGetUpdateId(id);
  }, []);

  async function apiGetUpdateId(id) {
    const response = await fetch(`http://localhost:8080/api/board-any/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      setData(response.data);
    } else {
      if (response.resultCode === "ERROR") {
        setData(response.data);
      }
    }
  }

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>업데이트</h2>
        {data ? (
          <>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <p>작성자: {data.author.username}</p>
            <p>작성일: {data.createAt}</p>
          </>
        ) : (
          <p>선택한 업데이트 정보가 없습니다.</p>
        )}
        <Link to="/board/1">
          <GiHamburgerMenu
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color: "white",
              border: "1px solid white",
            }}
          />
        </Link>
      </Container>
    </>
  );
}
