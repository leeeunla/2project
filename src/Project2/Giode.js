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
          <div
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "rgb(102,153,255)",
              borderRadius: "10px",
            }}
          >
            <p>
              링크의 모험에 <br /> 오신걸 환영합니다.
            </p>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "#87CEEB",
              borderRadius: "10px",
            }}
          >
            <p>
              어떠한 힘정들이 <br /> 있을끼요~?
            </p>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "50px",
              backgroundColor: "rgb(135, 206, 250)",
              borderRadius: "10px",
            }}
          >
            <p>
              어떠한 맵이 <br /> 기다리고 있을까요?
            </p>
          </div>
        </div>
      </Contanier>
    </>
  );
}
