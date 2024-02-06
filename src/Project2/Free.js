import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  color: white;
  display: flex;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 10% 35% 35% 20%;
  text-align: center;
`;
export function Free() {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetFree();
  }, []);
  async function apiGetFree() {
    const response = await fetch(`http://localhost:8080/api/board/free`, {
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
      <h2 style={{ borderBottom: "1px solid white", color: "white" }}>
        자유 게시판
      </h2>
      <Container>
        <p>머릿말</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
        {data?.map((free, index) => (
          <>
            <p>{index + 1}</p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/free/${free.id}`}
              >
                {free.title}
              </Link>
            </p>
            <p>{free.author.username}</p>
            <p>{free.createAt.substr(0, 10)}</p>
          </>
        ))}
      </Container>
      <div style={{ textAlign: "end" }}>
        <Link to="/writing/free">
          <button>글쓰기</button>
        </Link>
      </div>
    </>
  );
}
