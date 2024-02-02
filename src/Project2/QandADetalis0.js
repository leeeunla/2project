import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import QandAComment from "./QandAComment";
//공지사항, 업데이트 상세페이지("이건 댓글창 없는거")
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function QandAdetalis0() {
  const data = [
    {},
    {
      heading: "1",
      title: "이거 안 움직이는데 맞나요?",
      text: "재미있다고 해서 시작을 눌렀는데 장애물은 움직이는데 왜 캐릭터는 아무리 해도 안 움직이는데 이거 버그인가요? 아니면 제가 조작키를 잘못 알고 있나요?ㅠㅠ 아시는 분 있나요?ㅠㅠ",
      writer: "gkjs",
      createDate: "2024-02-05",
    },
    {
      heading: "2",
      title: "톱날이 너무 빨라요ㅠ",
      text: "아니 이거 톱날 왜이리 빨라요? 처음보다 빠른 것 같은데 이거 왜 이래 ",
      writer: "wlsd",
      createDate: "2024-02-06",
    },
    {
      heading: "3",
      title: "스코어가 안 오르고 있는데 이거 버그에요?",
      text: "코인 먹어도 안 오르는데 이거 버그임? 버그도 이런 버그가 걸려서 안 고쳐지면 겜 접음 ㅅㄱ",
      writer: "tjskd",
      createDate: "2024-02-07",
    },
    {
      heading: "4",
      title: "게임 렉이 심한데... 이거 처음부터 다시 해야하나요?",
      text: "1층까진 괜찮았는데 왜 2층 넘어가니까 장애물 타이밍도 이상하고 캐릭터 뛰는 것도 이상한데 이거 죽으면 처음부터 해야해야죠?",
      writer: "dksnk",
      createDate: "2024-02-08",
    },
    {
      heading: "5",
      title: "이거 끝을 본 사람 있나요ㅠ?",
      text: "난이도 헬인데 이거 끝이 있긴 한거에요?",
      writer: "dksmn",
      createDate: "2024-02-09",
    },
    {
      heading: "6",
      title: "이거 난이도 실화인가요?",
      text: "아니 이거 깨라고 만든 게임 맞음? 사전테스트 거친 게임 아닌 것 같은데 영자들도 다시 해보라고 하셈 깰 수 있나",
      writer: "wins",
      createDate: "2024-02-10",
    },
  ];

  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedQA = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>질문과 답변</h2>
        {selectedQA ? (
          <>
            {selectedQA.title && <h3>{selectedQA.title}</h3>}
            {selectedQA.text && <p>{selectedQA.text}</p>}
            <p>작성자: {selectedQA.writer}</p>
            <p>작성일: {selectedQA.createDate}</p>
          </>
        ) : (
          <p>선택한 질문과답변 정보가 없습니다.</p>
        )}
        <Link to="/board/5">
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
        <QandAComment index={selectedIndex} />
      </Container>
    </>
  );
}
