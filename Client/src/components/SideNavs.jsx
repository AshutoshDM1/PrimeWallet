import { TiHome as Home } from "react-icons/ti";
import { RxDashboard as Dashboard } from "react-icons/rx";
import { IoSettingsSharp as Settings } from "react-icons/io5";
import { CgProfile as Profile } from "react-icons/cg";
import { RiLogoutBoxFill as Logout } from "react-icons/ri";
import { FaHistory as History } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const icons = {
  Home: Home,
  Dashboard: Dashboard,
  History: History,
  Settings: Settings,
  Profile: Profile,
  Logout: Logout,
};
const routes = {
  Home: "/",
  Dashboard: "/dashboard",
  History: "/history",
  Settings: "/dashboard",
  Profile: "/profile",
  Logout: "/logout",
};

const SideNavs = ({ SideNav_Title }) => {

  const navigate = useNavigate();
  const IconComponent = icons[SideNav_Title];

  return (
    <div
      className={`sidenavs h-7h w-90w bg-purple-500 rounded-xl duration-200 ease-in text-white text-1.5vw font-medium flex items-center justify-between cursor-pointer hover:bg-purple-400 ${
        SideNav_Title === "Logout" && "Profile" ? "mt-80 items-self-end" : ""
      } `}
    >
      {IconComponent && <IconComponent className="w-6 h-6 ml-4" />}
      <h1
        onClick={() => {
          navigate(routes[SideNav_Title]);
        }}
        className="mr-10 w-60w"
      >
        {SideNav_Title}
      </h1>
    </div>
  );
};

export default SideNavs;
