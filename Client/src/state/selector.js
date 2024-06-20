import { selector } from "recoil";
import { getUsers } from "../services/api";

// const userSelector = selector({
//   key: 'usersSelctor',
//   get: async () => { 
//     const data = await getUsers();
//     return data; 
//   },
// })

export { userSelector };

