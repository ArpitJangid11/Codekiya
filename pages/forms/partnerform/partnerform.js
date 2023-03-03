import React from 'react'
import style from "../partnerform/partnerform.module.css"

const partnerform = () => {
  return (
    <>
        <div className={style.container}>
            <div className={style.tags}>
                <input className={style.input} type="text" placeholder="Institute Name"/>
                <input className={style.input} type="text" placeholder="Institute Website"/>
                <input className={style.input} type="email" placeholder="Your Email"/>
                <input className={style.input} type="text" placeholder="Your Phone"/>
                <input className={style.input} type="text" placeholder="Your Phone"/>
                <input className={style.input} type="text" placeholder="How we could partner"/>
            </div>
            <button className={style.button}>Submit</button>
        </div>
    </>
  )
}

export default partnerform;
