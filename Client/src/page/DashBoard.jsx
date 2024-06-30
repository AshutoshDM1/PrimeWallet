import { useRecoilStateLoadable} from "recoil";
import { balanceState, usersState } from "../state/atoms";
import pic from "../assets/classroom of elit eprofile pic-min.png";
import { useNavigate } from "react-router-dom";
import "../components/style/dashboard.css";
import Loader from "../components/Loader.jsx";
import SideNav from "../components/SideNavMain.jsx";
import Cards from "../components/Cards.jsx";
import { ErrorPage } from "../components/ErrorPage.jsx";
import { getUsername } from "../services/api.js";

const DashBoard = () => {
  const navigate = useNavigate();

  const [Balance, setBalance] = useRecoilStateLoadable(balanceState);
  const [userList, setUserList] = useRecoilStateLoadable(usersState);

  const handleSendMoney = (userId) => {
    navigate(`/dashboard/transaction/${userId}`);
  };
  const username = getUsername();
  if (userList.state === "loading") {
    return <Loader />;
  }

  if (userList.state === "hasError") {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  return (
    <div className="h-screen w-full flex text-white bg-white">
      <SideNav />
      <div className="dashboard_main h-full w-80w">
        <div className="dashboard_nav h-10h w-full flex justify-center items-center">
          <div className="h-80h w-90w -400 flex justify-between items-center text-black">
            <h1 className="ml-5 min-h-fit font-bold text-2vw">Dashboard</h1>
            <div className="h-70h w-60w  flex justify-center items-center rounded-lg">
              <input
                type="text"
                className="w-80w py-2 pl-3 rounded-10r focus:outline-none border "
                placeholder="Search Friend"
              />
              <button className="text-black text-1vw font-medium w-10w bg-white h-80h m-4 rounded-15r " >Search</button>
            </div>
            <h1 className="username text-black font-semibold text-2vw h-full mt-6 w-fit text-center " >{username}</h1>
            <img
              className="h-full rounded-full bg-white overflow-hidden"
              src={pic}
            />
          </div>
        </div>
        <div className="h-90h w-full flex">
          <div className="h-full w-70w pt-24 text-black flex flex-col items-center">
            <div className="user_container_main bg-white h-90h w-80w">
              <h1 className="h-5h font-bold text-1.5vw">Send Money</h1>
              <div className="user_container pr-8 h-90h mt-8 text-black overflow-auto">
                {userList.contents.map((item, index) => (
                  <div
                    key={item._id}
                    className="h-10h flex mb-2 justify-between items-center border-b-2 border-black-500"
                  >
                    <p className="text-1.2vw text-black font-medium capitalize tracking-wide">
                      {item.username}
                    </p>
                    <button
                      className="h-90h w-15w bg-blue-600 text-white font-medium rounded-20r text-1vw"
                      onClick={() => handleSendMoney(item._id)}
                    >
                      Send
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full w-30w flex flex-col items-center">
            <div className="dashboard_blance h-15h w-70w bg-white rounded-xl flex flex-col items-center text-black">
              <h1 className="h-50h font-bold text-2vw">Your Balance</h1>
              <h1 className="h-10h font-bold text-1.5vw">
                ${Balance.contents.balance}
              </h1>
            </div>
            <div className="h-70h mt-4 w-90w flex items-center justify-center text-black">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
