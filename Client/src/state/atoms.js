import { atom, selector } from "recoil";
import { getUsers } from "../services/api";
import { getAccountBalanceSelector, userSelector } from "./selector";

export const loadingState = atom({
  key: "loadingState",
  default: 0,
});
export const navState = atom({
  key: "navState",
  default: 0,
});
export const dashBoardState = atom({
  key: "dashBoardState",
  default: ["Home", "Dashboard", "History", "Profile", "Settings", "Logout"],
});

export const usersState = atom({
  key: "usersAtoms",
  default: userSelector,
});

export const balanceState = atom({
  key: "balanceAtoms",
  default: getAccountBalanceSelector,
});
