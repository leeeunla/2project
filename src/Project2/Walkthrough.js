import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const Walkthrough = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetQna();
  }, []);

  async function apiGetQna() {
    const response = await fetch(
      `http://localhost:8080/api/board/walkthrough`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

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
        <h2 style={{ borderBottom: "1px solid white" }}>공략 게시판</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((Walk, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/walkthrough/${Walk.id}`}
                  >
                    {Walk.title}
                  </Link>
                </td>
                <td>{Walk.author.username}</td>
                <td>{Walk.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/writing/walkthrough">
            <button>글쓰기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Walkthrough;
