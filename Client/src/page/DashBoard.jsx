import { useState } from "react";
import NavBar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { dashBoardState } from "../state/atoms";

const DashBoard = () => {
  const btn = useRecoilValue(dashBoardState);
  return (
    <>
      <div className="h-screen w-full flex flex-col ">
        <NavBar />
        <div className="h-90h w-full flex items-center justify-center  ">
          <div className="Dashborad h-98h w-98w  flex rounded-20r overflow-hidden">
            <div className="sideNav h-full w-20w text-black font-bold text-1.5vw border-white border-x-2 border-y-2 pt-16 rounded-l-20r bg-slate-700 bg-opacity-60 ">
              {btn.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="h-10h w-80w text-center border-white border-b-2 m-6 cursor-pointer "
                    >
                      {item}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mainContent h-full w-full flex flex-col border-white border-r-2 border-y-2  rounded-r-20r bg-slate-700 bg-opacity-60">
              <div className="h-1/2 w-full bg-orange-400" ></div>
              <div className="h-1/2 w-full bg-orange-700" ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
