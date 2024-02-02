import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  border: 1px solid white;
`;

const FreeComment = ({ index }) => {
  const data = [
    [{}],
    [
      {
        heading: "1",
        text: "난 짜장면 먹을건데 메롱",
        writer: "dnmks",
        createDate: "2024-02-05",
      },
      {
        heading: "1",
        text: "ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ ",
        writer: "hom",
        createDate: "2024-02-06",
      },
    ],
    [
      {
        heading: "2",
        text: "ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ ",
        writer: "hom",
        createDate: "2024-02-06",
      },
    ],
    [
      {
        heading: "3",
        text: "헐ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        writer: "foge",
        createDate: "2024-02-07",
      },
      {
        heading: "3",
        text: "헐ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        writer: "foge",
        createDate: "2024-02-07",
      },
    ],
    [
      {
        heading: "4",
        text: "개 인정입니다",
        writer: "tom",
        createDate: "2024-02-08",
      },
    ],
    [
      {
        heading: "5",
        text: "봄ㅋㅋㅋㅋ",
        writer: "longs",
        createDate: "2024-02-09",
      },
      {
        heading: "5",
        text: "봄ㅋㅋㅋㅋ",
        writer: "longs",
        createDate: "2024-02-09",
      },
    ],
  ];

  return (
    <Container>
      {data[index].map((comment, commentIndex) => (
        <div
          style={{ margin: "15px", borderBottom: "1px solid white" }}
          key={commentIndex}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <p>{comment.writer}</p>
            <p>{comment.createDate}</p>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
    </Container>
  );
};

export default FreeComment;
