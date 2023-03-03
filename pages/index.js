import Card from "../components/card/card"
import Contactcard from "../components/contact card/contactcard"
import style from "./index.module.css"
import Partnerform from "./forms/partnerform/partnerform"
import Joinform from "./forms/joinform/join"
import Talkform from "./forms/talkform/talkform"
function HomePage() {
    return <>
      <div>Welcome to Next.js!</div>
      <div className={style.cardmanage}>
        <Talkform/>
        {/* <Joinform/> */}
        {/* <Partnerform/> */}
        {/* <Card/>
        <Contactcard/>
        <Contactcard/> */}
      </div>
    </>
  }
  
  export default HomePage