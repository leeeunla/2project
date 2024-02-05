import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Gameinfo() {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetGame();
  }, []);

  async function apiGetGame() {
    const response = await fetch(`http://localhost:8080/api/board/gameinfo`, {
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
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>게임정보</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((game, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/Game/${game.id}`}
                  >
                    {game.title}
                  </Link>
                </td>
                <td>{game.author.username}</td>
                <td>{game.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
