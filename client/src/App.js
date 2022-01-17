import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Login from './components/LandingPages/Login'
import Singin from './components/LandingPages/Signin'

function App() {
  return (
    <div className="App">
      <h1>Proximamente mas</h1>

      <BrowserRouter>
        <Header/>
        <Main/>
        <Login/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;