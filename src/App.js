import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Ambulances from "./components/Ambulances/Ambulances";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home/Home";
import Information from "./components/Information/Information";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Thanks from "./components/Thanks/Thanks";
import AuthProvider from "./contexts/AuthProvider";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute exact path="/information">
              <Information></Information>
            </PrivateRoute>
            <PrivateRoute path="/doctors/thanks">
              <Thanks></Thanks>
            </PrivateRoute>
            <PrivateRoute exact path="/ambulances">
              <Ambulances></Ambulances>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
