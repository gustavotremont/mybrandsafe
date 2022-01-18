const errorsMessages = {
    emptyField: 'Todos los campos deben ser llenados',
    invalidEmail: 'El email debe tener un formato valido',
    unmatchPasswords: 'Las contraseñas deben coincidir',
    minSizePassword: 'La contraseña debe tener al menos 6 caracteres',
    invalidCif: 'El CIF debe tener un formato valido',
    emailExist: 'Ya existe una empresa registrada con este email',
    nameExist: 'Ya existe una empresa registrada con este nombre',
    cifExist: 'Ya existe una empresa registrada con este CIF'
} 

const validateEmail = (email) => {
    return email
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
};

const validateCIF = (cif) => {
    return cif
            .match(
                /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/
            );
};

const fieldUserValidation = (email, password, repeatPassword, name, address, cif) => {
    let errors = []
    
    if( !email || !password || !repeatPassword || !name || !address || !cif ) {
        errors.push(errorsMessages.emptyField)
    }

    if(!validateEmail(email)){
        errors.push(errorsMessages.invalidEmail)
    }

    if(password !== repeatPassword){
        errors.push(errorsMessages.unmatchPasswords)
    }

    if(password <= 5){
        errors.push(errorsMessages.minSizePassword)
    }

    if(!validateCIF(cif)){
        errors.push(errorsMessages.invalidCif)
    }

    return errors
}

const fieldUserExist = (usersExist, email, name, cif, actualUser) => {
    let errors = []

    for (const userExist of usersExist) {
        if(userExist.email === email) errors.push(errorsMessages.emailExist)
        if(userExist.name === name) errors.push(errorsMessages.nameExist)
        if(userExist.cif === cif) errors.push(errorsMessages.cifExist)
    }

    return errors
}

const userValidation = {
    fieldUserValidation,
    fieldUserExist
}

module.exports = userValidation;