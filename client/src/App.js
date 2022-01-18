import './styles/main.scss';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import Login from './components/LandingPages/Login'
import Singin from './components/LandingPages/Signin'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </div>
  );
}

export default App;