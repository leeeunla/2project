//게시물 관리 (마이페이지)

import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const Postmanagement = () => {
  return (
    <>
      <Container>
        <div>
          <h2>게시물 관리</h2>
        </div>
        <div>
          <p>내가 쓴 글</p>
          <select>
            <option value="선택" selected="selected">
              선택
            </option>
            <option value="">자유 게시판</option>
            <option value="">공략 게시판</option>
            <option value="">질문과 답변</option>
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
          <select>
            <option value="선택" selected="selected">
              선택
            </option>
            <option value="">자유 게시판</option>
            <option value="">공략 게시판</option>
            <option value="">질문과 답변</option>
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
