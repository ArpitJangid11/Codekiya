import Link from 'next/link'
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
           <Link href={`${props.formLink}`}>
           <button className={style.button} >{props.contactButton}</button>
           </Link>
        </div>
    </>
  )
}

export default contactcard
