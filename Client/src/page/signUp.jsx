import { useGSAP } from "@gsap/react";
import NavBar from "../components/Navbar";
import { useRef, useState } from "react";
import gsap from "gsap";
import pic1 from "../assets/3d_phone_money.png";
import pic2 from "../assets/3d-male-character-happy.png";
import { TextField } from "@mui/material";
import "animate.css";
import { signUpUser } from "../services/api";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const SignUp = () => {
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    setuserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signUpUser(userData);
    } catch (error) {
      toast.error(`Server error: ${error}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const home = useRef(null);
  const Container = useRef(null);
  const Container2 = useRef(null);
  const HeadingElements = useRef(null);
  const pics = useRef(null);

  const animateSignUp = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      home.current,
      {
        height: "90%",
        width: "90%",
        borderRadius: "50px",
      },
      {
        height: "100%",
        width: "100%",
        duration: 1,
        delay: 0.5,
        borderRadius: "0px",
      }
    );
    tl.from(Container.current, {
      y: 900,
      delay: 0.2,
      duration: 1,
      ease: "power3.out",
      force3D: true,
    });

    tl.from(Container2.current, {
      scaleY: 0,
      duration: 1,
      ease: "power3.out",
      force3D: true,
    });
    tl.from(pics.current, {
      opacity: 0,
      x: -220,
      duration: 0.7,
    });
    tl.from(".text > h1 ", {
      y: 100,
      stagger: 0.5,
      duration: 0.7,
    });
    tl.from(".input_container", {
      x: 800,
      stagger: 0.3,
    });
    tl.from(".btn", {
      scale: 0,
    });
  };

  useGSAP(
    () => {
      animateSignUp();
    },
    { scope: home, Container }
  );

  return (
    <>
      <div ref={home} className="home h-screen w-full overflow-hidden">
        <NavBar />
        <div className="containerMain  overflow-hidden h-90h w-full flex items-center justify-center">
          <div
            ref={Container}
            className="containerMain sign_main h-95h bg-white  w-95w flex items-center justify-evenly  rounded-20r 
         "
          >
            <div
              ref={Container2}
              className="signup_container h-95h w-60w bg-gray-500 rounded-20r  ml-6"
            >
              <div
                ref={pics}
                className="pics h-full w-full flex justify-center items-center overflow-hidden"
              >
                <img src={pic1} className="h-80h" />
                <img src={pic2} className="h-60h" />
              </div>
            </div>
            <div className=" h-95h w-40w  rounded-20r ml-6 flex items-center justify-center">
              <div
                ref={HeadingElements}
                className="login_div h-90h w-90w text-black  flex flex-col items-center justify-center"
              >
                <div className="text h-fit w-fit  overflow-hidden">
                  <h1 className="mb-4 h-fit  font-bold text-2.5vw tracking-wide leading-none uppercase rounded-full overflow-hidden ">
                    Create An Account
                  </h1>
                </div>
                <div className="text h-fit w-fit  overflow-hidden">
                  <h1 className=" font-bold text-1.5vw tracking-wide leading-none uppercase rounded-full ">
                    Welcome to PrimeWallet
                  </h1>
                </div>

                <div className="h-80h pt-24 w-full  flex flex-col items-center justify-evenly overflow-hidden">
                  {loading ? (
                    <div className="loading-spinner">
                      <Loader />
                    </div>
                  ) : (
                    <>
                      <div className="input_container w-full flex flex-col justify-evenly mb-8 input_container h-full ">
                        <h1 className="mb-2 font-bold text-1vw uppercase ">
                          USERNAME
                        </h1>
                        <TextField
                          onChange={handleInput}
                          name="username"
                          className="w-90w  h-fit rounded-lg "
                          id="outlined-basic"
                          label="Enter Username"
                          variant="outlined"
                        />
                      </div>
                      <div className="input_container w-full flex flex-col justify-evenly mb-8">
                        <h1 className="mb-2  font-bold text-1vw uppercase ">
                          Email
                        </h1>
                        <TextField
                          onChange={handleInput}
                          name="email"
                          className="w-90w rounded-lg "
                          id="outlined-basic"
                          label="Enter Email"
                          variant="outlined"
                        />
                      </div>
                      <div className="input_container w-full flex flex-col justify-evenly mb-8">
                        <h1 className="mb-2  font-bold text-1vw uppercase ">
                          Password
                        </h1>
                        <TextField
                          onChange={handleInput}
                          name="password"
                          className="w-90w   rounded-lg "
                          id="outlined-basic"
                          label="Enter Password"
                          variant="outlined"
                        />
                      </div>
                      <button
                        onClick={handleClick}
                        className="btn rounded-20r h-40h w-60w bg-gray-600 text-white text-bold text-1.3vw "
                      >
                        SignUp
                      </button>
                    </>
                  )}
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
