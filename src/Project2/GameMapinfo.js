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
  const data = [
    {},
    {
      id: 1,
      title: "1층",
      writer: "운영자",
      cTime: "2024-02-09",
    },
    {
      id: 2,
      heading: "2",
      title: "2층",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 3,
      heading: "3",
      title: "3층",
      writer: "운영자",
      cTime: "2024-02-10",
    },
  ];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>맵 정보</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((map, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/map/${map.id}`}
                  >
                    {map.title}
                  </Link>
                </td>
                <td>{map.author}</td>
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
