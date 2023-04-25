import React from "react";
import styles from './paginado.module.css'



export default function Paginado({recipesForPage,allRecipes,paginado , currentPage}){
        const numberPage=[]

        for (let i = 0; i < Math.ceil(allRecipes/recipesForPage); i++) {
            numberPage.push(i+1)
            
        }

    return(
            <div className={styles.divPagiando}>
               {(currentPage !== 1) && (  
                <div key='Ant'>
                    <button onClick={()=>paginado(currentPage-1)} className={styles.button}>Aft</button>

                </div>)
                }
                
                {
                    numberPage?.map(number => (
                        <div className="number" key={number} >
                            <button onClick={()=>paginado(number)} key={number} className={styles.button}>{number} </button>
                        </div>
                    ))
                }

                {allRecipes && currentPage !== numberPage.length  && (  
                <div key='next'>
                    <button onClick={()=>paginado(currentPage+1)} className={styles.button}>Next</button>
                </div>)
                }
                </div>
    )
}
