const NavBar = () => {
  return (
    <>
      <div className="pr-10 pl-10  h-10h  text-gray justify-between flex items-center text-center gap-10">
        <div className="logo cursor-pointer">
          <h1 className="min-h-fit  font-bold text-1.5vw">PrimeWallet</h1>
          <img src="" alt="" />
        </div>
        <div className="navs flex items-center gap-10 justify-center font-medium ">
          <h1 className="min-h-fit  text-xl cursor-pointer">GitHub</h1>
          <h1 className="min-h-fit  text-xl cursor-pointer">About</h1>
          <h1 className="min-h-fit  text-xl cursor-pointer ">Login</h1>
          <h1 className="flex justify-center items-center h-10 w-12vw  text-xl cursor-pointer text-white bg-purple-500 border-white rounded-20r ">
            Get-Started
          </h1>
          <h1 className="min-h-fit font-bold text-xl cursor-pointer "></h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
