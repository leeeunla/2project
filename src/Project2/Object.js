import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Object() {
  const data = [
    {
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      heading: "1",
      title: "함정",
      writer: "운영자",
      cTime: "2024-02-08",
    },
    {
      heading: "2",
      title: "코인",
      writer: "운영자",
      cTime: "2024-02-09",
    },
    {
      heading: "3",
      title: "톱니바퀴",
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
            {data.map((object, index) => (
              <tr key={index}>
                <td>{object.heading}</td>
                <td>{object.title}</td>
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
