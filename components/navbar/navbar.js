import React, {useState} from "react";
import Hamburger from "../hamburger/hamburger";
import style from "../navbar/navbar.module.css";
import Link from "next/link";

const navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.container} >
        <Link href={"/"}>
          <div className={style.logo}>CodeKiya.com</div>
        </Link>
        <div className={style.menuIcon} onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        {/* <div className={`style.pages ${showNavbar && 'active'}`}> */}
          <ul className={style.Ul}>
            <Link href={"/about/about"}>
              <li className={style.li} >About Us</li>
            </Link>
            <Link href={"/courses/courses"}>
              <li className={style.li}>Courses</li>
            </Link>
            <Link href={"/blog/blog"}>
              <li className={style.li}>Blogs</li>
            </Link>
            <Link href={"/"}>
              <button className={style.btn} >
                Login
              </button>
            </Link>
          </ul>
        {/* </div> */}
        </div>
        
      </nav>
      { showNavbar &&
         <div className={style.mNav}>
         <div className={style.mobNav}>
          <ul className={style.mobUl}>
          <Link href={"/about/about"}>
              <li className={style.mobli} >About Us</li>
            </Link>
            <Link href={"/courses/courses"}>
              <li className={style.mobli}>Courses</li>
            </Link>
            <Link href={"/blog/blog"}>
              <li className={style.mobli}>Blogs</li>
            </Link>
            <Link href={"/"}>
              <button className={style.mobbtn} >
                Login
              </button>
              </Link>
          </ul>
         </div>
     </div>
      }
    </>
  );
};

export default navbar;
