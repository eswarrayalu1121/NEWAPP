//import logo from './logo.svg';
import './App.css';
import Eswar from './Eswar';
import Move from './Move';
import Login from './Login';
//import BackGrounf from './Move copy';
//import Routes from './Routes';
//import Navigation from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Register from './Register';
//import Chandraeswar from './Chandraeswar';
function App() {
  //const eswa='rayalu';
  const dataaa = JSON.stringify(localStorage.getItem('data'))
  return (
    <div class='Login-component' style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")`
     
    }}>
     <h1>WELCOME</h1>
 <dataaa />
    <a href="/Login">Login</a>
<Register/>
<Eswar/>
  <Router>
 <Switch>
 
      <Route exact path='/Move' component={Move}></Route>
      <Route exact path='/Eswar' component={Eswar}></Route>
      <Route excat path='/Login' component={Login}></Route>
      <Route excat path='/register' component={Register}></Route>
       </Switch> 
    </Router>
   </div>
   );
}

export default App;
