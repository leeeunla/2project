import { Link } from "react-router-dom";
import styled from "styled-components";

// 게시판 관리
const Container = styled.div`
  display: flex;
  margin: 20px;
  gap: 35px;
`;
const Boardmanagement = () => {
  return (
    <>
      <Container>
        <div
          style={{ border: "1px solid black", width: "150px", height: "200px" }}
        >
          <p>공지사항</p>
          <p>업데이트</p>
          <p>게임 정보</p>
          <p>게임 오브젝트</p>
          <p>맵 정보</p>
        </div>
        <div>
          <div style={{ display: "flex", gap: "15px", alignItems: "baseline" }}>
            <h2
              style={{
                border: "1px solid black",
                width: "150px",
                padding: "5px",
              }}
            >
              게시판 이름
            </h2>
            <Link to="/admin/writing">
              <button style={{ width: "60px", height: "30px" }}>글쓰기</button>
            </Link>
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "1000px",
              height: "400px",
            }}
          >
            <p>게시판 상세목록</p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Boardmanagement;
