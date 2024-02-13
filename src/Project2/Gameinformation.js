import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  margin: 10px;

  text-align: center;
`;
// 게임 정보
const Gameinformation = () => {
  const [username, setUsername] = useState("");
  const [sortedScores, setSortedScores] = useState();
  const [userScore, setUserScore] = useState(); // 변경된 부분

  useEffect(() => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    const username = loginState.username;
    setUsername(username);
  }, []);

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
        const temp = [...response.data];
        temp.sort((a, b) => b.score - a.score);
        setSortedScores(temp);
      } else if (response.resultCode === "ERROR") {
      }
    }
  }

  useEffect(() => {
    console.log("username", username);
    if (sortedScores?.length > 0) {
      const myScores = sortedScores.filter(
        (data) => data.username === username
      );
      console.log("myScores", myScores, username);
      if (myScores.length > 0) {
        setUserScore(myScores[0]);
      } else {
        setUserScore(null);
      }
    }
  }, [sortedScores]);

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
            marginLeft: "10px",
            width: "500px",
          }}
        >
          <img src="1x.png" alt="게임 이미지" />
          <p>아이디:{username}</p>
        </div>
        <div style={{ textAlign: "center", marginRight: "130px" }}>
          <p>플레이어가 먹은 코인 수: {userScore?.score}</p>
        </div>
      </Container>
    </>
  );
};
export default Gameinformation;
