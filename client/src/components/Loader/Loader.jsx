import React from "react";
import PropagateLoader from 'react-spinners/PropagateLoader'
import './Loader.css'

const Loader = ({isLoading}) => {
  return (
    <div className={`loader${isLoading ? ' is-loading' : ''}`}>
      <div className="loader-item">
        <PropagateLoader color="#ffffff" size={30} speedMultiplier={0.8}/>
      </div>
    </div>
  );
};

export default Loader;
