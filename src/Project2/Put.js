import { Link } from "react-router-dom";
import styled from "styled-components";

const Contanier = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
`;

export function Put() {
  return (
    <>
      <Contanier>
        <div
          style={{
            border: "0.5px solid black",
            width: "200px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "80px" }}>
            <p>공지사항</p>
            <Link
              to="/board/0"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>더보기</p>
            </Link>
          </div>
          <div>
            <p>Link 유저분들께 전체 안내</p>
            <p>현재 발생중인 오류 안내</p>
            <p>서버 불안정 현상 안내</p>
          </div>
        </div>
        <div
          style={{
            border: "0.5px solid black",
            width: "200px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "80px" }}>
            <p>업데이트</p>
            <Link
              to="/board/1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>더보기</p>
            </Link>
          </div>
          <div>
            <p>2.19(월) 업데이트 안내</p>
            <p>제 4 스테이지 오픈!</p>
            <p>조작법 개선</p>
          </div>
        </div>
      </Contanier>
    </>
  );
}
