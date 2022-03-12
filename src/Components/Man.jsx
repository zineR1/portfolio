import React from 'react';
import styles from "./Man.module.css";
import man from "../assets/hombre.png";
import project from "../assets/project.png";
import tech from "../assets/tech.png";
import clock from "../assets/clock1.png";
import estrella from "../assets/estrella.gif";
import ConsoleBot from './ConsoleBot';

const Man = () => {
  return (
    <div>
      <div className={styles.gral}>
        <div className={styles.name}>
        <h1>Agustín Dalvit</h1>
        <h2>Full Stack Web Developer</h2>
          <img src={man} alt="man" height="580px" width="315px" />
          </div>

          <div className={styles.div_columns}>
            <div className={styles.columns}>
              <div className={styles.stack}>
               <img src={estrella} alt="star" height="26px" width="26px"/>
              <h2>Frontend</h2>
              </div>
            </div>

          <div className={styles.columns}>
           <div className={styles.icon}>
            <img src={project} alt="icon1" height="55px" width="55px"/>
            </div>
              <h2>4</h2>
              <h3>Projects</h3>
          </div>
          <div className={styles.columns}>
          <div className={styles.icon}>
            <img src={tech} alt="icon2"  height="55px" width="55px"/>
            </div>
              <h2>11</h2>
              <h3>Technologies</h3>
          </div>
          <div className={styles.columns}>
          <div className={styles.icon}>
            <img src={clock} alt="icon3"  height="55px" width="55px"/>
            </div>
              <h2>0 - 1</h2>
              <h3>Experiencie</h3>
          </div>
          </div>
      
      </div>
      <div >
        <ConsoleBot/>
      </div>
      </div>
  )
}

export default Man