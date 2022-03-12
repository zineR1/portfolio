import React from 'react';
import styles from './Projects.module.css';
import Github from '../assets/github.png';
import Api from '../assets/browser.png';


const Projects = () => {
  return (
    <div className={styles.gral}>
        <h2>Pokédex App</h2>
        <h3>My First Project</h3>
      <div className={styles.videos_div}>
        <div className={styles.videos}>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/gyAVEUYAU1o" 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className={styles.description_div}>
       <div className={styles.tech1}>
       <h3>React - Redux - CSS - Javascript - Node.js - Express - Sequalize - PostgreSQL.</h3>
       </div>
        <div className={styles.description}><h3>I developed a SPA (Single Page Application) with ReactJs, Redux and CSS
       for the front-end and NodeJs in conjunction with Sequelize and Express for the 
       back-end. I worked with PostgreSQL to create the database and an external API called 
       PokéApi to make all the requests to obtain the necessary information. In the app you can see 
       many pokemons, different types of filters, search methods and the possibility of creating 
       your own Pokemon.</h3></div>
       <div className={styles.rs_circle}>
            <a href="https://github.com/zineR1/POKEMON-PI/tree/master/Henry%20Labs/PI-Pokemon-main" target="_blank" without rel="noreferrer">
                <img src={Github} alt='github' height="30px" width="30px"/>
                </a>
                <a href="https://pokeapi.co/api/v2/pokemon" target="_blank" without rel="noreferrer">
                <img src={Api} alt='linkedin' height="30px"width="30px"/>
                </a>
                
                </div>
       </div>
      </div>
     </div>

       <h2>Tripper App</h2>
        <h3>My Second Project</h3>
      <div className={styles.videos_div}>
        <div className={styles.videos}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TbTFbx_pXFQ" 
     title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className={styles.description_div}>
       <div className={styles.tech1}>
       <h3>React - Redux - CSS - Javascript - Node.js - Express - Sequalize - PostgreSQL.</h3>
       </div>
        <div className={styles.description}><h3>I developed a SPA (Single Page Application) with ReactJs, Redux and CSS
        for the front-end and the use of NodeJs in conjunction with Sequelize and Express for the back-end. I worked with
        PostgreSQL to create the database and an external API called TheDogApi to make all the requests to obtain the necessary
        information. In the app you can see many dog breeds, different types of filters, search methods and the possibility of 
        creating your own breed.</h3></div>
       <div className={styles.rs_circle}>
            <a href="https://github.com/zineR1/TRIPPER-APP" target="_blank" without rel="noreferrer">
                <img src={Github} alt='github' height="30px" width="30px"/>
                </a>
                <a href="https://restcountries.com/v3/all" target="_blank" without rel="noreferrer">
                <img src={Api} alt='linkedin' height="30px"width="30px"/>
                </a>
                
                </div>
       </div>
      </div>
     </div>

      <h2>Buyme App</h2>
        <h3>The Final Group Project</h3>
      <div className={styles.videos_div}>
        <div className={styles.videos}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bhKQKhmR5Rw" 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className={styles.description_div}>
       <div className={styles.tech1}>
       <h3>React - Redux -Javascript - Node - PostgreSQL - Nodemailer - Mercado Pago API - Express - 
         Sequelize - CSS -HTML</h3>
       </div>
        <div className={styles.description}><h3>Buyme App is a final project developed by a group of 8 people 
        to graduate from Henry's Bootcamp. It consists of a client-server application to manage an ecommerce. 
        It consists of two parts, the client (buyer) and the administrative part (administrator). Among its 
        functionalities is to log in, manage sales, view product and sales information, receive payments, etc. 
        It uses Mercado Pago as a payment platform.</h3></div>
       <div className={styles.rs_circle}>
            <a href="https://github.com/Buyme-App/Buyme-app-PF" target="_blank" without rel="noreferrer">
                <img src={Github} alt='github' height="30px" width="30px"/>
                </a> 
                </div>
       </div>
      </div>
     </div>
    </div>

  )
}

export default Projects