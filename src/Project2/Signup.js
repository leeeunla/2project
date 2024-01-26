import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export function Signup() {
  const [username, setUsername] = useState(""); // 닉네임
  const [name, setName] = useState(""); // 성함
  const [password, setPassword] = useState("");
  const [id, setID] = useState("");
  const [passwordcheck, setPasswordCheck] = useState("");
  // 비밀번호 확인
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  const [signup, setSignup] = useState();
  const navigate = useNavigate();

  const BirthdayChange = (e) => {
    const value = e.target.value;
    const form = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    setBirthday(form);
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px", color: "EB7BCo" }}>
        <h1>링크의 모험</h1>
      </div>
      <Container>
        <h1>회원가입</h1>
        <div>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="id"
              value={id}
              onChange={(e) => setID(e.target.value)}
              placeholder="아이디"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              name="passwordcheck"
              value={passwordcheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={BirthdayChange}
              style={{ padding: "10px", margin: "10px" }}
              value={birthday}
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
