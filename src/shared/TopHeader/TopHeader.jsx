import React, {useRef} from 'react';
import styles from './TopHeader.module.css';


const TopHeader = () => {
  const carousel = useRef(null);

 

const openToWork = ["OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ","OPEN", "TO", "WORK",
 " ", " ", "OPEN", "TO", "WORK"," ", " ","OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ",
 "OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ","OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ",
 "OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ","OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ",
 "OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ","OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ",
 "OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ","OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " ",
 "OPEN", "TO", "WORK", " ", " ", "OPEN", "TO", "WORK"," ", " "]


  return (
      <div className={styles.gral} >
         <div className={styles.container} ref={carousel}> 
         <div className={styles.icons}>
            {openToWork?.map((c,index) => {
            return (
                <h3 key={index}>{c}</h3>
                )})}
         </div>
        </div>
        </div>
  )
}

export default TopHeader