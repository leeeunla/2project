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

const Notice = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiGetNo();
  }, []);

  async function apiGetNo() {
    const response = await fetch(`http://localhost:8080/api/board/notice`, {
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
        <h2 style={{ borderBottom: "1px solid white" }}>공지사항</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((notice, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/notice/${notice.id}`}
                  >
                    {notice.title}
                  </Link>
                </td>
                <td>{notice.author.username}</td>
                <td>{notice.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Contanier>
    </>
  );
};
export default Notice;
