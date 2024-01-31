import styled from "styled-components";

const Contanier = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;

const Notification = () => {
  const data = [
    {
      heading: "말머리",
      title: "제목",
      writer: "작성자",
      cTime: "작성일",
    },
    {
      heading: "1",
      title: "Link 유저분들께 전체 안내",
      writer: "운영자",
      cTime: "2024-02-05",
    },
    {
      heading: "2",
      title: "현재 발생중인 오류안내",
      writer: "운영자",
      cTime: "2024-02-06",
    },
    {
      heading: "3",
      title: "서버 불안정 현상 안내",
      writer: "운영자",
      cTime: "2024-02-07",
    },
  ];
  return (
    <>
      <Contanier>
        <h2 style={{ borderBottom: "1px solid white" }}>공지사항</h2>
        <table>
          <tbody style={{ textAlign: "center" }}>
            {data.map((notice, index) => (
              <tr key={index}>
                <td>{notice.heading}</td>
                <td>{notice.title}</td>
                <td>{notice.writer}</td>
                <td>{notice.cTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Contanier>
    </>
  );
};
export default Notification;
