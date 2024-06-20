import { atom, selector } from "recoil";

export const dashBoardState = atom({
  key: "dashBoardState",
  default: [, "Home", "Dashboard", "History", "Profile", "Settings", "Logout"],
});

export const users = atom({
  key: "users",
  default: [
    {
      _id: "1",
      username: "MoDx",
    },
    {
      _id: "2",
      username: "JaneDoe",
    },
    {
      _id: "3",
      username: "JohnSmith",
    },
    {
      _id: "4",
      username: "AliceWonder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
    {
      _id: "5",
      username: "BobBuilder",
    },
  ],
});

