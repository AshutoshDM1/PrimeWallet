import { useRecoilValue } from "recoil";
import SideNavs from "./SideNavs";
import { dashBoardState } from "../state/atoms";
const SideNav = () => {
  const Sidenavmini = useRecoilValue(dashBoardState);
  return (
    <div className="side_nav h-full w-20w flex flex-col justify-center bg-purple-700">
      <div className="h-10h mt-8 w-80w flex items-center justify-evenly logo cursor-pointer">
        <img
          className="w-4vw object-cover"
          src="/wallet_logo.png"
          alt="Wallet Logo"
        />
        <h1 className="ml-5 min-h-fit font-bold text-2vw">PrimeWallet</h1>
      </div>
      <div className="side_nav_main h-90h w-full">
        <div className="h-90h mt-16 w-full flex flex-col gap-1vw items-center">
          {Sidenavmini.map((item, index) => (
            <SideNavs key={index} SideNav_Title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
