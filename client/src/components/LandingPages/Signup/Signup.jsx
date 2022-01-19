import React, {useState} from "react";
import HeroSteps from './HeroSteps'
import FormSteps from './FormSteps'

const Signup = () => {
  const [step, setStep] = useState(0);

  const handleSignUp = (signUpBody) => {
    
  }

  const nextStep = (e) => {
    e.preventDefault()
    if (step < 3) setStep(step+1)
  }
  const backStep = (e) => {
    e.preventDefault()
    if(step > 0) setStep(step-1)
  }

  return (
    <section className="flex-division">
      <section className="hero">
          <h2 className="hero--logo" >My<strong className='hero--logo--altcolor'>Brand</strong>Safe</h2>
          <div className="hero--info">
            <HeroSteps steps={step}/>
          </div>
      </section>
      <section className="form-section">
          <form className="signup-body">
            <h3 className="signup-body--title" >Completa tu perfil</h3>
            <p className="signup-body--span">Introduce los datos de tu marca para poder realizar tu primer informe.</p>
            
            <FormSteps steps={step} handleSignUp={handleSignUp}/>

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