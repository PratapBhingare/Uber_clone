import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Pages/UserLogin";
import Start from "./Pages/start";
import UserSignup from "./Pages/UserSignup";
import CaptainLogin from "./Pages/CaptainLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import Home from "./Pages/Home";
import UserLogout from "./Pages/UserLogout";
import UserProtectWrapper from "./Pages/UserProtectWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/signup" element={<UserSignup />}></Route>
        <Route path="/captain-login" element={<CaptainLogin />}></Route>
        <Route path="/captain-signup" element={<CaptainSignup />}></Route>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }></Route>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
