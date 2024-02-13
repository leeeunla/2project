//게시물 관리 (마이페이지)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const Postmanagement = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [loginState, setLoginstate] = useState("");
  async function apiBoardpage() {
    const author = JSON.parse(sessionStorage.getItem("loginState"));
    if (!author) {
    } else {
      const board = {
        title: title,
        text: text,
        category: category,
        author: author.username,
      };
      const response = await fetch(`http://localhost:8080/api/board`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginState.token}`,
        },
        body: JSON.stringify(board),
      }).then((response) => response.json());
      console.log(response);
      if (response.resultCode === "SUCCESS") {
        alert("게시물을 가져오는데 성공하였습니다");
        navigate("/page");
      } else {
        // 에러핸들링 코드 추가
        if (response.resultCode === "ERROR") {
          alert("게시물을 찾을 수 없습니다.");
          navigate("/page");
        }
      }
    }
  }
  return (
    <>
      <Container>
        <div>
          <h2>게시물 관리</h2>
        </div>
        <div>
          <p onClick={apiBoardpage}>내가 쓴 글</p>
          <select onChange={(e) => setCategory(e.target.value)}>
            <p value={title} onChange={(e) => setTitle(e.target.value)}></p>
            <p value={text} onChange={(e) => setText(e.target.value)}></p>
          </select>
          <div
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "30px",
              margin: "5px",
            }}
          ></div>
        </div>
        <div>
          <p>내가 쓴 댓글</p>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="선택" selected="selected">
              선택
            </option>
            <option value="자유 게시판">자유 게시판</option>
            <option value="공략 게시판">공략 게시판</option>
            <option value="질문과 답변">질문과 답변</option>
          </select>
          <div
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "30px",
              margin: "5px",
            }}
          ></div>
        </div>
      </Container>
    </>
  );
};
export default Postmanagement;
