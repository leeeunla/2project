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
import Findid from "./Findid";
import { Inquiry } from "./Inquiry";
import { Write } from "./Write";
import Mypage from "./Mypage";
import { Home } from "./Home";

// import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";
import Administratorpage from "./Administratorpage";
import { AdminWriting } from "./AdminWriting";
// import { QueryClient, useQuery } from "react-query";

// const client = new QueryClient();
export const MainContext = createContext();
const Container = styled.div``;
export function Main() {
  // const { data, isLoading } = useQuery("main");
  return (
    <>
      <MainContext.Provider>
        <BrowserRouter>
          <Container>
            <div>
              <Routes>
                <Route path="" element={<NavText />}>
                  <Route path="/" element={<Home />} />
                  <Route path="board/:id" element={<Board />} />
                  <Route path="page" element={<Mypage />} />
                  <Route path="witing" element={<Writing />} />
                </Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="admin/login" element={<Managerlogin />}></Route>
                <Route path="admin/signup" element={<ManagerSignup />} />
                <Route path="find" element={<Findid />}></Route>
                <Route path="quiry" element={<Inquiry />}></Route>
                <Route path="write" element={<Write />}></Route>
                <Route path="chart" element={<Chart2 />}></Route>
                <Route
                  path="admin/dashboard"
                  element={<Administratorpage />}
                ></Route>
                <Route path="admin/writing" element={<AdminWriting />}></Route>
              </Routes>
            </div>
          </Container>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}
