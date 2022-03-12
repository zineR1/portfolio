import React, {useState} from 'react';
import styles from './ConsoleBot.module.css';
import gitbash from '../assets/gitbash.png';
import TextConsole from './TextConsole';

const ConsoleBot = () => {

const [about,setAbout] = useState(false);
const [loadAbout, setLoadAbout] = useState(false);
const [goals,setGoals] = useState(false);
const [loadGoals, setLoadGoals] = useState(false);
const [location,setLocation] = useState(false);
const [loadLocation, setLoadLocation] = useState(false);
const [soft, setSoft] = useState(false)
const [loadSoft, setLoadSoft] = useState(false);
const [activeButtonAbout, setActiveButtonAbout] = useState(false);
const [activeButtonGoals, setActiveButtonGoals] = useState(false);
const [activeButtonLocation, setActiveButtonLocation] = useState(false);
const [activeButtonSoft, setActiveButtonSoft] = useState(false);


    function handleAbout(e){
      setAbout(true);
      setTimeout(() => {
        setLoadAbout(true);
      }, 1350)
      setActiveButtonAbout(true);
        }

    function handleGoals(e){
        setGoals(true);
        setTimeout(() => {
          setLoadGoals(true);
        }, 1350)
        setActiveButtonGoals(true);
    }
        
    function handleLocation(e){
        setLocation(true);
        setTimeout(() => {
          setLoadLocation(true);
        }, 1350)
        setActiveButtonLocation(true);
    }
    function handleSoft(e){
        setSoft(true);
        setTimeout(() => {
          setLoadSoft(true);
        }, 1350)
        setActiveButtonSoft(true);
    }




  return (
    <div className={styles.main}>
        <h2>Console Bot</h2>
    <div className={styles.gral}>
        <div className={styles.top}>
            <div className={styles.gitbash}>
            <img src={gitbash} alt="git" height="18px" width="17px"/>
            </div>
            <p>BotConsole:/c/Users/Recruiter/Desktop</p>
            </div>
            <div className={styles.console_titles}>
                <div className={styles.title1}>
                <h3>Recruiter@DESKTOP-9UT4PCT</h3>
                </div>
                <div className={styles.title2}>
                  <h3>BOTCONSOLE</h3>
                </div>
                <div className={styles.title3}>
                  <h3>~/Portfolio</h3>
                </div>
            </div>

            <p>$ intro</p>
            <p>Welcome to my portfolio! My name is Agustin. 
            I developed this simple bot to let you know a bit more about me. 
            Click one of the buttons and see the magic.</p>

            <div className={styles.console_titles}>
                <div className={styles.title1}>
                <h3>Recruiter@DESKTOP-9UT4PCT</h3>
                </div>
                <div className={styles.title2}>
                  <h3>BOTCONSOLE</h3>
                </div>
                <div className={styles.title3}>
                  <h3>~/Portfolio</h3>
                </div>
            </div>
            <div className={styles.write}>
            <p>$</p>
            {/* ABOUT */}
            <div >
              <div className={styles.intro}>
            {about? <p className={styles.writemachine1}>about<span>&#160;</span></p>: console.log("hola")}
            </div>
            <div className={styles.intro}> 
            {loadAbout && about? <p>I´m a Full Stack Web Developer. I studied on Henry's Bootcamp and recently I discovered 
            the amazing world of Frontend. In the past I've participated in projects using basic desing tools and 
            also managing some projects and teams. I really enjoy solving logic problems and learning new technologies
            as I'm a very proactive and curious person.
            </p>: console.log("hola")}
            </div>
            <div className={styles.textconsole}>
            {loadAbout && about? <TextConsole/>: console.log("Hola")}
            <div className={styles.bar}>
            {loadAbout && about && !goals && !location && !soft? <p>$</p>: console.log("Hola")}
            {loadAbout && about && !goals && !location && !soft? <p className={styles.text1}>|</p>:console.log("Hola") }
            </div>
            </div>

            {/* GOALS */}
            <div >
              <div className={styles.intro}>
            {goals? <p className={styles.writemachine}>$ goals<span>&#160;</span></p>: console.log("hola")}
            </div>
            <div className={styles.intro}> 
            {loadGoals && goals? <p>I'm passionate about technology, so I'm very excited to learn new things. 
              Among them I would like to know more about mobile app development, UX, frameworks, automation, AI, etc.
            </p>:
            console.log("hola")}
            </div>
            <div className={styles.textconsole}>
            {loadGoals && goals? <TextConsole/>: console.log("Hola")}
            <div className={styles.bar}>
            {loadGoals && goals && !location && !soft? <p>$</p>: console.log("Hola")}
            {loadGoals && goals && !location && !soft? <p className={styles.text1}>|</p>:console.log("Hola") }
            </div>
            </div>
            </div>
             {/* LOCATION */}
             <div >
              <div className={styles.intro}>
            {location? <p className={styles.writemachine}>$ location<span>&#160;</span></p>: console.log("hola")}
            </div>
            <div className={styles.intro}> 
            {loadLocation && location? <p>I'm located in Cordoba, Argentina. I would prefer to work remotely 
              although I'm open to discuss all proposals.</p>:
            console.log("hola")}
            </div>
            <div className={styles.textconsole}>
            {loadLocation && location? <TextConsole/>: console.log("Hola")}
            <div className={styles.bar}>
            {loadLocation && location && !soft? <p>$</p>: console.log("Hola")}
            {loadLocation && location && !soft? <p className={styles.text1}>|</p>:console.log("Hola") }
            </div>
            </div>
            </div>
            {/* SOFT SKILLS */}
            <div >
              <div className={styles.intro}>
            {soft? <p className={styles.writemachine}>$ softSkills<span>&#160;</span></p>: console.log("hola")}
            </div>
            <div className={styles.intro}> 
            {loadSoft && soft? <p>['creativity','innovation', 'leadership','perseverance','persuasion','proactive','sociable']
            </p>:
            console.log("hola")}
            </div>
            <div className={styles.textconsole}>
            {loadSoft && soft? <TextConsole/>: console.log("Hola")}
            <div className={styles.bar}>
            {loadSoft && soft? <p>$</p>: console.log("Hola")}
            {loadSoft && soft? <p className={styles.text1}>|</p>:console.log("Hola") }
            </div>
            </div>
            </div>
             {!about && !goals && !location && !soft? <p className={styles.text1}>|</p>:console.log("hola")}
            </div>
            </div>
            </div>
             <div className={styles.buttons}>
             <button onClick={handleAbout} disabled={activeButtonAbout}>About Me</button>
             <button onClick={handleGoals} disabled={activeButtonGoals}>Goals</button>
             <button onClick={handleLocation} disabled={activeButtonLocation}>Location</button>
             <button onClick={handleSoft} disabled={activeButtonSoft}>Soft Skills</button>
             </div>
             </div>

  )
}

export default ConsoleBot