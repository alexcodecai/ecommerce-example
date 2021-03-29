import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screen/Homescreen";
import ProductScreen from "./screen/Productscreen";
import Cartscreen from "./screen/cartscreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Loginscreen from "./screen/Loginscreen";
import Registerscreen from "./screen/Registerscreen";
import Profilescreen from "./screen/Profilescreen";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main className='py-2'>
          <Container>
            <Route path='/login' component={Loginscreen} exact />
            <Route path='/register' component={Registerscreen} />
            <Route path='/profile' component={Profilescreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={Cartscreen} exact />
            <Route path='/' component={Homescreen} exact />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
