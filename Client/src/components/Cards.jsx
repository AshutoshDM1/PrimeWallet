import { useGSAP } from "@gsap/react";
import pic from "../assets/87_done.png";
import css from "./style/cards.module.css";
import gsap from "gsap";
import { useRef } from "react";

const Cards = () => {
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();

  const animateCards = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      card1.current,
      {
        opacity: 0,
        rotate: -50,
        x: 30,
      },
      {
        opacity: 1,
        rotate: 0,
        x: 30,
      }
    );
    tl.to(card2.current, {
      delay: 0.3,
      opacity: 1,
      x: 30,
      rotation: 10,
    });
    tl.to(card3.current, {
      delay: 0.3,
      opacity: 1,
      x: 48,
      rotation: 20,
    });
  };
  useGSAP(
    () => {
      animateCards();
    },
    { scope: card1, card2, card3 }
  );

  return (
    <>
      <div className={` ${css.cards1} flex items-center justify-center`}>
        <div
          ref={card1}
          className={`${css.card_main1} h-80h w-90w p-6 rounded-15r`}
        >
          <h1 className="font-medium text-1.2vw  text-center">
            Your Earning This Month
          </h1>
          <img className="w-full" src={pic} />
          <div className="h-20h w-full mt-8  flex">
            <div className="h-full w-50w ">
              <h1 className="font-medium text-center text-1vw">Estimated</h1>
              <h1 className="font-medium text-center text-1vw">$452</h1>
            </div>
            <div className="h-full w-50w ">
              <h1 className="font-medium text-center text-1vw">Calculated</h1>
              <h1 className="font-medium text-center text-1vw">$984</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${css.cards2} flex items-center justify-center`}>
        <div
          ref={card2}
          className={`${css.card_main2} h-80h w-90w p-6 rounded-15r`}
        >
          <h1 className="font-medium text-1.2vw  text-center">
            Your Earning This Month
          </h1>
          <img className="w-full" src={pic} />
          <div className="h-20h w-full mt-8  flex">
            <div className="h-full w-50w ">
              <h1 className="font-medium text-center text-1vw">Estimated</h1>
              <h1 className="font-medium text-center text-1vw">$452</h1>
            </div>
            <div className="h-full w-50w ">
              <h1 className="font-medium text-center text-1vw">Calculated</h1>
              <h1 className="font-medium text-center text-1vw">$984</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${css.cards3} flex items-center justify-center`}>
        <div
          ref={card3}
          className={`${css.card_main3} h-80h w-90w  p-6 rounded-15r`}
        >
          <h1 className="font-medium text-1.2vw  text-center">
            Your Earning This Month
          </h1>
          <img className="w-full" src={pic} />
          <div className="h-20h w-full mt-8  flex">
            <div className="h-full w-50w ">
              <h1 className="font-medium text-center text-1vw">Estimated</h1>
              <h1 className="font-medium text-center text-1vw">$452</h1>
            </div>
            <div className="h-full w-50w ">
              <h1 className="font-medium text-center text-1vw">Calculated</h1>
              <h1 className="font-medium text-center text-1vw">$984</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
