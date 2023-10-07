function validation (values){
    let error = {}
    const alias_pattern = /^[A-Za-z\s]+$/
    const  password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.alias === ""){
        error.alias = "Alias no debería estar vacía"
    }
    else if(!alias_pattern.test(values.alias)){
        error.alias  = "Alias no coincide"
    }else {
        error.alias = ""
    }

    if(values.edad === ""){
        error.edad = "Alias no debería estar vacía"
    }else {
        error.edad = ""
    }

    if(values.password === ""){
        error.password = "Contraseña no debería estar vacía"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Contraseña no coincide"
    }else {
        error.password = ""
    }
    return error;
}

export default validation;