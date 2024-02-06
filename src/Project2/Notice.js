import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contanier = styled.div`
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

const Notice = () => {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetNo();
  }, []);

  async function apiGetNo() {
    const response = await fetch(`http://localhost:8080/api/board/notice`, {
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
      <h2 style={{ borderBottom: "1px solid white", color: "white" }}>
        공지사항
      </h2>
      <Contanier>
        <p>머릿말</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
        {data?.map((notice, index) => (
          <>
            <p>{index + 1}</p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/notice/${notice.id}`}
              >
                {notice.title}
              </Link>
            </p>
            <p>{notice.author.username}</p>
            <p>{notice.createAt.substr(0, 10)}</p>
          </>
        ))}
      </Contanier>
    </>
  );
};
export default Notice;
