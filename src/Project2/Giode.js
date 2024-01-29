import styled from "styled-components";

const Contanier = styled.div`
  /* background-color: rgb(230, 230, 250); */
  border: 1px solid white;
  border-radius: 10px;
  width: 1000px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export function Giode() {
  return (
    <>
      <Contanier>
        <p style={{ marginLeft: "10px", color: "white" }}>링크의 모험 정보</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "gray",
          }}
        >
          <p
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "rgb(102,153,255)",
              borderRadius: "10px",
            }}
          >
            게임정보
          </p>
          <p
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "#87CEEB",
              borderRadius: "10px",
            }}
          >
            게임 오브젝트
          </p>
          <p
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "rgb(135, 206, 250)",
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
