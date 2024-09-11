import './App.css';
<<<<<<< HEAD
import Home from './Components/Home';
// import { Router } from 'react-router-dom';
import Router from "../src/Components/Router";

function App() {
  return (
    <div>
     {/* <Home/> */}
     <Router/>
    </div>
=======
import LoginPage from './pages/loginPage/LoginPage';

function App() {
  return (
  <div className='w-full h-screen max-w-screen-2xl mx-auto overflow-x-hidden'>
     <LoginPage />
  </div>
>>>>>>> 6bdd2ffb17a09a2da77b6a09a0c28b3425529527
  );
}

export default App;
