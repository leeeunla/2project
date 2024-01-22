import { createContext, useState } from "react";
import { Footer } from "./Footer";
import GameSwiper from "./GameSwiper";
import { Giode } from "./Giode";
import { Header } from "./Header";
import { Login } from "./Login";
import { NavText } from "./NavText";
import { Put } from "./Put";
import { Signup } from "./Signup";
import { Writing } from "./Writing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Managerlogin } from "./Managerlogin";
import { ManagerSignup } from "./ManagerSignup";
import { Board } from "./Board";

export const MainContext = createContext();
const Container = styled.div``;

export function Main() {
  const [mainList, SetMainList] = useState("");
  return (
    <>
      <MainContext.Provider value={{ mainList, SetMainList }}>
        <BrowserRouter>
          <Container>
            <div>
              <Routes>
                <Route path="/" element={<NavText />}>
                  <Route path="board/:id" element={<Board />} />
                </Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="admin/login" element={<Managerlogin />}></Route>
                <Route path="admin/signup" element={<ManagerSignup />}></Route>
              </Routes>
            </div>
          </Container>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}
