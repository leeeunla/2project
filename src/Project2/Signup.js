import { useState, useEffect } from "react";
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
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
`;

export function Signup() {
  const [nickName, setNickName] = useState(""); // 닉네임
  const [name, setName] = useState(""); // 성함
  const [password, setPassword] = useState("");
  const [loginId, setLoginId] = useState("");
  const [passwordcheck, setPasswordCheck] = useState("");
  // 비밀번호 확인
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState) {
      alert("로그아웃하고 회원가입을 진행해주세요");
      navigate("/");
    }
  }, []);

  const BirthdayChange = (e) => {
    const value = e.target.value;
    const form = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    setBirthday(form);
  };

  async function apiSignup() {
    const user = {
      username: loginId,
      password: password,
      name: name,
      nickname: nickName,
      birthDate: birthday,
      gender: gender,
      email: email,
    };

    const response = await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      alert("회원가입이 완료되었습니다. 로그인해주세요.");
      navigate("/login");
    } else {
      if (response.resultCode === "ERROR") {
        alert("회원가입이 취소되었습니다. 다시 회원가입 해주세요");
        navigate("/signup");
      }
    }
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px", color: "EB7BCo" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#6495Ed",
          }}
        >
          <h1>링크의 모험</h1>
        </Link>
      </div>
      <Container>
        <BackgroundImage />
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
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              placeholder="아이디"
              style={{ padding: "10px", margin: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
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
              value="MAN"
              style={{ padding: "10px", margin: "10px" }}
              checked={gender === "MAN"}
              onChange={(e) => setGender(e.target.value)}
            />
            남성
            <input
              type="radio"
              name="gender"
              value="WOMAN"
              style={{ padding: "10px", margin: "10px" }}
              checked={gender === "WOMAN"}
              onChange={(e) => setGender(e.target.value)}
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
              width: "250px",
              borderRadius: "5px",
              backgroundColor: "#6495Ed",
              cursor: "pointer",
              borderWidth: "1px",
              color: "white",
            }}
            onClick={apiSignup}
          >
            회원가입
          </button>
        </div>
      </Container>
    </>
  );
}
