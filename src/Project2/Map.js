import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const Map = () => {
  const data = [
    {
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      heading: "1",
      title: "1층 맵",
      writer: "운영자",
      cTime: "2024-02-05",
    },
    {
      heading: "2",
      title: "2층 맵",
      writer: "운영자",
      cTime: "2024-02-06",
    },
    {
      heading: "3",
      title: "3층 맵",
      writer: "운영자",
      cTime: "2024-02-07",
    },
    {
      heading: "4",
      title: "4층 맵",
      writer: "운영자",
      cTime: "2024-02-08",
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
                <td>{map.heading}</td>
                <td>{map.title}</td>
                <td>{map.writer}</td>
                <td>{map.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default Map;
