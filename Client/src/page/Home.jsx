import NavBar from "../components/Navbar";
import heroPic from "../assets/hero2_logo.png";
import heroPhone from "../assets/hero_phone.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const Home = () => {
  const Pic1 = useRef(null);
  const Pic2 = useRef(null);
  const headers = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });
      const tl2 = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });
      tl2.fromTo(
        Pic1.current,
        { opacity: 0, x: -450 },
        { opacity: 1, x: 0,  }
      );

      tl.fromTo(
        Pic2.current,
        { opacity: 0, x: 150, scale: 0.8 },
        { opacity: 1, x: -750, scale: 1 }
      );
      tl.fromTo(
        headers.current.children,
        {
          x:-100,
          scale: 3,
          opacity: 0,
        },
        {
          x:430,
          stagger:.4,
          scale:1,
          duration:1.3,
          opacity: 1,
        }
      );
      return () => {
        tl.kill();
        tl2.kill();
      };
    },
    { scope: Pic1, Pic2, headers }
  );

  return (
    <>
      <div className="home h-90h w-90w rounded-20r  overflow-hidden">
        <NavBar />
        <div className="h-90h w-full flex">
          <div className="container h-full  w-1/3 flex items-center justify-center ">
            <img src={heroPic} ref={Pic1} className="h-3/4" />
          </div>
          <div className="ml-10 container h-full text-white flex flex-col gap-2 displa items-center justify-center w-1/2">
            <img
              src={heroPhone}
              ref={Pic2}
              className="pic absolute right-32 -z-5 h-2/5"
            />
            <div ref={headers} className="text absolute -ml-52 right-60h z-10">
              <h1 className="font-bold text-2vw mt-10vw">
                Instant Money Transfers,
              </h1>
              <h1 className="font-bold text-2vw">Anywhere in the World.</h1>
              <h1 className="font-bold text-2.5vw -ml-24">
                Experience PrimeWallet Today!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
