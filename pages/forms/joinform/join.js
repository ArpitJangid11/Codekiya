import React from 'react'
import style from "../partnerform/partnerform.module.css"
import {ImCancelCircle} from 'react-icons/im'

const join = () => {
  return (
    <>
        <div className={style.container}>
            <div className={style.cancel}>
              <ImCancelCircle/>
            </div>
            <div className={style.tags}>
                <input className={style.input} type="text" placeholder="Name"/>
                <input className={style.input} type="text" placeholder="Place"/>
                <input className={style.input} type="email" placeholder="Your Email"/>
                <input className={style.input} type="text" placeholder="Your Phone"/>
                <input className={style.input} type="text" placeholder="Message"/>
            </div>
            <button className={style.button}>Submit</button>
        </div>
    </>
  )
}

export default join
