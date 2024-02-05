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

const MapDetails = () => {
  const data = [
    {},
    {
      heading: "1",
      title: "1층",
      src: process.env.PUBLIC_URL + "",
      text: "어느길이 진짜 일까요? 잘못 가면 죽음이 기다리는 그 길은 과연 어디일까요?!",
      writer: "운영자",
      createDate: "2024-02-05",
    },
    {
      heading: "2",
      title: "2층",
      src: process.env.PUBLIC_URL + "",
      text: "난이도는 보통입니다만, 으음... 깰 수 있을지는 잘 모르겠네요.",
      writer: "운영자",
      createDate: "2024-02-06",
    },
    {
      heading: "3",
      title: "3층",
      src: process.env.PUBLIC_URL + "",
      text: "난이도 매우 어렵습니다 도전하실 분들만 하세요",
      writer: "운영자",
      createDate: "2024-02-06",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedMap = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>맵 정보</h2>

        {selectedMap ? (
          <>
            {selectedMap.title && <h3>{selectedMap.title}</h3>}
            {selectedMap.text && <p> {selectedMap.text}</p>}
            {selectedMap.src && <p> {selectedMap.src}</p>}
            <p>작성자: {selectedMap.writer}</p>
            <p>작성일: {selectedMap.createDate}</p>
          </>
        ) : (
          <p>선택한 맵 정보가 없습니다.</p>
        )}
        <Link to="/board/4">
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
};
export default MapDetails;
