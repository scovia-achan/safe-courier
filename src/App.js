import Navbar from "./Components/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
