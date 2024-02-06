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
export function Free() {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetFree();
  }, []);
  async function apiGetFree() {
    const response = await fetch(`http://localhost:8080/api/board/free`, {
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
        <h2 style={{ borderBottom: "1px solid white" }}>자유 게시판</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((free, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/free/${free.id}`}
                  >
                    {free.title}
                  </Link>
                </td>
                <td>{free.author.username}</td>
                <td>{free.createAt.substr(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/writing/free">
            <button>글쓰기</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
