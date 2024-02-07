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
const GameMapinfo = () => {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetGameMap();
  }, []);

  async function apiGetGameMap() {
    const response = await fetch(
      `http://localhost:8080/api/board/gamemapinfo`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

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
      <h2 style={{ borderBottom: "1px solid white", color: "white" }}>
        맵 정보{" "}
      </h2>
      <Container>
        <p>머릿말</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
        {data?.map((map, index) => (
          <>
            <p>{index + 1}</p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/Map/${map.id}`}
              >
                {map.title}
              </Link>
            </p>
            <p>{map.author.username}</p>
            <p>{map.createAt.substr(0, 10)}</p>
          </>
        ))}
      </Container>
    </>
  );
};
export default GameMapinfo;
