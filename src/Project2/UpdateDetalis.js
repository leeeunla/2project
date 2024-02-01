import { Link, useParams } from "react-router-dom";
import React from "react";
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
export function UpdateDetalis() {
  const data = [
    {},
    {
      heading: "1",
      title: "2.19(월) 업데이트 안내",
      text: "서버 업데이트가 진행될 예정이니 참고바랍니다 업데이트시 게임이 실행되지 않음을 미리 안내드립니다.",
      writer: "운영자",
      createDate: "2024-02-06",
    },
    {
      heading: "2",
      title: "제 4스테이지 오픈",
      text: "지옥같았던 그 3스테이지를 지나, 드디어 라스트 스테이지인 4스테이지가 오픈되었습니다. 많은 관심과 사랑 부탁드립니다.",
      writer: "운영자",
      createDate: "2024-02-07",
    },
    {
      heading: "3",
      title: "조작법 개선",
      text: "안녕하세요. 링크의 모험입니다.조작법이 더 쉽게 개선되었습니다. 즐거운 게임 하시길 바랍니다. 감사합니다",
      writer: "운영자",
      createDate: "2024-02-09",
    },
    {
      heading: "4",
      title: "캐릭터 사라지는 현상에 관해 안내드립니다.",
      text: "시작했을때 캐릭터기 제자리에 있지않고 자꾸 사라지는 현상이 있음을 제보받았습니다. 저희가 확인해본 결과 오류가 맞음으로 수정조치하였으니 확인해보시고 그대로 안 되실 경우 문의해주시면 감사드립니다. 그럼 즐거운 게임되세요 ",
      writer: "운영자",
      createDate: "2024-02-09",
    },
    {
      heading: "5",
      title: "스코어 기록되지 않는 버그 개선",
      text: "스코어 기록이 되지 않는 버그에 관하여 수정 조치하였습니다. 그럼 즐거운 게임 되시길 바랍니다. 감사합니다.",
      writer: "운영자",
      createDate: "2024-02-10",
    },
  ];
  const { id } = useParams();
  const selectedIndex = parseInt(id); // index 값을 숫자로 변환
  const selectedUpdate = data[selectedIndex];
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>업데이트</h2>
        {selectedUpdate ? (
          <>
            {selectedUpdate.title && <h3>{selectedUpdate.title}</h3>}
            {selectedUpdate.text && <p>{selectedUpdate.text}</p>}
            <p>작성자: {selectedUpdate.writer}</p>
            <p>작성일: {selectedUpdate.createDate}</p>
          </>
        ) : (
          <p>선택한 업데이트 정보가 없습니다.</p>
        )}
        <Link to="/board/1">
          <GiHamburgerMenu
            style={{
              cursor: "pointer",
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
