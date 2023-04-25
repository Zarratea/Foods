import React, { useState , useEffect } from 'react';
import { Link  , useHistory} from "react-router-dom";
import {getDiets , postForm} from '../../action/actions.js';
import {useDispatch , useSelector} from 'react-redux';
import Validation from "./validacion.js";
import styles from './formCreateRecipes.module.css'

function verificarObjeto(objeto) {
    for (let clave in objeto) {
      if (objeto[clave]!=='') {
        console.log(objeto);
        return false;
      }
    }
    return true;
  }


export default function FormCreate(){
    const dispatch = useDispatch();
    const history=useHistory();
    const allDiets=useSelector((state) => state.allDiets)

    const [errors, setErrors] =useState({
        name: '*',
        image: '',
        summary: '*',
        steps: '*',
        health_score:'',});

    const [input , setInput]=useState({
        name:'',
        image:'',
        summary:'',
        health_score:0,
        steps:'',
        diets:[],
    });

    useEffect(() => {
        dispatch(getDiets());
    },[dispatch])

    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
        Validation({...input ,[e.target.name]:e.target.value,},setErrors, errors,e) 
    };

    const handleCheck=(e)=>{
        setInput({
            ...input,
            diets:[...input.diets , e.target.name],
        })
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const verificar=verificarObjeto(errors)
        if (verificar) {
            dispatch(postForm(input));
            alert('Receta Creada Con Exito')
            setInput({
                name:'',
                image:'',
                summary:'',
                health_score:0,
                steps:'',
                diets:[],
            });
            history.push('/home') 
        }else{
            alert('Completa correctamente los campos')

        }
    };


    return(
        <div>
            <Link to='/home' className={styles.link}><button className={styles.button3}>CocinaGPT</button> </Link>
            <h1 className={styles.titulo}>Crea Tu Receta !</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.form}>
                <div>
                <label className={styles.label}>Nombre: </label>
                <input 
                type="text" 
                value={input.name}
                name="name"
                onChange={handleChange}
                className={styles.input}
                />
                {
                    errors.name && (
                        <spam className='error'>  {errors.name}</spam>
                    )
                }
                </div>


                <div>
                <label className={styles.label}>Nivel de comida saludable: </label>
                <input 
                type="number" 
                value={input.health_score}
                name="health_score"
                onChange={handleChange} 
                className={styles.input}
                />
                {
                    errors.health_score && (
                        <spam className='error'>  {errors.health_score}</spam>
                    )
                }
                </div>

                <div>
                <label className={styles.label}>Paso a paso: </label>
                <input 
                type="text" 
                value={input.steps}
                name="steps"
                onChange={handleChange}
                className={styles.input}
                />                 {
                    errors.steps && (
                        <spam className='error'>  {errors.steps}</spam>
                    )
                }
                </div>

                <div>
                <label className={styles.label}>Imagen: </label>
                <input 
                type="text" 
                value={input.image}
                name="image"
                onChange={handleChange}
                className={styles.input}
                />
                </div>

                <div>
                <label className={styles.label}>Descripcion: </label>
                <textarea 
                //type="text"
                rows="4" 
                value={input.summary}
                name="summary"
                onChange={handleChange}
                className={styles.input2}
                />
                {
                    errors.summary && (
                        <spam className='error'>  {errors.summary}</spam>
                    )
                }
                </div>

                <div>
                    <label className={styles.label}>Tipo de Dietas :</label>
                    {allDiets.map(diet => (
                   <label key={diet.name} className={styles.labelDiets}>
                    <input 
                      type='checkbox'
                      name={diet.name}
                      value={diet.name}
                      onChange={(e) => handleCheck(e)}
                     />{diet.name}</label>
                    ))}
                </div>
                <button type='submit' className={styles.button2}>Crear Receta</button>
            </form>
        </div>
    )
};






