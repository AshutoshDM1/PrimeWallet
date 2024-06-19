import { useState } from "react";
import NavBar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { dashBoardState } from "../state/atoms";

const DashBoard = () => {
  const btn = useRecoilValue(dashBoardState);
  return (
    <>
      <div className="h-screen w-full flex flex-col bg-white text-black ">
        <NavBar/>
       
      </div>
    </>
  );
};

export default DashBoard;
