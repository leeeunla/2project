import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import QandAComment from "./QandAComment";
import { useState, useEffect } from "react";

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
  const [data, setData] = useState();
  const [comments, setComments] = useState();
  const [inputComment, setInputComment] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiGetQnaById(id);
  }, []);

  async function apiGetQnaById(id) {
    const response = await fetch(`http://localhost:8080/api/board-any/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      setData(response.data);
      apiGetComments(id);
    } else {
      // 에러핸들링 코드 추가
    }
  }

  async function apiGetComments(boardId) {
    const response = await fetch(
      `http://localhost:8080/api/comment/${boardId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      setComments(response.data);
    } else {
      // 에러핸들링 코드 추가
    }
  }

  async function apiWriteComment(boardId) {
    const user = JSON.parse(sessionStorage.getItem("loginState"));
    if (!user) {
      alert("로그인을 하세요");
      navigate("/login");
    } else {
      const comment = {
        author: user.username,
        text: inputComment,
        boardId: boardId,
      };
      const response = await fetch(`http://localhost:8080/api/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        setComments((prev) => [...prev, response.data]);
      } else {
        // 에러핸들링 코드 추가
      }
    }
  }

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>질문과 답변</h2>
        {data ? (
          <>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <p>작성자: {data.author.username}</p>
            <p>작성일: {data.createAt}</p>
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
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
          ></input>
          <button
            style={{ padding: "5px", width: "50px" }}
            onClick={() => apiWriteComment(data.id)}
          >
            등록
          </button>
        </div>
        {comments ? <QandAComment comments={comments} /> : null}
      </Container>
    </>
  );
}
