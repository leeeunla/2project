import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function NotificationDetalis() {
  const data = [
    {},
    {
      heading: "1",
      title: "Link 유저분들께 전체 안내",
      text: "기다리시고 기다리던 그 게임, Link의 모험이 드디어 출시했습니다. ",
      writer: "운영자",
      createDate: "2024-02-05",
    },
    {
      heading: "2",
      title: "현재 발생중인 오류안내",
      text: "안녕하세요 링크의 모험 운영진 입니다.현재 오류가 발생하고 있다는 제보를 받아 현재 확인 중이니 불편하시더라도 조금만 기다려주시면 감사드립니다.",
      writer: "운영자",
      createDate: "2024-02-06",
    },
    {
      heading: "3",
      title: "서버 불안정 현상 안내",
      text: "현재 네트워크의 문제로 서버가 불안정합니다. 네트워크의 설정을 확인해보시고 그떄도 불안정할 경우, 다시금 문의 부탁드립니다.",
      writer: "운영자",
      createDate: "2024-02-07",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedNotice = data[selectedIndex];

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>공지사항</h2>
        {selectedNotice ? (
          <>
            {selectedNotice.title && <h3>{selectedNotice.title}</h3>}
            {selectedNotice.text && <p>{selectedNotice.text}</p>}
            <p>작성자: {selectedNotice.writer}</p>
          </>
        ) : (
          <p>선택한 공지사항 정보가 없습니다.</p>
        )}
        <Link to="/board/0">
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
      </Container>
    </>
  );
}
