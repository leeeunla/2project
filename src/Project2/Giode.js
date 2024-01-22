import styled from "styled-components";

const Contanier = styled.div`
  background-color: rgb(230, 230, 250);
  border: 1px solid black;
  border-radius: 10px;
`;

export function Giode() {
  return (
    <>
      <Contanier>
        <p style={{ marginLeft: "10px" }}>링크의 모험 정보</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            게임정보
          </p>
          <p
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            게임 오브젝트
          </p>
          <p
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            맵 정보
          </p>
        </div>
      </Contanier>
    </>
  );
}
