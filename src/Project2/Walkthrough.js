import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

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
const Walkthrough = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetQna();
  }, []);

  async function apiGetQna() {
    const response = await fetch(
      `http://localhost:8080/api/board/walkthrough`,
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
      if (response.resultCode === "ERROR") {
        setData(response.data);
      }
    }
  }
  return (
    <>
      <h2 style={{ borderBottom: "1px solid white", color: "white" }}>
        공략 게시판
      </h2>
      <Container>
        <p>머릿말</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
        {data?.map((Walk, index) => (
          <>
            <p>{index + 1}</p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/walkthrough/${Walk.id}`}
              >
                {Walk.title}
              </Link>
            </p>
            <p>{Walk.author.username}</p>
            <p>{Walk.createAt.substr(0, 10)}</p>
          </>
        ))}
      </Container>
      <div style={{ textAlign: "end" }}>
        <Link to="/writing/walkthrough">
          <button>글쓰기</button>
        </Link>
      </div>
    </>
  );
};
export default Walkthrough;
