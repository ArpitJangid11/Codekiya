import React from 'react'
import style from '../contact card/contactcard.module.css'
const contactcard = () => {
  return (
    <>
        <div className={style.container}>
          
           <div className={style.paragraph}>
           Are you an Institute teaching Data Science & AI? 
           </div>
           <div className={style.paragraph}>
           While you are building their Fundamentals, We can train your students to be industry ready 
           <br></br>
           </div>
           <button className={style.button}>Join CodeKiya</button>
        </div>
    </>
  )
}

export default contactcard
