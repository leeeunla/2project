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
export function ObjectDetalis() {
  const data = [
    {},
    {
      heading: "1",
      title: "함정",
      writer: "운영자",
      createDate: "2024-02-08",
      text: "",
    },
    {
      heading: "2",
      title: "코인",
      writer: "운영자",
      createDate: "2024-02-09",
      src: "",
      text: "",
    },
    {
      heading: "3",
      title: "톱니바퀴",
      writer: "운영자",
      createDate: "2024-02-10",
      src: "",
      text: "",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedobject = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>게임 오브젝트</h2>

        {selectedobject ? (
          <>
            {selectedobject.title && <h3> {selectedobject.title}</h3>}
            {selectedobject.text && <p> {selectedobject.text}</p>}
            {selectedobject.src && <p> {selectedobject.src}</p>}
            <p>작성자: {selectedobject.writer}</p>
            <p>작성일: {selectedobject.createDate}</p>
          </>
        ) : (
          <p>선택한 게임 오브젝트 정보가 없습니다.</p>
        )}
        <Link to="/board/3">
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