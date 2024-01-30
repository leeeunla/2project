import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 25px;
`;

const UserList = () => {
  return (
    <>
      <Container>
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            height: "100px",
          }}
        >
          <h2 style={{ textAlign: "center", padding: "12px 0" }}>전체회원</h2>
        </div>

        <div
          style={{
            border: "1px solid black",
            width: "1200px",
            height: "700px",
          }}
        >
          <h2>회원목록</h2>
        </div>
      </Container>
    </>
  );
};

export default UserList;
