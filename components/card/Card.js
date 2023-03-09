import React from "react";
import style from "../card/card.module.css";
import {AiOutlineSolution} from 'react-icons/ai'
const card = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.head}>
         <div className={style.icon}>
          <AiOutlineSolution/>
         </div>
          <h4 className={style.heading}>{props.cardHeading}</h4>
        </div>
        <div className={style.paragraph}>
          {props.cardParagraph}     
        </div>
      </div>
    </>
  );
};

export default card;
