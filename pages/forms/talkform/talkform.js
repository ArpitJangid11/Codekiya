import React from 'react'
import style from "../partnerform/partnerform.module.css"
import {ImCancelCircle} from 'react-icons/im'

const talkform = () => {
  return (
    <>
        <div className={style.container}>
            <div className={style.cancel}>
            <ImCancelCircle/>
            </div>
            <div className={style.tags}>
                <input className={style.input} type="text" placeholder="Company Name"/>
                <input className={style.input} type="text" placeholder="Company Website"/>
                <input className={style.input} type="email" placeholder="Your Email"/>
                <input className={style.input} type="text" placeholder="Your Phone"/>
                <a className={style.trainer}>Whom you want to train?</a>
                <div >
                    <label>
                        <input className={style.input} type="checkbox"/>
                        Freshers
                    </label>
                    <label>
                        <input className={style.input} type="checkbox"/>
                        Mid manager
                    </label>
                    <label>
                        <input className={style.input} type="checkbox"/>
                        Leadership team
                    </label>
                </div>
            </div>
            <button className={style.button}>Submit</button>
        </div>
    </>
  )
}

export default talkform
