import React, {useState} from "react";

const FormSteps = ({steps, handleSignUp}) => {

  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    address: '',
    cif: '',
    domains: '',
    emails: '',
    images: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setFormInputs({
      ...formInputs,
      [name]: e.target.value
    })
  }

  const formStepCount = () => {
    switch(steps) {
      case 0: 
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="email">Email</label>
              <input className="signup-body--field--input" value={formInputs.email} onChange={handleChange} type="email" name="email" id="signupEmail" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="password">Contraseña</label>
              <input className="signup-body--field--input" value={formInputs.password} onChange={handleChange} type="password" name="password" id="signupPassword" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="repeatPassword">Repite tu Contraseña</label>
              <input className="signup-body--field--input" value={formInputs.repeatPassword} onChange={handleChange} type="password" name="repeatPassword" id="signupRepetPassword" />
            </div>
          </>
        )
      case 1: 
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="name">Nombre de la empresa</label>
              <input className="signup-body--field--input" value={formInputs.name} onChange={handleChange} type="text" name="name" id="signupName" placeholder="Introduce el nombre de la empresa"/>
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="address">Dirección de la empresa</label>
              <input className="signup-body--field--input" value={formInputs.address} onChange={handleChange} type="text" name="address" id="signupAddress" placeholder="Introduce la dirección de la empresa" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="cif">CIF de la empresa</label>
              <input className="signup-body--field--input" value={formInputs.cif} onChange={handleChange} type="text" name="cif" id="signupCif" placeholder="Introduce el CIF de la empresa" />
            </div>
          </>
        )
      case 2: 
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="domains">Dominio</label>
              <input className="signup-body--field--input" value={formInputs.domains} onChange={handleChange} type="text" name="domains" id="signupDomains" placeholder="Introduzca su dominio" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="emails">Correo</label>
              <input className="signup-body--field--input" value={formInputs.emails} onChange={handleChange} type="text" name="emails" id="signupEmails" placeholder="Introduzca el correo de su empresa" />
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupSocialRed">Selecciona red social</label>
              <select className="signup-body--field--input" type="text" name="signupSocialRed" id="signupSocialRed" >
                <option value="">Seleccione red social</option>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">Tik-Tok</option>
              </select>
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupProfile">Introduce tu perfil</label>
              <input className="signup-body--field--input" onChange={handleChange} type="text" name="signupProfile" id="signupProfile" placeholder="Introduce tu perfil" />
            </div>

            <div className="signup-body--field">
              <span className="signup-body--field--label">Introduce tus Logos</span>
              <input className="imageFiles-input" type="file" onChange={handleChange} name="images" id="signupImage"/>
              <label className="imageFiles-label" htmlFor="images">
                  Arrastra y suelta un archivo
                  <span className="imageFiles-label--button" >
                    <img className="file-icon" src="https://firebasestorage.googleapis.com/v0/b/mybrandsafe.appspot.com/o/pages-images%2Ficon-paperclip.png?alt=media&token=4ebcce9d-c2c8-4fa1-8f37-9c533fce5758" alt="file" />
                    Selecciona tu archivo
                  </span>
              </label>
            </div>
          </>
        )  
      default:
        return null;
    }
  }

  return (
    <>
      {formStepCount()}
    </>
  );
};

export default FormSteps;
