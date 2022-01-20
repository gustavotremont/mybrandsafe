import './Landing.css'
import React, {useContext, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'

const Landing = () => {
  const navigate = useNavigate()
  const { session } = useContext(sessionContext)

  useEffect(() => {
    if(session) navigate('/dashboard')
  }, [session])

  return (
    <section className='landing'>
      <div className='landing-header'>
        <Link to='/' className="landing-logo" >My<strong className='landing-logo-altcolor'>Brand</strong>Safe</Link>
        <div className='landing-buttons' >
          <button className='landing-button' onClick={() => navigate('/signup')} >Regístrate</button>
          <button className='landing-button' onClick={() => navigate('/login')} >Accede</button>
        </div>
      </div>

      <div className='landing-body'>
        <article className='landing-info'>
          <h1 className='landing-info-title'>Protege tu Marca</h1>
          <p className='landing-info-text'>Utilizamos las herramientas más avanzadas de protección de marca online para detectar y procesar automáticamente miles de infracciones de la propiedad intelectual.</p>
          <button className='landing-info-button' onClick={() => navigate('/login')} >Continuar</button>
        </article>
        <div className='landing-image-container'>
            <img className='landing-demo-image' src="https://firebasestorage.googleapis.com/v0/b/mybrandsafe.appspot.com/o/pages-images%2Fhome-landing.png?alt=media&token=0a36aaa5-87f3-4c3d-8a6f-d08effee4018" alt="demo visual de la aplicación" />
         </div>
      </div>

    </section>
  );
};

export default Landing;
