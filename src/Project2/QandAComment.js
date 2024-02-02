import styled from "styled-components";

const Container = styled.div`
  color: white;
  border: 1px solid white;
`;

const QandAComment = ({ index }) => {
  const data = [
    [{}],
    [
      {
        heading: "1",
        text: "그거 버그에요 다시 해야함",
        writer: "dnmks",
        createDate: "2024-02-05",
      },
      {
        heading: "1",
        text: "윗분 말 맞음 그거 버그라서 나도 다시 함ㅠ",
        writer: "hom",
        createDate: "2024-02-06",
      },
    ],
    [
      {
        heading: "2",
        text: "원래도 톱날이 빠르긴 한데 갑자기 빨라지는 경우도 있어서 문의 해야할 듯",
        writer: "hom",
        createDate: "2024-02-06",
      },
    ],
    [
      {
        heading: "3",
        text: "이 게임 버그 많아서 그럼 이해하셈",
        writer: "foge",
        createDate: "2024-02-07",
      },
      {
        heading: "3",
        text: "겜 접는게 답일 듯 아님 문의 해보셈",
        writer: "foge",
        createDate: "2024-02-07",
      },
    ],
    [
      {
        heading: "4",
        text: "게임을 끄고 다시 키면 원만하면 다시 됩니다. 물론 처음부터 하는 것은 확정이고요",
        writer: "tom",
        createDate: "2024-02-08",
      },
    ],
    [
      {
        heading: "5",
        text: "난 봄 님은 아직임?",
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
    [
      {
        heading: "6",
        text: "내 말이 걍 깨지 말라고 만든듯",
        writer: "longs",
        createDate: "2024-02-09",
      },
    ],
  ];
  return (
    <>
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
    </>
  );
};

export default QandAComment;
