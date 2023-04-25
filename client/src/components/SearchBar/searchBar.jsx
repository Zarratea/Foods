import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {filterCreate, filterRecipesByDiets, getName, getRecipes, orderName, orderSaludable} from '../../action/actions.js';
import {useDispatch } from 'react-redux';
import styles from './searchBar.module.css'

export default function SearchBar({setOrder, setCurrenPage}){
    const dispatch = useDispatch();
    const [name,setName]=useState('')

    function handleFilterDiets(e){
        dispatch(filterRecipesByDiets(e.target.value))
    };
    function handleFilterCreate(e){
        dispatch(filterCreate(e.target.value))
    };
    function handleOrderName(e){
        e.preventDefault();
        dispatch(orderName(e.target.value));
        setCurrenPage(1);
        setOrder(`Ordernado ${e.target.value}`);
    };
    function handleOrderSaludable(e){
        e.preventDefault();
        dispatch(orderSaludable(e.target.value));
        setCurrenPage(1);
        setOrder(`Ordernado ${e.target.value}`);
    };
    function handleInput(e){
        e.preventDefault();
        setName(e.target.value)
    };
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getName(name))
    };
    function handleReload(e){
        e.preventDefault();
        dispatch(getRecipes())
        setName('')
    };



    return(
        <div >
            <div className={styles.divBusqueda}>
            <div className={styles.divInput}>
            <input type='search' value={name} onChange={e => handleInput(e) } className={styles.input} />
            <button onClick={e => handleSubmit(e)} className={styles.button}>Buscar</button> 
            </div>
            <button onClick={(e)=>handleReload(e)} className={styles.button3}>CocinaGPT</button>
            <button className={styles.button2}><Link to='/createRecipe' className={styles.link} > Crear receta</Link></button> 
            </div>
            <div>
                <select onChange={e => handleFilterDiets(e)} className={styles.customSelect}>
                    <option value='all'>Todas</option>
                    <option value='vegetarian'>vegetarian</option>
                    <option value='vegan'>vegan</option>
                    <option value='gluten free'>gluten free</option>
                    <option value='dairy free'>dairy free</option>
                    <option value='lacto ovo vegetarian'>lacto ovo vegetarian</option>
                    <option value='paleolithic'>paleolithic</option>
                    <option value='primal'>primal</option>
                    <option value='whole 30'>whole 30</option>
                    <option value='pescatarian'>pescatarian</option>
                    <option value='ketogenic'>ketogenic</option>
                    <option value='fodmap friendly'>fodmap friendly</option>
                </select>
                <select name="Creador" onChange={e => handleFilterCreate(e)} className={styles.customSelect}>
                    <option value='all'>Todas</option>
                    <option value='Mis Recetas'>Mis Recetas</option>
                    <option value='Api'>Api</option>
                </select>
                <select name="Comida Saludable" onChange={e => handleOrderSaludable(e)} className={styles.customSelect}>
                    <option value='Mas Sano'>Mas Sano</option>
                    <option value='Menos sano'>Menos sano</option>
                </select>
                <select onChange={e => handleOrderName(e)} className={styles.customSelect}>
                    <option value='Asendente'>Asendente</option>
                    <option value='Desendente'>Desendente</option>
                </select>
            </div>
            <div>
            </div>
        </div>
    )
}