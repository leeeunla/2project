import styled from "styled-components";

const Contanier = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 400px;
  padding: 15px;
`;
export function Write() {
  return (
    <>
      <Contanier>
        <h3 style={{ borderBottom: "1px solid black" }}>문의유형</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            borderBottom: "1px solid black",
          }}
        >
          <p style={{ borderRight: "1px solid black", paddingRight: "120px" }}>
            아이디
          </p>
          <p>고객명</p>
        </div>
        <div style={{ margin: "10px" }}>
          <label>
            제목: &nbsp;
            <input
              type="text"
              placeholder=""
              style={{ padding: "10px", width: "210px" }}
            />
          </label>
        </div>
        <div style={{ margin: "10px" }}>
          <label>
            내용: &nbsp;
            <input type="text" placeholder="" style={{ padding: "30px" }} />
          </label>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              margin: "10px",
              padding: "5px",
              backgroundColor: "skyblue",
              color: "white",
              borderWidth: "thin",
            }}
          >
            문의하기
          </button>
          <button style={{ margin: "10px", padding: "5px" }}>취소</button>
        </div>
      </Contanier>
    </>
  );
}
