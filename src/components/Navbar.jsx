import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {withProductConsumer} from "../context/ProductContext";
import { HomeRoute, CartRoute } from "../constants/routing";
import logo from "../logo.svg";

class Navbar extends Component {
  render() {
    const {cart}=this.props.data;
    return (
      <NavBarContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to={HomeRoute}>
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            style={{ width: "45px" }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-3">
            <Link to={HomeRoute} className="nav-link">Products</Link>
          </li>
        </ul>
        <Link to={CartRoute} className="ml-auto">
          <ButtonContainer className="btn btn-outline-secondary">
            <span className="mr-2">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span> my cart ({cart.length})
          </ButtonContainer>
        </Link>
      </NavBarContainer>
    );
  }
}

const NavBarContainer = styled.nav`
    background-color: #131a22;
`;

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    color: var(--mainWhite);
    border-color: var(--mainWhite);
`;

export default withProductConsumer(Navbar);