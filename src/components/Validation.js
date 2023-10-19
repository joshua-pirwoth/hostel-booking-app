function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z][a-zA-Z0-9]{8,})$/

    if(values.email === ""){
        error.email = "Name should not be empty"
    }
    if(!email_pattern.test(values.email)){
        error.email ="Email didn't match"
    }
    if(values.password === ""){
        error.password = "password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password ="password didn't match"
    }
    if(values.confirmPassword === "" || String(values.confirmPassword) !== String(values.password)){
        console.log(values.confirmPassword + "_"+ values.password)
        error.confirmPassword = "password not matched"
    }

    return error;

}
export default validation;