
import {SignUp} from './components/signup'
import {Login} from './components/login'
import{useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  console.log("rendering")
  return <div>
    
    <BrowserRouter>
    <AppBar></AppBar>
      <Routes>
        <Route path = "/" element = {<SignUp/>} />
        <Route path = "/login" element = {<Login/>} />
      </Routes>
    </BrowserRouter>
    
  </div>
 
}

function AppBar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={() =>{
      navigate("/");
    }}>Sign Up</button>

<button onClick={() =>{
      navigate("/login");
    }}>Log In</button>
  </div>
}





export default App
