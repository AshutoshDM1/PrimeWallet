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
import Transaction from "./page/Transaction.jsx";
import MainPic from "./assets/Main_bg.jpg";
import Profile from "./page/Profile.jsx";
import AddMoney from "./page/AddMoney.jsx";

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
          backgroundImage: `url("${MainPic}")`,
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
                <Route path="/edit-profile" element={<Profile />} />
                <Route path="/add-money" element={<AddMoney />} />
                <Route path="/dashboard/transaction/:userId" element={<Transaction />} />
              </Routes>
            </BrowserRouter>
          </RecoilRoot>
      </div>
    </>
  );
}

export default App;
