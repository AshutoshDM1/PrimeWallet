import { useEffect, useState } from "react";
import Input from "../components/Input";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EditProfileAPI, getEmail, getUsername } from "../services/api";

const Profile = () => {
  const navigate = useNavigate();

  const [inputs, setInput] = useState({
    existingUsername : getUsername(),
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setInput((prevInputs) => ({
        ...prevInputs,
        username: getUsername(),
        email: getEmail(),
      }));
    }, 2000);
  }, []);

  const handleInput = (event) => {
    setInput({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleEditProfile = async () => {
    const updatedInputs = { ...inputs };
    if (updatedInputs.password === "") {
      delete updatedInputs.password;
    }
    await EditProfileAPI(updatedInputs);
    setTimeout(()=> {
      navigate("/dashboard");
    },500)
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    toast.success("Logout successful! ");
    navigate("/");
  };

  return (
    <>
      <div className="w-50w h-screen flex items-center justify-center ">
        <div className="h-60h w-70w rounded-20r bg-white flex flex-col gap-3 items-center justify-center ">
          <h1 className="trans-header text-purple-600 font-semibold text-1.7vw h-20h w-full text-center">
            Edit Profile
          </h1>
          <Input
            onChange={handleInput}
            type="text"
            placeholder="Name"
            name="username"
            className={null}
            value={inputs.username}
          />
          <Input
            onChange={handleInput}
            type="text"
            placeholder="Email"
            name="email"
            className={null}
            value={inputs.email}
          />
          <Input
            onChange={handleInput}
            type="text"
            placeholder="New Password"
            name="password"
            className={null}
            value={inputs.password}
          />
          <button
            onClick={handleEditProfile}
            className="font-medium mt-16 mb-4 bg-purple-600 h-7h w-20w rounded-3xl text-center text-1vw text-white"
          >
            Submit
          </button>
          <button
            onClick={logoutUser}
            className="font-medium mb-4 bg-black h-10h w-40w rounded-3xl text-center text-1.2vw text-white"
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};
export default Profile;
