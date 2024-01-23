import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
`;

const Findid = () => {
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  return (
    <Container>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>
          이름:
          <input
            type="text"
            placeholder="이름"
            value={name}
            style={{ padding: "10px", margin: "10px" }}
          />
        </label>
        <label>
          이메일: &nbsp;
          <input
            type="email"
            value={email}
            placeholder="Email"
            style={{ padding: "10px", marginRight: "26px" }}
          />
        </label>
        <div>
          <button
            type="submit"
            style={{
              padding: "10px",
              margin: "10px",
              width: "120px",
              cursor: "pointer",
            }}
          >
            아이디 찾기
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Findid;
