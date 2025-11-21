import cv from '../../assets/cv.png';
import file from '../../assets/file.png';
import styles from './Resume.module.css';
import doc from '../../assets/cvagus.pdf';

const Resume = () => {
  return (
    <div className={styles.main}>
    <div className={styles.gral}>
        <img src={cv} alt="resume" height="800px" width="600px"/>
    </div>
        <a className={styles.btn} href={doc} download="AGUSTIN DALVIT - RESUME FULL STACK WEB DEV" title="Download Resume">Download<img src={file} alt="pdf" height="15px" width="15px"/></a>
    </div>
  )
}

export default Resume