import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Contanier = styled.div`
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;
export function Writing() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const { category } = useParams();
  const navigate = useNavigate();

  async function apiWriteBoard() {
    const user = JSON.parse(sessionStorage.getItem("loginState"));
    if (!user) {
      alert("로그인을 해주세요");
      navigate("/login");
    } else {
      const board = {
        author: user.username,
        title: title,
        text: text,
        category: category,
      };

      const response = await fetch("http://localhost:8080/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(board),
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        alert("글 작성이 완료되었습니다");
        navigate("/board/5");
      } else {
        // 에러핸들링 코드 추가
        if (response.resultCode === "ERROR") {
          alert(
            "글 작성이 되지않았습니다.입력해주시고 확인을 눌러주세요. 감사합니다."
          );
          navigate("/writing");
        }
      }
    }
  }
  return (
    <>
      <Contanier>
        <br />
        <Content>
          <textarea
            style={{ width: "650px", height: "2rem", padding: "5px" }}
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </Content>

        <Content>
          <textarea
            style={{ width: "800px", height: "40rem", padding: "5px" }}
            placeholder="내용을 입력해주세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </Content>
        <button style={{ margin: "20px" }}>취소</button>
        <button onClick={apiWriteBoard}>올리기</button>
      </Contanier>
    </>
  );
}
