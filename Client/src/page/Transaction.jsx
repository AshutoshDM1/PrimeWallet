import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { getBalance, transferMoney } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { balanceState } from "../state/atoms";
import { useSetRecoilState } from "recoil";

const Transaction = () => {
  const setBalance = useSetRecoilState(balanceState);
  const navigate = useNavigate();
  const { userId } = useParams();
  let [inputMoney, setInputMoney] = useState("");
  const handleInputMoney = (event) => {
    setInputMoney(event.target.value);
  };
  const handleSendMoney = async () => {
    let data = {
      to: userId,
      amount: inputMoney,
    };
    try {
      await transferMoney(data);
      const updatedBalance = await getBalance();
      setBalance(updatedBalance)
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="h-40h w-40w bg-white rounded-20r shadow-box flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-80h w-80w  rounded-20r overflow-hidden ">
            <h1 className=" trans-header text-black mb-16 font-semibold text-1.7vw h-20h w-full  text-center ">
              {" "}
              Transfer Money{" "}
            </h1>
            <FormControl
              fullWidth
              sx={{ m: 1, height: "10vh" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                inputMode="decimal"
                value={inputMoney}
                onChange={handleInputMoney}
                placeholder="min. 1$"
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <button
              onClick={handleSendMoney}
              className="bg-blue-500 h-20h w-30w mt-4 flex flex-col items-center justify-center text-white font-bold text-1.3vw rounded-xl hover:bg-blue-600 border-2 "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
