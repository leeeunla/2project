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
import { AdventureOfLink } from "./AdventureOfLink";
import Administratorpage from "./Administratorpage";
import { AdminWriting } from "./AdminWriting";

import { UpdateDetalis } from "./UpdateDetalis";

import { QandAdetalis0 } from "./QandADetalis0";
import { GameDetails } from "./GameDetails";
import { ObjectDetails } from "./ObjectDetails";
import MapDetails from "./MapDetails";
import FreeDetails from "./FreeDetails";
import { NoticeDetalis } from "./NoticeDetalis";
import { WalkthroughDetails } from "./WalkthroughDetails";
import Logout from "./Logout";

export const MainContext = createContext();
const Container = styled.div``;
export function Main() {
  return (
    <>
      <MainContext.Provider>
        <BrowserRouter>
          <Container>
            <div>
              <Routes>
                <Route path="/" element={<NavText />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/gameStart" element={<AdventureOfLink />} />
                  <Route path="board/:id" element={<Board />} />
                  <Route path="page" element={<Mypage />} />
                  <Route path="/writing/:category" element={<Writing />} />
                  <Route path="/update/:id" element={<UpdateDetalis />} />
                  <Route path="/notice/:id" element={<NoticeDetalis />} />
                  <Route path="/Free/:id" element={<FreeDetails />} />
                  <Route path="/QA/:id" element={<QandAdetalis0 />} />
                  <Route path="logout" element={<Logout />} />
                  <Route
                    path="/walkthrough/:id"
                    element={<WalkthroughDetails />}
                  />
                  <Route path="/Game/:id" element={<GameDetails />} />
                  <Route path="/Object/:id" element={<ObjectDetails />} />
                  <Route path="/Map/:id" element={<MapDetails />} />
                </Route>

                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="admin/login" element={<Managerlogin />}></Route>
                <Route path="admin/signup" element={<ManagerSignup />} />
                <Route path="find" element={<Findid />}></Route>
                <Route path="quiry" element={<Inquiry />}></Route>
                <Route path="write" element={<Write />}></Route>
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
