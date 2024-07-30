import PropTypes from 'prop-types';
import {SignUp} from './components/signup'
import {Login} from './components/login'


function App() {


  return <div style={{
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'}}>
    
    <Card>
      <SignUp></SignUp>
    </Card>
    <Card>
      <Login></Login>
    </Card>
    
  </div>
 
}

function Card({children}){
  return <div style={{
    border: "1px grey solid",
    padding: "30px",
    boxShadow: "2px 2px 5px 2px #888888",
    borderRadius: "3px",
    margin:'20px'

  }}>
    {children}
  </div>

}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};


export default App
