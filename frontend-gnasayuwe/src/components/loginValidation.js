function validation (values){
    let error = {}
    const user_name_pattern = /^[A-Za-z\s]+$/
    const  user_password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.user_name === ""){
        error.user_name = "Alias no debería estar vacía"
    }
    else if(!user_name_pattern.test(values.user_name)){
        error.user_name  = "Alias no coincide"
    }else {
        error.user_name = ""
    }

    if(values.user_password === ""){
        error.user_password = "Contraseña no debería estar vacía"
    }
    else if(!user_password_pattern.test(values.user_password)){
        error.user_password = "Contraseña no coincide"
    }else {
        error.user_password = ""
    }
    return error;
}

export default validation;