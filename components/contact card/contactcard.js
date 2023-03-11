import React from 'react'
import style from '../contact card/contactcard.module.css'
const contactcard = (props) => {
  return (
    <>
        <div className={style.container}>
          
           <div className={style.paragraph}>
            {props.contactParagraph1}
           </div>
           <div className={style.paragraph}>
           {props.contactParagraph2}
           <br></br>
           </div>
           <button className={style.button}>{props.contactButton}</button>
        </div>
    </>
  )
}

export default contactcard
