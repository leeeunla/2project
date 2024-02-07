import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Notice from "./Notice";

// 게시판 관리
const Container = styled.div`
  display: flex;
  margin: 20px;
  gap: 35px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Boardmanagement = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // const { category } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  async function apiAdminBoard() {
    const author = JSON.parse(sessionStorage.getItem("loginState"));
    if (!author) {
      alert("로그인을 해주세요");
      navigate("/admin/login");
    } else {
      const board = {
        title: title,
        text: text,
        category: category,
        author: author.username,
        src: null,
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
        navigate("/");
      } else {
        // 에러핸들링 코드 추가
        if (response.resultCode === "ERROR") {
          alert("글 작성이 되지않았습니다.");
          navigate("/admin/dashboard");
        }
      }
    }
  }

  return (
    <>
      <Container>
        <label
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            width: "150px",
            height: "300px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            name="categorys"
            value="notice"
            checked={category === "notice"}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          공지사항
          <input
            type="radio"
            name="categorys"
            value="update"
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          업데이트
          <input
            type="radio"
            name="categorys"
            value="gameinfo"
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          게임정보
          <input
            type="radio"
            name="categorys"
            value="gameobject"
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          게임 오브젝트
          <input
            type="radio"
            name="categorys"
            value="gamemap"
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          맵 정보
        </label>

        <div>
          <div
            style={{ display: "flex", gap: "15px", alignItems: "baseline" }}
          ></div>

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
          <Content>
            <textarea
              style={{ width: "800px", height: "1rem", padding: "5px" }}
              placeholder="src"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </Content>
          <button style={{ margin: "20px" }}>취소</button>
          <button onClick={apiAdminBoard}>올리기</button>
        </div>
      </Container>
    </>
  );
};
export default Boardmanagement;
