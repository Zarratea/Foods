import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPega.module.css'


export default function LandingPega(){
    return(
        <div className={styles.divLanding}>
            <h1 className={styles.titulo}>Bienvenido a CocinaHenry</h1>
            <h2 className={styles.subtitulo}>En esta paginas podras encontrar cientos de recetas que se adapten a tus gustos y dietas . Ademas podras buscar y compatir tus propias recetas con el resto de cocineros . </h2>
            <button className={styles.button}><Link to='/home' className={styles.link}> Comenzar</Link></button> 
        </div>
    )
}


