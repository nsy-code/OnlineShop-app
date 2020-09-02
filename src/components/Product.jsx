import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { ProductConsumer } from "../context/ProductContext";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    const renderImgBtn = (value) => {
      if (inCart) {
        return <p className="text-capitalize mb-0 cart-check-icon" disabled>
          <FontAwesomeIcon icon={faCheck} />
        </p>;
      } else {
        return <button
          className="cart-btn"
          disabled={false}
          onClick={() => {
            value.addToCart(id);
            value.openModal(id);
          }}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      }


    };
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                {
                  renderImgBtn(value)
                }
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between" >
            <p className="align-self-center mb-0">{title}</p>
            <p className="font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </p>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    font-size: 0.8rem;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    top: 0.5em;
    right: 0.7em;
    padding: 0.2rem 0.4rem;
    background: var(--iconBackground);
    border: none;
    color: transparent;
    fort-size: 1.4rem;
    border-radius: 0.5 0 0 0;
    transition: all 0.5s linear;
  }
  .cart-check-icon {
    position: absolute;
    top: 0.5em;
    right: 0.7em;
    padding: 0.2rem 0.4rem;
    color: var(--mainDark);
  }
  .img-container:hover .cart-btn {
    color: var(--lightDark);
  }
  .cart-btn :hover {
    color: var(--mainDark);
    cursor: pointer;
  }
`;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};

export default Product;
