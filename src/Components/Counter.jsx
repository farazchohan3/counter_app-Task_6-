import React from "react";
import resetImg from "../Assests/reset.png";
import { useState } from "react";
import minusImg from "../Assests/minus.png";
import plusImg from "../Assests/plus.png";
export default function Counter() {
  const [counterState, setCounterState] = useState(0);
  const decrementHandler = () => {
    var counterNumber = counterState;
    counterNumber = counterNumber - 1;
    if (counterState <= 0) return;
    setCounterState(counterNumber);
  };

  const incrementHandler = () => {
    var counterNumber = counterState;
    counterNumber = counterNumber + 1;
    setCounterState(counterNumber);
  };
  const resetHandler = () => {
    setCounterState(0);
  };
  return (
    <div className=" flex items-center justify-center flex-col  bg-teal-200 p-4 shadow-2xl  shadow-teal-900 rounded-2xl">
      <h1 className="text-xl font-semibold text-teal-950 tracking-wider">
        Counter App
      </h1>
      <div className="min-w-[200px]">
        <h1 className="font-counterFont text-9xl text-center py-1 text-teal-950">
          {counterState}
        </h1>
      </div>
      <div className="mt-8  w-full flex justify-around">
        <button
          className={` ${
            counterState
              ? "text-3xl bg-gray-400 px-6 rounded-full font-semibold hover:bg-gray-500"
              : "text-3xl bg-gray-400 px-6 rounded-full font-semibold hover:bg-gray-500 hover:cursor-not-allowed"
          } `}
          type="submit"
          onClick={decrementHandler}
        >
          <img src={minusImg} alt="minus sign" className="w-7 h-7" />
        </button>
        <button
          className="text-3xl bg-teal-700 px-6 rounded-full py-1 font-semibold hover:bg-teal-800"
          type="submit"
          onClick={incrementHandler}
        >
          <img src={plusImg} alt="minus sign" className="w-7 h-7" />
        </button>
      </div>
      <button
        className={`${
          counterState
            ? "mt-2 text-xl bg-red-400 hover:bg-red-500 px-6 py-1 rounded-full"
            : "mt-2 text-xl bg-red-400 hover:bg-red-500 px-6 py-1 rounded-full hover:cursor-not-allowed"
        }`}
        type="submit"
        onClick={resetHandler}
      >
        <img src={resetImg} alt="reset button" className="w-7 h-7" />
      </button>
    </div>
  );
}
