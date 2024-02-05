import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contanier = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const Attack = () => {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetAtt();
  }, []);
  async function apiGetAtt() {
    const response = await fetch(`http://localhost:8080/api/board/attack`, {
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
      <Contanier>
        <h2 style={{ borderBottom: "1px solid white" }}>공략 게시판</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((att, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/attack/${att.id}`}
                  >
                    {att.title}
                  </Link>
                </td>
                <td>{att.author.username}</td>
                <td>{att.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/writing">
            <button>글쓰기</button>
          </Link>
        </div>
      </Contanier>
    </>
  );
};
export default Attack;
