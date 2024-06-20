import { useState } from "react";
import NavBar from "../components/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { dashBoardState, users } from "../state/atoms";
import SideNavs from "../components/SideNavs.jsx";
import { Avatar, Button, Input, TextField } from "@mui/material";
import pic from "../assets/classroom of elit eprofile pic-min.png";
import { useNavigate } from "react-router-dom";
import "../components/style/dashboard.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const SideNav = useRecoilValue(dashBoardState);
  const userList = useRecoilValue(users);
  return (
    <>
      <div className="h-screen w-full flex text-white bg-white">
        <div className="side_nav h-full w-20w flex flex-col justify-center bg-purple-700">
          <div className="h-10h mt-8 w-80w flex  items-center justify-evenly logo cursor-pointer">
            <img
              className=" w-4vw object-cover"
              src="/wallet_logo.png"
              alt="Wallet Logo"
            />
            <h1 className="ml-5 min-h-fit font-bold text-2vw">PrimeWallet</h1>
          </div>
          <div className="side_nav_main h-90h w-full ">
            <div className="h-90h mt-16 w-full flex flex-col gap-1vw  items-center ">
              {SideNav.map((item, index) => {
                return <SideNavs key={index} SideNav_Title={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="dashboard_main h-full w-80w ">
          <div className="dashboard_nav h-10h w-full flex justify-center items-center ">
            <div className=" h-80h w-90w -400 flex justify-between items-center text-black">
              <h1 className="ml-5 min-h-fit font-bold  text-2vw">Dashboard</h1>
              <div className="h-70h w-60w bg-white flex justify-center items-center rounded-lg ">
                <TextField
                  size="small"
                  name="Search Users"
                  className="w-88w h-70h  input bg-white rounded-none "
                  id="outlined-basic"
                  label="Search Users"
                  variant="outlined"
                />
                <Button
                  className="w-10w h-70h rounded-lg "
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </div>
              <img
                className="h-full rounded-full bg-white  overflow-hidden"
                src={pic}
              />
            </div>
          </div>
          <div className="h-90h w-full flex">
            <div className="h-full w-70w pt-24  text-black flex flex-col items-center  ">
              <div className="user_container_main bg-white h-90h w-80w ">
                <h1 className="h-5h font-bold text-1.5vw">Send Money </h1>
                <div className="user_container pr-8 h-90h  mt-8 text-black overflow-auto">
                  {userList.map((item, index) => {
                    console.log(item.username);
                    return (
                      <div
                        key={item._id}
                        className=" h-10h flex mb-2 justify-between items-center border-b-2 border-black-500 "
                      >
                        <p className="text-1.2vw text-black font-medium capitalize tracking-wide">
                          {item.username}
                        </p>
                        <button
                          className="h-90h w-15w bg-blue-600 text-white font-medium rounded-20r text-1vw"
                          
                          onClick={() => navigate(`/transfer`)}
                        >
                          Send
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="h-full w-30w  flex flex-col items-center  ">
              <div className="dashboard_blance h-15h w-70w bg-white rounded-xl flex flex-col items-center text-black">
                <h1 className="h-50h font-bold text-2vw">Your Balance</h1>
                <h1 className="h-10h font-bold text-1.5vw">$40000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
