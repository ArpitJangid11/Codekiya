import Card from "../components/card/card"
import Contactcard from "../components/contact card/contactcard"
import style from "./index.module.css"
import Partnerform from "./forms/partnerform/partnerform"
import Joinform from "./forms/joinform/join"
import Talkform from "./forms/talkform/talkform"
function HomePage(props) {
    return <>
      <div>Welcome to Next.js!</div>
      <div className={style.cardmanage}>
        {/* <Talkform/> */}
        {/* <Joinform/> */}
        {/* <Partnerform/> */}
        <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
        <Contactcard contactParagraph1='Are you an Institute teaching Data Science & AI?' contactParagraph2=' While you are building their Fundamentals, We can train your students to be industry ready' contactButton='Join CodeKiya'/>
        <Contactcard contactParagraph1='Are you an Institute teaching Data Science & AI?' contactParagraph2=' While you are building their Fundamentals, We can train your students to be industry ready' contactButton='Partner with CodeKiya'/>
      </div>
    </>
  }
  
  export default HomePage