const NavBar = () => {
  return (
    <>
      <div className=" text-white pr-10 pl-10  h-10h  text-gray justify-between flex items-center text-center gap-10">
        <div className="h-10h flex items-center justify-between logo cursor-pointer">
          <img className="mt-10 w-4vw object-cover" src="/wallet_logo.png" />
          <h1 className="ml-5 mt-10 min-h-fit  font-bold text-2vw">
            PrimeWallet
          </h1>
        </div>
        <div className="navs flex items-center gap-10 justify-center font-medium ">
          <h1 className="min-h-fit  text-xl cursor-pointer pt-2 pb-2 pl-4 pr-4 border-white hover:border-gray-300 border-2 rounded-20r ">
            GitHub
          </h1>
          <h1 className="min-h-fit  text-xl cursor-pointer pt-2 pb-2 pl-4 pr-4 border-white hover:border-gray-300 border-2 rounded-20r ">SignUp</h1>
          <h1 className="min-h-fit  text-xl cursor-pointer pt-2 pb-2 pl-4 pr-4 border-white hover:border-gray-300 border-2 rounded-20r ">Login</h1>
          <h1 className="flex justify-center items-center h-10 w-12vw  text-xl cursor-pointer text-white bg-purple-600 border-white rounded-20r  hover:bg-purple-500 ">
            Get-Started
          </h1>
          <h1 className="min-h-fit font-bold text-xl cursor-pointer "></h1>
        </div>
      </div>
    </>
  );
}; 

export default NavBar;
