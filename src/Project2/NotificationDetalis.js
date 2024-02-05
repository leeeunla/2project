import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function NotificationDetalis() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiGetNoticeById(id);
  }, []);

  async function apiGetNoticeById(id) {
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
      // 에러핸들링 코드 추가
    }
  }

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>공지사항</h2>
        {data ? (
          <>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <p>작성자: {data.author.username}</p>
          </>
        ) : (
          <p>선택한 공지사항 정보가 없습니다.</p>
        )}
        <Link to="/board/0">
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
