import styled from "styled-components";

const Contanier = styled.div`
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;
export function Writing() {
  return (
    <>
      <Contanier>
        <br />
        <Content>
          <textarea
            style={{ width: "650px", height: "2rem", padding: "5px" }}
            placeholder="제목을 입력해주세요"
          ></textarea>
        </Content>

        <Content>
          <textarea
            style={{ width: "800px", height: "40rem", padding: "5px" }}
            placeholder="내용을 입력해주세요"
          ></textarea>
        </Content>
        <button style={{ margin: "20px" }}>취소</button>
        <button>올리기</button>
      </Contanier>
    </>
  );
}
