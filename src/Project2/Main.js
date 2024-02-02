import { createContext, useState } from "react";
import { Login } from "./Login";
import { NavText } from "./NavText";
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

import { UpdateDetalis } from "./UpdateDetalis";
import { NotificationDetalis } from "./NotificationDetalis";
import { QandAdetalis0 } from "./QandADetalis0";
import { AttackDetails } from "./AttackDetails";
import { GameDetails } from "./GameDetails";
import { ObjectDetalis } from "./ObjectDetails";
import FreeDetails from "./FreeDetails";
import FreeComment from "./FreeComment";

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
                  <Route path="/update/:id" element={<UpdateDetalis />} />
                  <Route path="/notice/:id" element={<NotificationDetalis />} />
                  <Route path="/Free/:id" element={<FreeDetails />} />

                  <Route path="/QA/:id" element={<QandAdetalis0 />} />
                  <Route path="/Attack/:id" element={<AttackDetails />} />
                  <Route path="/Game/:id" element={<GameDetails />} />
                  <Route path="/Object/:id" element={<ObjectDetalis />} />
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
