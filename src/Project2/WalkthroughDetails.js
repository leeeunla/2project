import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import WalkthroughComment from "./WalkthorughComment";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
export function WalkthroughDetails() {
  const [data, setData] = useState();
  const [comments, setComments] = useState();
  const [inputComment, setInputComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiGetWalkById(id);
  }, []);
  async function apiGetWalkById(id) {
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
      if (response.resultCode === "ERROR") {
        setComments([
          {
            author: "",
            text: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
            boardId: "",
          },
        ]);
      }
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
      if (response.resultCode === "ERROR") {
        setComments([
          {
            author: "",
            text: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
            boardId: "",
          },
        ]);
      }
    }
  }
  async function apiWriteComment(boardId) {
    const user = JSON.parse(sessionStorage.getItem("loginState"));
    if (!user) {
      alert("로그인 하세요");
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
        if (response.resultCode === "ERROR") {
          setComments([
            {
              author: "",
              text: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
              boardId: "",
            },
          ]);
        }
      }
    }
  }
  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>공략 게시판</h2>
        {data ? (
          <>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <p>작성자: {data.author.username}</p>
            <p>작성일: {data.createAt.substr(0, 10)}</p>
          </>
        ) : (
          <p>선택한 공략 정보가 없습니다.</p>
        )}
        <Link to="/board/6">
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
        {comments ? <WalkthroughComment comments={comments} /> : null}
      </Container>
    </>
  );
}
