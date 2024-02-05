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
const QandA = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetQna();
  }, []);

  async function apiGetQna() {
    const response = await fetch(`http://localhost:8080/api/board/qna`, {
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
        <h2 style={{ borderBottom: "1px solid white" }}>질문과 답변</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((QA, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/qa/${QA.id}`}
                  >
                    {QA.title}
                  </Link>
                </td>
                <td>{QA.author.username}</td>
                <td>{QA.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/writing">
            <button>글쓰기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default QandA;
