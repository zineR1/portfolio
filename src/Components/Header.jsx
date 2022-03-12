import React from 'react';
import styles from './Header.module.css'; 
import Logo from '../assets/ziner1.png';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';


export default function Header() {

 function handleSelectLenguage(e){
     // dispatch(filterCreated(e.target.value))
 }


  return (
    <div className={styles.header}>
      <div className={styles.content}>
            <img className={styles.imagelogo} src={Logo} alt="logo" height="30px" width="135px"/>
            <div className={styles.rs}>
            <select className={styles.select} onChange={e => handleSelectLenguage(e)}>
                 <option className={styles.option} value=''>Language</option>
                <option className={styles.option} value= 'en'>EN</option>
                <option className={styles.option} value= 'es'>ES (coming soon)</option>
            </select>
            <div className={styles.rs_circle}>
            <a href="https://github.com/zineR1" target="_blank" without rel="noreferrer">
                <img src={Github} alt='github' height="30px" width="30px"/>
                </a>
                <a href="https://linkedin.com/in/agustindalvit" target="_blank" without rel="noreferrer">
                <img src={Linkedin} alt='linkedin' height="30px"width="30px"/>
                </a>
                </div>
          </div>
      </div>
    </div>
  );
}
