import {useRef} from 'react';
import styles from './Technologies.module.css';
import iconr from '../../assets/react.png';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import redux from '../../assets/redux.png';
import nodejs from '../../assets/nodejs.png';
import sql from '../../assets/sql.png';
import psg from '../../assets/postgre.png';
import git from '../../assets/git.png';
import ghub from '../../assets/ghub.png';
import exp from '../../assets/exp.png';
import back from '../../assets/back.png';
import next from '../../assets/next.png';


const Technologies = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 230;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 230;
  };

  return (
      <div className={styles.gral} >
        <button className={styles.btnLeft} onClick={handleLeftClick}>  
        <img src={back} alt="arrow" height="47px" width="47px"/>
        </button>
         <div className={styles.container} ref={carousel}> 

        <div className={styles.icons}>
        <img src={iconr} alt="react" height="60px" width="60px"/>
        <h3>React</h3>
        </div>

        <div className={styles.icons}>
        <img src={js} alt="javascript" height="60px" width="60px"/>
        <h3>Javascript</h3>
        </div>

        <div className={styles.icons}>
        <img src={html} alt="html" height="60px" width="60px"/>
        <h3>HTML5</h3>
        </div>

        <div className={styles.icons}>
        <img src={css} alt="css" height="60px" width="60px"/>
        <h3>CSS</h3>
        </div>

        <div className={styles.icons}>
        <img src={redux} alt="css" height="60px" width="60px"/>
        <h3>Redux</h3>
        </div>

        <div className={styles.icons}>
        <img src={nodejs} alt="css" height="60px" width="60px"/>
        <h3>Node.js</h3>
        </div>

        <div className={styles.icons}>
        <img src={exp} alt="css" height="60px" width="75px"/>
        <h3>Express</h3>
        </div>

        <div className={styles.icons}>
        <img src={sql} alt="css" height="60px" width="60px"/>
        <h3>SQL</h3>
        </div>

        <div className={styles.icons}>
        <img src={psg} alt="css" height="60px" width="60px"/>
        <h3>PostgreSql</h3>
        </div>
        
        <div className={styles.icons}>
        <img src={git} alt="css" height="58px" width="58px"/>
        <h3>Git</h3>
        </div>

        <div className={styles.icons}>
        <img src={ghub} alt="css" height="58px" width="58px"/>
        <h3>Github</h3>
        </div>

        </div>
        <button className={styles.btnRight} onClick={handleRightClick}>
        <img src={next} alt="arrow" height="47px" width="47px"/>
        </button>
        </div>
  )
}

export default Technologies