import Card from "../components/card/card"
import Contactcard from "../components/contact card/contactcard"
import style from "./index.module.css"
import Partnerform from "./forms/partnerform/partnerform"
import Joinform from "./forms/joinform/join"
import Talkform from "./forms/talkform/talkform"
import Image from "next/image";

function HomePage(props) {
    return <>
    <div className={style.homepage}>
    <div className={style.firstsection}>
      <Image src="/banner-left-image.png" alt="" width={500} height={400} />
      <Image src="/banner-right-image.png" alt="" width={500} height={400} />
      <div className={style.bannerhead}>
        <h1>
          NOT JUST CREATED,
          <br></br>
          BE A
          <br></br>
          <span>QUALIFIED DATA PROFESSIONAL</span>
        </h1>
      </div>
    </div>
      <div className={style.secondsection}>
        <div className={style.heading}>
          <h1>Why CodeKiya</h1>
          <p>Prepare yorself</p>
        </div>
        <div className={style.cards}>
          <div className={style.row}>
          <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
          <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
          <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
          <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
          <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
          <Card cardHeading='Problem solving & storytelling' cardParagraph='Great data professionals are not just good executioners, but also
          great problem solvers and story tellers. Stand out, as we train you to
          build that skill too!'/>
          </div>
        
        
        </div>
      
      </div>
      <div className={style.cardmanage}>
        {/* <Talkform/> */}
        {/* <Joinform/> */}
        {/* <Partnerform/> */}
        <Contactcard contactParagraph1='Are you an Institute teaching Data Science & AI?' contactParagraph2=' While you are building their Fundamentals, We can train your students to be industry ready' contactButton='Join CodeKiya' formLink="./forms/joinform/join" />
        <Contactcard contactParagraph1='Are you an Institute teaching Data Science & AI?' contactParagraph2=' While you are building their Fundamentals, We can train your students to be industry ready' contactButton='Partner with CodeKiya'/>
        <Contactcard contactParagraph1='Are you an Institute teaching Data Science & AI?' contactParagraph2=' While you are building their Fundamentals, We can train your students to be industry ready' contactButton='Talk to CodeKiya'/>
      </div>
    </div>
    </>
  }
  
  export default HomePage