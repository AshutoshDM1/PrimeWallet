import { atom, selector } from "recoil";

export const dashBoardState = atom({
  key: 'dashBoardState', 
  default: ["Dashboard", "Home" , "Settings" , "Profile" , "Logout"],  
});