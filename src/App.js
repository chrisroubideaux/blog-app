import { useContext } from "react";
import { Context } from "./context/Context";
import { BrowserRouter as Router,  Switch, Route,  } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';

import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';




function App() {
  const { user } = useContext(Context);
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/" component= {Home}/>
    <Route exact path="/Blog" component= {Blog}/>
    <Route path="/write">{user ? <Write /> : <Signup />}</Route>
    <Route path="/settings">{user ? <Settings /> : <Signup />}</Route>
    <Route path="/register">{user ? <Home /> : <Register />}</Route> 
    <Route exact path="/Login" >{user ? <Home /> : <Login />}</Route>
    <Route exact path="/Signup">{user ? <Home /> : <Signup />}</Route>
    <Route path="/post/:postId">
   
    </Route> 
    </Switch>
    </Router>
    </>
  );
}

export default App;