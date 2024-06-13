import { RecoilRoot } from "recoil";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SignUp from "./page/signUp";

function App() {
  const cursorCircle = useRef(null);
  useGSAP(() => {
    window.addEventListener("mousemove", function (dets) {
      gsap.to(cursorCircle.current, {
        duration:.8,
        left: dets.x,
        top: dets.y,
      });
    });
  });

  return (
    <>
      <div ref={cursorCircle} id="crsr"></div>
      <div className="main  h-screen w-full flex justify-center items-center  ">
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
