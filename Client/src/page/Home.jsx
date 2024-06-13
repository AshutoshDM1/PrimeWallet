import NavBar from "../components/Navbar";
import heroPic from "../assets/hero2_logo.png";
import heroPhone from "../assets/hero_phone.png";
function Home() {
  return (
    <>
      <div className="home h-90h w-90w rounded-20r  overflow-hidden">
        <NavBar />
        <div className="h-90h w-full flex">
          <div className="container h-full  w-1/3 flex items-center justify-center ">
            <img src={heroPic} className="h-3/4" />
          </div>
          <div className="ml-10 container h-full text-white flex flex-col gap-2 displa items-center justify-center w-1/2">
            <img src={heroPhone} className="pic absolute right-32 -z-5 h-2/5" />
            <div className="text absolute -ml-52 right-60h z-10">
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
}

export default Home;
