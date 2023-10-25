import Login from './components/Login/Login';
import Profile from './components/Profile/profile';
import Home from './page/Home/home';
import Register from './components/register/register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // NavLink,
  // Switch
} from "react-router-dom";


function App() {
  return (
    
    <Router>
     

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path= '/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Profile:username' element={<Profile/>} />

      </Routes>
      </Router>
    );
}

export default App;
