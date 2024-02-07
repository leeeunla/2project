import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;

export function ObjectDetails() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiGetGameObjectById(id);
  }, []);

  async function apiGetGameObjectById(id) {
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
      setData([
        {
          author: "",
          text: "게시글이 존재하지 않습니다",
          createAt: "",
        },
      ]);
    }
  }

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>게임 오브젝트</h2>
        {data ? (
          <>
            <h3> {data.title}</h3>
            <p> {data.text} </p>
            <img
              style={{ width: "200px" }}
              src={process.env.PUBLIC_URL + data.src}
              alt="이미지 예시"
            />
            <p>작성자: {data.author.username}</p>
            <p>작성일: {data.createAt}</p>
          </>
        ) : (
          <p>선택한 게임 오브젝트 정보가 없습니다.</p>
        )}
        <Link to="/board/3">
          <GiHamburgerMenu
            style={{
              width: "40px",
              height: "30px",
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
