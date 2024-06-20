import { atom, selector } from "recoil";
import { getUsers } from "../services/api";

export const dashBoardState = atom({
  key: "dashBoardState",
  default: ["Home", "Dashboard", "History", "Profile", "Settings", "Logout"],
});

export const usersState = atom({
  key: "usersAtoms",
  default: selector({
    key: 'usersSelector',
    get: async () => { 
      const data = await getUsers();
      return data; 
    },
  }),
});
