import './Dashboard.css'
import React, {useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'

const Dashboard = () => {
  const navigate = useNavigate()
  const {session} = useContext(sessionContext)

  useEffect(() => {
    if(!session) navigate('/')
  }, [session])

  const dashboardURl = () => {
    if(session === 'leroymerlin@mail.com') return 'https://fandibreak.github.io/plantillasmybrand/dashboardleroy.html'
    else if(session === 'panaria@mail.com') return 'https://fandibreak.github.io/plantillasmybrand/dashboardpanaria.html'
    else return 'https://fandibreak.github.io/plantillasmybrand/dashboardbase.html'
  }

  return (
    <section>
      <iframe src={dashboardURl()} className="dashboard-view"/>
    </section>
  );
};

export default Dashboard;
