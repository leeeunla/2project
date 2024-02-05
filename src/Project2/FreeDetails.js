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
  const [data, setData] = useState();
  const [comment, setComments] = useState();
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
      //에러 코드 작성
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
      //에러 코드 작성
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
        author: boardId,
      };
      const response = await fetch(`http://localhost:8080/api/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        setComments((prev) => [...prev, response.data]);
      } else {
        //에러 코드 추가
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
            <p>작성일: {data.createAt}</p>
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
          ></input>
          <button style={{ padding: "5px", width: "50px" }}>등록</button>
        </div>
        <FreeComment />
      </Container>
    </>
  );
};
export default FreeDetails;
