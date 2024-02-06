import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FreeComment from "./FreeComment";
import { GiHamburgerMenu } from "react-icons/gi";

//상세페이지(게시판에서 글을 클릭시 보이게 하려는 것으로 만듬!)
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const FreeDetails = () => {
  const [data, setData] = useState("");

  const [comments, setComments] = useState();
  const [inputComment, setInputComment] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiGetFreeByID(id);
  }, []);

  async function apiGetFreeByID(id) {
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
        setData(response.data);
        apiGetComments(id);
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
        setComments(response.data);
      }
    }
  }
  async function apiWriteComment(boardId) {
    const user = JSON.parse(sessionStorage.getItem("loginState"));
    if (!user) {
      alert("로그인을 해주세요");
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
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        comments((prev) => [...prev, response.data]);
      } else {
        if (response.resultCode === "ERROR") {
          comments((prev) => [...prev, response.data]);
        }
      }
    }
  }

  return (
    <>
      <Container>
        <h2 style={{ borderBottom: "1px solid white" }}>자유게시판</h2>
        {data ? (
          <>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <p>작성자: {data.author.username}</p>
            <p>작성일: {data.createAt.substr(0, 10)}</p>
          </>
        ) : (
          <p>선택한 자유 정보가 없습니다.</p>
        )}
        <Link to="/board/7">
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
        {comments ? <FreeComment comments={comments} /> : null}
      </Container>
    </>
  );
};
export default FreeDetails;
