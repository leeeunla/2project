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
  const [score, setScore] = useState();
  const [sortedScores, setSortedScores] = useState();
  const [userScore, setUserScore] = useState(); // 변경된 부분

  function sendUserName() {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    const username = loginState.username;
    setUsername(username);
  }
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
        setSortedScores(temp);
        if (temp.length > 0) {
          setUserScore(temp[0].score);
        }
      } else if (response.resultCode === "ERROR") {
      }
    }
  }

  useEffect(() => {
    console.log("score");
  }, [score]);
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
          <img src="1x.png" />
          <p onClick={sendUserName}>아이디:{username}</p>
        </div>
        <div style={{ textAlign: "center", marginRight: "130px" }}>
          {sortedScores?.map((score, index) => (
            <div key={index}>
              {score.username == username && (
                <p>플레이어가 먹은 코인 수: {userScore}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Gameinformation;
