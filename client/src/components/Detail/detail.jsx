import React from "react";
import { useEffect , useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getRecipesById } from '../../action/actions.js';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import styles from './detail.module.css'

export default function DetailById () {
    const {Id}=useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipesById(Id))
    },[dispatch])

    const myRecipe=useSelector((state)=> state.recipesById)
    let aux=''
    let dietsString =[]

    if(myRecipe[0]){
        aux=myRecipe[0];
        if (aux.diets) {
            aux.summary=aux.summary.replace(/<[^>]*>/g, "");
           dietsString=aux.diets.join(', ') 
           console.log(aux.steps);
        }
    }else{
        aux=myRecipe
        if (aux.diets) {
            aux.summary=aux.summary.replace(/<[^>]*>/g, "");
            dietsString=aux.diets.join(', ') 
            console.log(aux.steps);
         }
    }
    return (
        <div>
           <Link to='/home' className={styles.link}><button className={styles.button3}>CocinaHenry</button> </Link>
            {
                aux?
                <div className={styles.divFondo}> 
                    <div className={styles.divDetail}>
                        <div className={styles.divDetail2}>
                            <h1 className={styles.titulo}>{aux.name}</h1>
                            <h2 className={styles.subtitulo}>Puntos de Salud: {aux.health_score}</h2>
                            <h2 className={styles.subtitulo}>Dieta tipo: {dietsString}</h2>
                            <h3 className={styles.subtitulo}>ID: {Id}</h3>
                      </div>
                      <div className={styles.divDetail2}>
                          <img src={aux.image? aux.image :'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png' }  className={styles.imagen}/>
                      </div>
                    </div>
                    <div className={styles.divDetail3}>
                        <p className={styles.p}>{aux.summary}</p>
                    </div>

                    {
                        Array.isArray(aux.steps)? 
                        <div>
                            <ol>
                                {aux.steps[0].map(el => {
                                    return(
                                        <li className={styles.p}>{el.step} </li>
                                    )
                                })}
                            </ol>
                        </div>:
                       <div>
                        <p className={styles.p}>{aux.steps}</p>
                       </div>
                    }
                </div> : <p>asd</p>
            }
        </div>
    )
}
