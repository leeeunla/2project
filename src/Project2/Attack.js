import { Link } from "react-router-dom";
import styled from "styled-components";

const Contanier = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const Attack = () => {
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
      title: "1층 톱날 공략법",
      writer: "jends",
      cTime: "2024-02-05",
    },
    {
      id: 2,
      heading: "2",
      title: "모든 코인 얻는법",
      writer: "gksjd",
      cTime: "2024-02-06",
    },
    {
      id: 3,
      heading: "3",
      title: "톱날에 죽지 않고 살 수 있는법",
      writer: "jane",
      cTime: "2024-02-07",
    },
    {
      id: 4,
      heading: "4",
      title: "원 위에서 한번에 블럭으로 점프하는 법",
      writer: "dnks",
      cTime: "2024-02-08",
    },
    {
      id: 5,
      heading: "5",
      title: "2층 완전 공략",
      writer: "tanes",
      cTime: "2024-02-09",
    },
    {
      id: 6,
      heading: "6",
      title: "극악의 난이도 3층 공략법(ㅅㅍ 주의)",
      writer: "toms",
      cTime: "2024-02-10",
    },
  ];
  return (
    <>
      <Contanier>
        <h2 style={{ borderBottom: "1px solid black" }}>공략 게시판</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((Att, index) => (
              <tr key={index}>
                <td>{Att.heading}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/attack/${index}`}
                  >
                    {Att.title}
                  </Link>
                </td>
                <td>{Att.writer}</td>
                <td>{Att.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "end" }}>
          <Link to="/witing">
            <button>글쓰기</button>
          </Link>
        </div>
      </Contanier>
    </>
  );
};
export default Attack;
