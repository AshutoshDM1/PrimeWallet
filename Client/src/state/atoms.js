import { atom, selector } from "recoil";
import { getUsers } from "../services/api";
import { userSelector } from "./selector";

export const dashBoardState = atom({
  key: "dashBoardState",
  default: ["Home", "Dashboard", "History", "Profile", "Settings", "Logout"],
});

export const usersState = atom({
  key: "usersAtoms",
  default: userSelector,
});
