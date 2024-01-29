import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contanier = styled.div`
  display: flex;
`;
const Th = styled.th`
  padding-right: 50px;
  padding-left: 50px;
  height: 45px;
`;
export function Inquiry() {
  return (
    <>
      <Contanier>
        <div>
          <h2>링크의 모험</h2>
          <p
            style={{
              border: "1px solid black",
              textAlign: "center",
              height: "50px",
              fontSize: "20px",
              fontWeight: "800",
              paddingTop: "25px",
            }}
          >
            내 문의내역
          </p>
        </div>
        <div
          style={{
            marginTop: "72px",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <h3>내 문의내역</h3>
          <p>
            최근 6개월 동안 접수하신 1:1문의내역 및 답변 내용을 확인하실 수
            있습니다.
          </p>
          <table
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              display: "flex",
            }}
          >
            <thead>
              <Th>번호</Th>
              <Th>제목</Th>
              <Th>날짜</Th>
              <Th>처리상태</Th>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
          <br />
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
        </div>
      </Contanier>
    </>
  );
}
