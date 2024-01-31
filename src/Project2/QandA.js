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
const QandA = () => {
  const data = [
    {
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      heading: "1",
      title: "이거 안 움직이는데 맞나요?",
      writer: "gkjs",
      cTime: "2024-02-05",
    },
    {
      heading: "2",
      title: "톱날이 너무 빨라요ㅠ",
      writer: "wlsd",
      cTime: "2024-02-06",
    },
    {
      heading: "3",
      title: "스코어가 안 오르고 있는데 이거 버그에요?",
      writer: "tjskd",
      cTime: "2024-02-07",
    },
    {
      heading: "4",
      title: "게임 렉이 심한데... 이거 처음부터 다시 해야하나요?",
      writer: "dksnk",
      cTime: "2024-02-08",
    },
    {
      heading: "5",
      title: "이거 끝을 본 사람 있나요ㅠ?",
      writer: "dksmn",
      cTime: "2024-02-09",
    },
    {
      heading: "6",
      title: "이거 난이도 실화인가요?",
      writer: "wins",
      cTime: "2024-02-10",
    },
  ];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>질문과 답변</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((QA, index) => (
              <tr key={index}>
                <td>{QA.heading}</td>
                <td>{QA.title}</td>
                <td>{QA.writer}</td>
                <td>{QA.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/witing">
            <button>글쓰기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default QandA;
