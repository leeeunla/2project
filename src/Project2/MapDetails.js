import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;

const MapDetails = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    apiGetGameMapById(id);
  }, []);

  async function apiGetGameMapById(id) {
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
        <h2 style={{ borderBottom: "1px solid white" }}>맵 정보</h2>

        {data ? (
          <>
            <h3>{data.title}</h3>
            <p> {data.text}</p>
            <img
              style={{ width: "200px" }}
              src={process.env.PUBLIC_URL + data.src}
              alt="이미지 예시"
            />
            <p>작성자: {data.author.username}</p>
            <p>작성일: {data.createAt.substr(0, 10)}</p>
          </>
        ) : (
          <p>선택한 맵 정보가 없습니다.</p>
        )}
        <Link to="/board/4">
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
};
export default MapDetails;
