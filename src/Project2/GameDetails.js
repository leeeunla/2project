import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function GameDetails() {
  const data = [
    {},
    {
      heading: "1",
      title: "조작법",
      text: "",
      writer: "운영자",
      createDate: "2024-02-05",
    },
    {
      heading: "2",
      title: "게임실행",
      text: "",
      writer: "운영자",
      createDate: "2024-02-06",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedGame = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>게임정보</h2>

        {selectedGame ? (
          <>
            {selectedGame.title && <h3>제목: {selectedGame.title}</h3>}
            {selectedGame.text && <p>내용: {selectedGame.text}</p>}
            <p>작성자: {selectedGame.writer}</p>
            <p>작성일: {selectedGame.createDate}</p>
          </>
        ) : (
          <p>선택한 게임 정보가 없습니다.</p>
        )}
        <Link to="/board/2">
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
