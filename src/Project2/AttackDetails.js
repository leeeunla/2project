import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import AttackComment from "./AttackComment";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function AttackDetails() {
  const data = [
    {},
    {
      heading: "1",
      title: "1층 톱날 공략법",
      text: "타이밍만 잘 보고 가시면 됩니다.",
      writer: "jends",
      createDate: "2024-02-05",
    },
    {
      heading: "2",
      title: "모든 코인 얻는법",
      text: "숨겨진 코인은 없으니 차분히 먹으시면 됩니다.",
      writer: "gksjd",
      createDate: "2024-02-06",
    },
    {
      heading: "3",
      title: "톱날에 죽지 않고 살 수 있는법",
      text: "끝에 살짝만 밣고 가세요",
      writer: "jane",
      createDate: "2024-02-07",
    },
    {
      heading: "4",
      title: "원 위에서 한번에 블럭으로 점프하는 법",
      text: "버그일 수 있으니 너무 사용하시진 마시고 최대한 끝부분에서 뛰시면 됩니다.",
      writer: "dnks",
      createDate: "2024-02-08",
    },
    {
      heading: "5",
      title: "2층 완전 공략",
      text: "코인 잘 먹고 점프를 잘 하시면 쉽게 깰 수 있습니다",
      writer: "tanes",
      createDate: "2024-02-09",
    },
    {
      heading: "6",
      title: "극악의 난이도 3층 공략법(ㅅㅍ 주의)",
      text: " 칼날도 많고 공도 많아서 힘들지만 진짜 길은 왼쪽입니다.",
      writer: "toms",
      createDate: "2024-02-10",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedAttack = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>공략 게시판</h2>
        {selectedAttack ? (
          <>
            {selectedAttack.title && <h3>{selectedAttack.title}</h3>}
            {selectedAttack.text && <p>{selectedAttack.text}</p>}
            <p>작성자: {selectedAttack.writer}</p>
            <p>작성일: {selectedAttack.createDate}</p>
          </>
        ) : (
          <p>선택한 공략 정보가 없습니다.</p>
        )}
        <Link to="/board/6">
          <GiHamburgerMenu
            style={{
              width: "40px",
              height: "30px",
              fontSize: "30px",
              color: "white",
              border: "1px solid white",
            }}
          />
        </Link>
        <div style={{ display: "flex", marginBottom: "5px", marginTop: "5px" }}>
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            style={{
              width: "200px",
              height: "20px",
              padding: "5px",
            }}
          ></input>
          <button style={{ padding: "5px", width: "50px" }} onClick={() => {}}>
            등록
          </button>
        </div>
        <AttackComment index={selectedIndex} />
      </Container>
    </>
  );
}
