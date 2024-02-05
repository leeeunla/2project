import { useEffect, useState } from "react";
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

const Update = () => {
  const [data, setData] = useState();
  useEffect(() => {
    apiGetUpdate();
  }, []);

  async function apiGetUpdate() {
    const response = await fetch(`http://localhost:8080/api/board/update`, {
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
        <h2 style={{ borderBottom: "1px solid white" }}>업데이트</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((update, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/update/${update.id}`}
                  >
                    {update.title}
                  </Link>
                </td>
                <td>{update.author.username}</td>
                <td>{update.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default Update;
