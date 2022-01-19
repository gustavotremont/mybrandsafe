import React, {useState} from "react";

const Signup = () => {
  const [step, setStep] = useState(0);

  const nextStep = (e) => {
    e.preventDefault()
    if (step < 3) setStep(step+1)
  }
  const backStep = (e) => {
    e.preventDefault()
    if(step > 0) setStep(step-1)
  }

  const heroSteps = (steps) => {
    switch(steps) {
      case 0: 
        return (
          <>
            <h1 className="hero--info--title">Deja de perder ventas </h1>
            <p className="hero--info--text">Sé parte del cambio. Necesitamos que te registres para poder ofrecerte las mejores herramientas para salvaguardar tu marca.</p>
          </>
        )
      case 1: 
        return (
          <>
            <h1 className="hero--info--title">Protege tu nombre</h1>
            <p className="hero--info--text">La búsqueda impulsada por bots, el reconocimiento avanzado dominios fraudulentos, descubrirán las posibles infracciones por ti.</p>
          </>
        )
      case 2: 
        return (
          <>
            <h1 className="hero--info--title">Protege tu nombre</h1>
            <p className="hero--info--text">La búsqueda impulsada por bots, el reconocimiento avanzado dominios fraudulentos, descubrirán las posibles infracciones por ti.</p>
          </>
        )
      case 3: 
        return (
          <>
            <h1 className="hero--info--title">Mantén tu imagen segura</h1>
            <p className="hero--info--text">Encuentra de forma automática cuentas, sitios web y aplicaciones en donde estén suplantando tu imagen de marca.</p>
          </>
        )
      default:
        return null;
    }
  }

  const formSteps = (steps) => {
    switch(steps) {
      case 0: 
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupEmail">Email</label>
              <input className="signup-body--field--input" type="email" name="signupEmail" id="signupEmail" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupPassword">Contraseña</label>
              <input className="signup-body--field--input" type="password" name="signupPassword" id="signupPassword" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupRepetPassword">Repite tu Contraseña</label>
              <input className="signup-body--field--input" type="password" name="signupRepetPassword" id="signupRepetPassword" />
            </div>
          </>
        )
      case 1: 
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupName">Nombre de la empresa</label>
              <input className="signup-body--field--input" type="text" name="signupName" id="signupName" placeholder="Introduce el nombre de la empresa"/>
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupAddress">Dirección de la empresa</label>
              <input className="signup-body--field--input" type="text" name="signupAddress" id="signupAddress" placeholder="Introduce la dirección de la empresa" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupCif">CIF de la empresa</label>
              <input className="signup-body--field--input" type="text" name="signupCif" id="signupCif" placeholder="Introduce el CIF de la empresa" />
            </div>
          </>
        )
      case 2: 
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupDomains">Dominio</label>
              <input className="signup-body--field--input" type="text" name="signupDomains" id="signupDomains" placeholder="Introduzca su dominio" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupEmails">Correo</label>
              <input className="signup-body--field--input" type="text" name="signupEmails" id="signupEmails" placeholder="Introduzca el correo de su empresa" />
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupSocialRed">Selecciona red social</label>
              <input className="signup-body--field--input" type="text" name="signupSocialRed" id="signupSocialRed" placeholder="Seleccione red social" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupProfile">Introduce tu perfil</label>
              <input className="signup-body--field--input" type="text" name="signupProfile" id="signupProfile" placeholder="Introduce tu perfil" />
            </div>

            <div className="signup-body--field">
              <label className="signup-body--field--label" htmlFor="signupImage">Introduce tus Logos</label>
              <input className="signup-body--field--input" type="text" name="signupImage" id="signupImage" placeholder="Introduce tus logos" />
            </div>
          </>
        )  
      default:
        return null;
    }
  }

  return (
    <section className="flex-division">
      <section className="hero">
          <h2 className="hero--logo" >My<strong className='hero--logo--altcolor'>Brand</strong>Safe</h2>
          <div className="hero--info">
            {heroSteps(step)}
          </div>
      </section>
      <section className="form-section">
      <form className="signup-body">
            <h3 className="signup-body--title" >Completa tu perfil</h3>
            <p className="signup-body--span">Introduce los datos de tu marca para poder realizar tu primer informe.</p>
            
            {formSteps(step)}

            <button className="signup-body--button" onClick={nextStep} >Continuar</button>
            { step === 0 ? null : <button className="signup-body--button-back" onClick={backStep} >Atras</button> }
          </form>

      </section>

      <div className="stepper" ></div>
      <div className={'stepper-progress stepper-progress--'+step}></div>
      
    </section>
  )
};

export default Signup;
