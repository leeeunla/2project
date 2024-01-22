import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [id, setID] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Container>
        <h1>링크의 모험</h1>
        <div>
          <label>
            <input
              type="text"
              name="id"
              placeholder="아이디"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="name"
              placeholder="닉네임"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="passwordcheck"
              name="passwordcheck"
              placeholder="비밀번호 확인"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="man"
              style={{ padding: "10px", margin: "10px" }}
            />
            남성
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="woman"
              style={{ padding: "10px", margin: "10px" }}
            />
            여성
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="email"
              placeholder="이메일"
              style={{ padding: "10px", margin: "10px" }}
            />
            @
            <input
              type="text"
              name="email"
              placeholder="입력"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="birth date"
              placeholder="YYYY/MM/dd"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <button
            style={{
              padding: "10px",
              margin: "10px",
              width: "120px",
            }}
          >
            확인
          </button>
        </div>
      </Container>
    </>
  );
}
