import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 10% 35% 35% 20%;
  text-align: center;
`;

export function GameObject() {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetGameObject();
  }, []);

  async function apiGetGameObject() {
    const response = await fetch(`http://localhost:8080/api/board/gameobject`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      setData(response.data);
    } else {
      setData([
        {
          author: "",
          title: "게시글이 존재하지 않습니다",
          createAt: "",
        },
      ]);
    }
  }

  return (
    <>
      <h2 style={{ borderBottom: "1px solid white" }}>게임오브젝트 (구조물)</h2>
      <Container>
        <p>머릿말</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
        {data?.map((object, index) => (
          <>
            <p>{index + 1}</p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/Object/${object.id}`}
              >
                {object.title}
              </Link>
            </p>
            <p>{object.author.username}</p>
            <p>{object.createAt.substr(0, 10)}</p>
          </>
        ))}
      </Container>
    </>
  );
}
