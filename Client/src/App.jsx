import { RecoilRoot } from "recoil";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SignUp from "./page/signUp";
import Login from "./page/Login";
import { Toaster } from "react-hot-toast";
import DashBoard from "./page/DashBoard";

function App() {
  const cursorCircle = useRef(null);
  useGSAP(() => {
    window.addEventListener("mousemove", function (dets) {
      gsap.to(cursorCircle.current, {
        duration: 0.8,
        left: dets.x,
        top: dets.y,
      });
    });
  });

  return (
    <>
      <div ref={cursorCircle} id="crsr"></div>
      <div
        style={{
          backgroundImage: 'url("./Main_bg.jpg")',
          backgroundSize: "cover",
        }}
        className="main h-screen w-full flex justify-center items-center  "
      >
        {" "}

          <RecoilRoot>
            <BrowserRouter>
              <Toaster position="top-right" reverseOrder={false} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />} />
              </Routes>
            </BrowserRouter>
          </RecoilRoot>
      </div>
    </>
  );
}

export default App;
