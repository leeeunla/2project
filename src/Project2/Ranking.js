import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 1500px;
`;

export function Ranking() {
  const navigate = useNavigate();
  const [score, setScore] = useState();
  const [sortedScore, setSortedScore] = useState();

  useEffect(() => {
    apiGetScoreList();
  }, []);

  async function apiGetScoreList() {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState && loginState.token) {
      const response = await fetch(`http://localhost:8080/api/score`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginState.token}`,
        },
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        setScore(response.data);
        const temp = [...response.data];
        temp.sort((a, b) => b.score - a.score);
        setSortedScore(temp);
      } else if (response.resultCode === "ERROR") {
      }
    }
  }

  useEffect(() => {
    console.log("score", score);
  }, [score]);

  return (
    <>
      <Container>
        <h2 style={{ textAlign: "center" }}>코인을 많이 먹은 사람 순위표</h2>
        {/* <h2>많이 드신 사람</h2> */}

        {sortedScore?.map((score, index) => (
          <div
            key={index}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <p>{index + 1}위</p>
            <p>{score.username}</p>
            <p>{score.score} 점</p>
          </div>
        ))}
      </Container>
    </>
  );
}
