import React from "react";
import styles from "../footer/footer.module.css";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <>
        <div className={styles.footerList}>
          <div className={styles.footerLeft}>
            <Link href="/">
              Codekiya
            </Link>
          </div>
          <div className={styles.footerCenter}>
          <p className={styles.footerLinks}>
            <Link href="/about/about"> About Us
              </Link>
              <Link href="/courses/courses"> Courses 
              </Link>
              <Link href="/blog/blog"> Blog 
              </Link>
              <Link href="/"> Login
              </Link>
            </p>         
          </div>

          <div className={styles.footerRight}>
              <p>
                {/* <BsFillEnvelopeFill /> */}
                <a href="mailto:support@company.com">Codekiya@gmail.com</a>
              </p>
            <div className={styles.footerIcons}>
           
              <Link href="#">
                  <BsFacebook />
                
              </Link>
              <Link href="#">
                  <BsTwitter />
                
              </Link>
              <Link href="#">
                  <AiFillLinkedin />
                
              </Link>
              <Link href="#">
                  <BsGithub />
                
              </Link>
            </div>
          </div>
          <div className={styles.copy}>
          <p >Codekiya.com © 2023. All Right Reserved</p>
          </div>
        </div>
     
    </>
  );
};

export default footer;