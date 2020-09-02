import React from "react";
import { Switch, Route } from "react-router-dom";
import {HomeRoute, DerailsRoute, CartRoute} from "./constants/routing";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path={HomeRoute} component={ProductList} />
        <Route exact path={DerailsRoute} component={Details} />
        <Route exact path={CartRoute} component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
