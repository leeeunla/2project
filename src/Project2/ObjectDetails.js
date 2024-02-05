import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { GameObject } from "./GameObject";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function ObjectDetails() {
  const data = [
    {},
    {
      heading: "1",
      title: "코인",
      writer: "운영자",
      src: process.env.PUBLIC_URL + "/imge/image1.png",
      createDate: "2024-02-09",
      text: "코인입니다. 먹으면 점수",
    },
    {
      heading: "2",
      title: "톱니바퀴",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Saw.png",
      text: "맞으면 죽어요",
    },
    {
      heading: "3",
      title: "공(올라가는 물체, 발판)",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Circle.png",
      text: "이동하는 발판으로 밟은 채로 이동합니다",
    },
    {
      heading: "4",
      title: "캐릭터",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Link.png",
      text: "메인캐릭터입니다.",
    },
    {
      heading: "5",
      title: "캐릭터(정지)",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/stop.png",
      text: "캐릭터 가만히 정지하고 있을때 모습입니다.",
    },
    {
      heading: "6",
      title: "캐릭터 이동",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/run.png",
      text: "캐릭터가 이동할때의 모습입니다.",
    },
    {
      heading: "7",
      title: "캐릭터 점프",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/jump.png",
      text: "캐릭터 점프시 모습입니다.",
    },
    {
      heading: "8",
      title: "별",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/ster.png",
      text: "별이며, 시작할때의 화면 등장합니다.",
    },
    {
      heading: "9",
      title: "문",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/moon.png",
      text: "게임 시작하거나 재시작시 등장하는 요소입니다.",
    },
    {
      heading: "10",
      title: "바다",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/image2.png",
      text: "점프맵의 바닥을 꾸며주는 요소이자 닿으면 죽습니다.",
    },
    {
      heading: "11",
      title: "페페",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/MungSang.png",
      text: "유저들의 심신의 안정을 도모하고자 넣었으나 닿으면 죽습니다.",
    },
    {
      heading: "12",
      title: "길(봄)",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Grass.png",
      text: "3층 주 블럭이자 블럭 중 봄을 담당하고 있습니다.",
    },
    {
      heading: "13",
      title: "길(가을)",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Left1.png",
      text: "2층 주 블럭이자 블럭 중 가을을 담당하고 있습니다.",
    },
    {
      heading: "14",
      title: "길(겨울)",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Mid1.png",
      text: "1층 주 블럭이자 블럭 중 겨울을 담당하고 있습니다.",
    },
    {
      heading: "15",
      title: "스코어",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Score.png",
      text: "유저들이 먹은 코인의 갯수를 표현해줍니다.",
    },
    {
      heading: "16",
      title: "철퇴",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Mace.png",
      text: "보이는 것처럼 살벌하게 생긴 이 오브젝트는 잘못하면 처음으로 다시 돌아가게 만드는 범인입니다.",
    },
    {
      heading: "17",
      title: "라인",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/UI.png",
      text: "문과의 비슷한 역할로 UI를 꾸미는 역할입니다.",
    },
    {
      heading: "18",
      title: "배경",
      writer: "운영자",
      createDate: "2024-02-10",
      src: process.env.PUBLIC_URL + "/imge/Main.png",
      text: "이 게임의 주 중요한 요소 중 하나인 배경입니다.",
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
            <img
              style={{ width: "200px" }}
              src={selectedobject.src}
              alt="이미지 예시"
            />

            <img style={{ width: "200px" }} />

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
