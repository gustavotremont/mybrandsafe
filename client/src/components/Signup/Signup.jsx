import React, {useState, useEffect, useContext} from "react";
import { Link, useNavigate } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'
import HeroSteps from './HeroSteps'
import FormSteps from './FormSteps'
import axios from 'axios'
import { handleUpload } from '../../firestorage/firebase'

const Signup = ({isLoading}) => {
  const navigate = useNavigate()
  const {session} = useContext(sessionContext)
  const [step, setStep] = useState(0);

  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    address: '',
    cif: '',
    domains: '',
    emails: '',
    images: '',
    profile: ''
  });

  useEffect(() => {
    if(session) navigate('/dashboard')
  }, [session])

  const handleChange = (e) => {
    const name = e.target.name;

    name === 'images'
      ? setFormInputs({ ...formInputs, images: e.target.files[0] })
      : setFormInputs({ ...formInputs, [name]: e.target.value })
    
  }

  const handleSignUp = async () => {
    isLoading(true)
    axios.post('/api/users', 
      {
        email: formInputs.email,
        password: formInputs.password,
        repeatPassword: formInputs.repeatPassword,
        name: formInputs.name,
        address: formInputs.address,
        cif: formInputs.cif,
      })
      .then( async (res) => {

        const fileUrl = await handleUpload(formInputs.images)

        axios.post(`/api/assets/${res.data.user.uuid}`, 
          {
            domains: [formInputs.domains], 
            emails: [formInputs.emails], 
            images: [fileUrl]
          })
          .then( res => {
            navigate('/login')
            isLoading(false)
          })
          .catch( error => {
            console.log(error.response.data.errors)
            isLoading(false)
          })
      })
      .catch( error => {
        console.log(error.response.data.errors)
        isLoading(false)
      })
  }

  const nextStep = (e) => {
    e.preventDefault()
    if (step === 3) handleSignUp()
    if (step < 3) setStep(step+1)
  }
  const backStep = (e) => {
    e.preventDefault()
    if(step > 0) setStep(step-1)
  }

  return (
    <section className="flex-division">
      <section className="hero">
          <Link to='/' className="hero--logo" >My<strong className='hero--logo--altcolor'>Brand</strong>Safe</Link>
          <div className="hero--info">
            <HeroSteps steps={step}/>
          </div>
      </section>
      <section className="form-section">
          <form className="signup-body">
            <h3 className="signup-body--title" >Completa tu perfil</h3>
            <p className="signup-body--span">Introduce los datos de tu marca para poder realizar tu primer informe.</p>
            
            <FormSteps steps={step} formInputs={formInputs} handleChange={handleChange}/>

            <button className="signup-body--button" onClick={nextStep} >Continuar</button>
            { step === 0 ? null : <button className="signup-body--button-back" onClick={backStep} >Atras</button> }

            <span className="form-body--login" >Ya tienes cuenta ? <Link className="form-body--login--link" to='/login' >Entra Aquí</Link></span>
          </form>
      </section>

      <div className="stepper" ></div>
      <div className={'stepper-progress stepper-progress--'+step}></div>
      
    </section>
  )
};

export default Signup;