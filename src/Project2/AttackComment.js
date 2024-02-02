import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  border: 1px solid white;
`;

const AttackComment = ({ index }) => {
  const data = [
    [{}],
    [
      {
        heading: "1",
        text: "안되던데?",
        writer: "dnmks",
        createDate: "2024-02-05",
      },
      {
        heading: "1",
        text: "되는거 맞음? ",
        writer: "hom",
        createDate: "2024-02-06",
      },
    ],
    [
      {
        heading: "2",
        text: "위에 떠있는 코인도 먹을 수 있음?",
        writer: "hom",
        createDate: "2024-02-06",
      },
    ],
    [
      {
        heading: "3",
        text: "그게 가능하면 인간이냐",
        writer: "foge",
        createDate: "2024-02-07",
      },
      {
        heading: "3",
        text: "헐 감사합니다!",
        writer: "foge",
        createDate: "2024-02-07",
      },
    ],
    [
      {
        heading: "4",
        text: "솔직히 말해 너 안 해봤지?",
        writer: "tom",
        createDate: "2024-02-08",
      },
    ],
    [
      {
        heading: "5",
        text: "오 ㄳ",
        writer: "longs",
        createDate: "2024-02-09",
      },
      {
        heading: "5",
        text: "과연.....",
        writer: "longs",
        createDate: "2024-02-09",
      },
    ],
    [
      {
        heading: "6",
        text: "오 ㄳ",
        writer: "longs",
        createDate: "2024-02-09",
      },
      {
        heading: "6",
        text: "오른쪽 아닌거 확실하죠?",
        writer: "longs",
        createDate: "2024-02-09",
      },
    ],
  ];
  return (
    <>
      <Container>
        {data[index].map((Attack, AttackIndex) => (
          <div
            style={{ margin: "15px", borderBottom: "1px solid white" }}
            key={AttackIndex}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <p>{Attack.writer}</p>
              <p>{Attack.createDate}</p>
            </div>
            <p>{Attack.text}</p>
          </div>
        ))}
      </Container>
    </>
  );
};
export default AttackComment;
