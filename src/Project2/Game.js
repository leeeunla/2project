import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function Game() {
  const data = [
    {
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      heading: "1",
      title: "조작법",
      writer: "운영자",
      cTime: "2024-02-05",
    },
    {
      heading: "2",
      title: "게임실행",
      writer: "운영자",
      cTime: "2024-02-06",
    },
  ];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>게임정보</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((game, index) => (
              <tr key={index}>
                <td>{game.heading}</td>
                <td>{game.title}</td>
                <td>{game.writer}</td>
                <td>{game.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
