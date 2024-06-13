import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();  

  const hadleClick = () => {
    navigate("/signUp")
  } 
  
  const Navs = useRef(null);
  const Logos = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(Logos.current.children, {
        x: -550,
        stagger: -.3,
        duration: 1.2,
        delay:1,
      });
      tl.from(Navs.current.children, {
        y: -100,
        stagger: 0.2,
      });

      return () => {
        tl.kill();
      };
    },
    { scope: Navs, Logos }
  );

  return (
    <>
      <div className="text-white pr-10 pl-10 h-10h text-gray justify-between flex items-center text-center gap-10">
        <div
          ref={Logos}
          className="h-10h flex items-center justify-between logo cursor-pointer"
        >
          <img
            className="mt-10 w-4vw object-cover"
            src="/wallet_logo.png"
            alt="Wallet Logo"
          />
          <h1 className="ml-5 mt-10 min-h-fit font-bold text-2vw">
            PrimeWallet
          </h1>
        </div>
        <div
          ref={Navs}
          className="navs flex items-center gap-10 justify-center font-medium "
        >
          <motion.h1
            whileTap={{ scale: 1.1 }}
            className="min-h-fit text-xl cursor-pointer pt-2 pb-2 pl-4 pr-4 border-white hover:border-gray-300 border-2 rounded-20r"
          >
            GitHub
          </motion.h1>
          <motion.h1
            whileTap={{ scale: 1.1 }}
            className="min-h-fit text-xl cursor-pointer pt-2 pb-2 pl-4 pr-4 border-white hover:border-gray-300 border-2 rounded-20r"
            onClick={hadleClick}
          >
            SignUp
          </motion.h1>
          <motion.h1
            whileTap={{ scale: 1.1 }}
            className="min-h-fit text-xl cursor-pointer pt-2 pb-2 pl-4 pr-4 border-white hover:border-gray-300 border-2 rounded-20r"
          >
            Login
          </motion.h1>
          <motion.h1
            whileTap={{ scale: 1.1 }}
            className="flex justify-center items-center h-10 w-12vw text-xl cursor-pointer text-white bg-purple-600 border-white rounded-20r hover:bg-purple-500"
          >
            Get-Started
          </motion.h1>
          <h1 className="min-h-fit font-bold text-xl cursor-pointer"></h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
