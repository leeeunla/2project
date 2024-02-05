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
export function GameObject() {
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
      title: "코인",
      writer: "운영자",
      cTime: "2024-02-09",
    },
    {
      id: 2,
      heading: "2",
      title: "톱니바퀴",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 3,
      heading: "3",
      title: "공(올라가는 물체, 발판)",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 4,
      heading: "4",
      title: "캐릭터",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 5,
      heading: "5",
      title: "캐릭터(정지)",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 6,
      heading: "6",
      title: "캐릭터 이동",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 7,
      heading: "7",
      title: "캐릭터 점프",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 8,
      heading: "8",
      title: "별",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 9,
      heading: "9",
      title: "문",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 10,
      heading: "10",
      title: "바다",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 11,
      heading: "11",
      title: "페페",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 12,
      heading: "12",
      title: "길(봄)",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 13,
      heading: "13",
      title: "길(가을)",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 14,
      heading: "14",
      title: "길(겨울)",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 15,
      heading: "15",
      title: "스코어",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 16,
      heading: "16",
      title: "철퇴",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 17,
      heading: "17",
      title: "라인",
      writer: "운영자",
      cTime: "2024-02-10",
    },
    {
      id: 18,
      heading: "18",
      title: "배경",
      writer: "운영자",
      cTime: "2024-02-10",
    },
  ];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>
          게임오브젝트 (구조물)
        </h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data?.map((object, index) => (
              <tr key={index}>
                <td>{object.heading}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/Object/${index}`}
                  >
                    {object.title}
                  </Link>
                </td>
                <td>{object.writer}</td>
                <td>{object.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
