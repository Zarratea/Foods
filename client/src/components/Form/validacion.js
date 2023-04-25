export default function Validation (input,setErrors,errors,e) {

    if(e.target.name==='name'){
        const regex = /.*\d.*/;
        let isValid = true;
        if(!input.name)setErrors({...errors, name:'Campo Vacio'});
        else{
            if(input.name.length<4 || input.name.length>30){
                setErrors({...errors, name:'El nombre debe tener entre 4 y 30 caracteres'})
                isValid = false;};
            if(regex.test(input.name)){
                setErrors({...errors, name:'El nombre no puede contener numeros'})
                isValid = false;};
            if(isValid){
                setErrors({...errors, name:''});
            }
        };
    };

    if (e.target.name==='summary'){
        if (!input.summary) {
            setErrors({...errors, summary:'Campo Vacio'})
        }else{setErrors({...errors, summary:''})}
    }

    if (e.target.name==='health_score'){
        if (input.health_score>100) {
            setErrors({...errors, health_score:'El Nivel de salud no puede ser mayor a 100'})
        }else{setErrors({...errors, health_score:''})}
    }

    if (e.target.name==='steps'){
        if (!input.steps) {
            setErrors({...errors, steps:'Campo Vacio'})
        }else{setErrors({...errors, steps:''})}
    }

};