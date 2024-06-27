import { selector } from "recoil";
import { getBalance, getUsers } from "../services/api";

const userSelector = selector({
  key: 'usersSelctor',
  get: async () => { 
    const data = await getUsers();
    return data; 
  },
})
const getAccountBalanceSelector = selector({
  key: 'balanceSelctor',
  get: async () => { 
    const data = await getBalance();
    return data; 
  },
})

export { userSelector , getAccountBalanceSelector };

