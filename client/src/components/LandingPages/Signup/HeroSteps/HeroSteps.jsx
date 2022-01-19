import React from "react";

const HeroSteps = ({steps}) => {

  const heroStepCount = () => {
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

  return (
    <>
        {heroStepCount()}
    </>
  );
};

export default HeroSteps;
