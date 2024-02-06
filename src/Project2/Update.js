import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

const Update = () => {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetUpdate();
  }, []);

  async function apiGetUpdate() {
    const response = await fetch(`http://localhost:8080/api/board/update`, {
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
        업데이트
      </h2>
      <Container>
        <p>머릿말</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
        {data?.map((update, index) => (
          <>
            <p>{index + 1}</p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/update/${update.id}`}
              >
                {update.title}
              </Link>
            </p>
            <p>{update.author.username}</p>
            <p>{update.createAt.substr(0, 10)}</p>
          </>
        ))}
      </Container>
    </>
  );
};
export default Update;
