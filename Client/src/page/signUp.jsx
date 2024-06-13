import { useGSAP } from "@gsap/react";
import NavBar from "../components/Navbar";
import { useRef } from "react";
import gsap from "gsap";

const SignUp = () => {
  const home = useRef();

  useGSAP(() => {
    gsap.to(home.current , {
      height:"100%",
      width:"100%",
      duration:1,
      delay:.5,
      borderRadius:0,
    })
  },{scope : home} );

  return (
    <>
      <div ref={home} className="home h-90h w-90w rounded-20r  overflow-hidden">
        <NavBar />
      </div>
    </>
  );
};

export default SignUp;
