import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'

export default function Card ({name,image,diets,id}){
    const dietsString = diets.join(", ");

    return (
        <div key='divcard' className={styles.divCard}>
            <Link to={`/detail/${id}`} className={styles.link}><h1 className={styles.titulo}>{name}</h1></Link>
            <h2>{dietsString}</h2>
            <img src={image} alt="imagen de la carta" className={styles.imagen}/>
        </div>
    )
}