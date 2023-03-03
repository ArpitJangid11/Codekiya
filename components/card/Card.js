import React from "react";
import style from "../card/card.module.css";
import {AiOutlineSolution} from 'react-icons/ai'
const card = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.head}>
         <div className={style.icon}>
          <AiOutlineSolution/>
         </div>
          <h4 className={style.heading}>Problem solving & storytelling</h4>
        </div>
        <div className={style.paragraph}>
          Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!
        </div>
      </div>
    </>
  );
};

export default card;
