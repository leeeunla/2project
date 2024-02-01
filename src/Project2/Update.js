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
  const data = [
    {
      id: 0,
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      id: 1,
      heading: "1",
      title: "2.19(월) 업데이트 안내",
      writer: "운영자",
      cTime: "2024-02-05",
    },
    {
      id: 2,
      heading: "2",
      title: "제 4 스테이지 오픈!",
      writer: "운영자",
      cTime: "2024-02-06",
    },
    {
      id: 3,
      heading: "3",
      title: "조작법 개선",
      writer: "운영자",
      cTime: "2024-02-07",
    },
    {
      id: 4,
      heading: "4",
      title: "캐릭터 사라지는 현상에 관해 안내드립니다.",
      writer: "운영자",
      cTime: "2024-02-09",
    },
    {
      id: 5,
      heading: "5",
      title: "스코어 기록되지 않는 버그 개선",
      text: "버그입니다",
      writer: "운영자",
      cTime: "2024-02-10",
    },
  ];

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>업데이트</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((update, index) => (
              <tr key={index}>
                <td>{update.heading}</td>
                <td>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/update/${index}`}
                  >
                    {update.title}
                  </Link>
                </td>
                <td>{update.writer}</td>
                <td>{update.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default Update;
