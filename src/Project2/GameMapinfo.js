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
const GameMapinfo = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetMap();
  }, []);
  async function apiGetMap() {
    const response = await fetch(`http://localhost:8080/api/board/map`, {
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
        <h2 style={{ borderBottom: "1px solid white" }}>맵 정보</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((map, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/map/${map.id}`}
                  >
                    {map.title}
                  </Link>
                </td>
                <td>{map.author.username}</td>
                <td>{map.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default GameMapinfo;
