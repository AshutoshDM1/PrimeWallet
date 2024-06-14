import { useGSAP } from "@gsap/react";
import NavBar from "../components/Navbar";
import { useRef } from "react";
import gsap from "gsap";
import pic1 from "../assets/3d_phone_money.png";
import pic2 from "../assets/3d-male-character-happy.png";
import pic3 from "../assets/B_RMNBjKDNpV3tcOkLadw-transformed.webp";
import { TextField } from "@mui/material";

const SignUp = () => {
  const home = useRef();

  const animateSignUp = () => {
    gsap.from(home.current, {
      height: "90%",
      width: "90%",
      duration: 1,
      delay: 0.5,
      borderRadius: "50px",
    });
  };

  useGSAP(
    () => {
      // animateSignUp();
    },
    { scope: home }
  );

  return (
    <>
      <div ref={home} className="home h-screen w-full overflow-hidden">
        <NavBar />
        <div className="h-90h w-full flex items-center justify-center">
          <div
            className="sign_main h-95h bg-white  w-95w flex items-center justify-evenly  rounded-20r 
         "
          >
            <div className="signup_container h-95h w-60w bg-gray-500 rounded-20r  ml-6">

              <div className="h-full w-full flex justify-center items-center">
                <img src={pic1} className="h-80h" />
                <img src={pic2} className="h-60h" />
              </div>
            </div>
            <div className=" h-95h w-40w  rounded-20r ml-6 flex items-center justify-center">
              <div className="login_div h-90h w-90w text-black flex flex-col items-center justify-center">
                <h1 className="mb-4 font-bold text-2.5vw tracking-wide leading-none uppercase rounded-full ">
                  Create An Account
                </h1>

                <h1 className=" font-bold text-1.5vw tracking-wide leading-none uppercase rounded-full ">
                  Welcome to PrimeWallet
                </h1>
                <div className="h-60h pt-24 w-full   flex flex-col items-center justify-evenly">
                  <div className=" w-full flex flex-col justify-evenly input-container mb-8">
                    <h1 className="mb-2 font-bold text-1vw uppercase ">
                      USERNAME
                    </h1>
                    <TextField
                      className="w-90w   rounded-lg "
                      id="outlined-basic"
                      label="Enter Username"
                      variant="outlined"
                    />
                  </div>
                  <div className=" w-full flex flex-col justify-evenly mb-8">
                    <h1 className="mb-2  font-bold text-1vw uppercase ">
                      Email
                    </h1>
                    <TextField
                      className="w-90w   rounded-lg "
                      id="outlined-basic"
                      label="Enter Email"
                      variant="outlined"
                    />
                  </div>
                  <div className=" w-full flex flex-col justify-evenly mb-8">
                    <h1 className="mb-2  font-bold text-1vw uppercase ">
                      Password
                    </h1>
                    <TextField
                      className="w-90w   rounded-lg "
                      id="outlined-basic"
                      label="Enter Password"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
