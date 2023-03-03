import Card from "../components/card/card"
import Contactcard from "../components/contact card/contactcard"
import style from "../pages/index.module.css"
import Lead from "./forms/partnerform/partnerform"
function HomePage() {
    return <>
      <div>Welcome to Next.js!</div>
      <div className={style.cardmanage}>
        <Lead></Lead>
        {/* <Card/>
        <Contactcard/>
        <Contactcard/> */}
      </div>
    </>
  }
  
  export default HomePage