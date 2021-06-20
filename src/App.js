import Navbar from "./Components/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import Login from "./Pages/Login"
import OrderForm from "./Pages/OrderForm";
import Allparcels from "./Pages/AllParcels"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/parcelform" component={OrderForm}/>
            <Route exact path="/allparcels" component={Allparcels} />
          </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
