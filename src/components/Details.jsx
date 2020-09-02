import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import { HomeRoute } from "../constants/routing";
import { withProductConsumer } from "../context/ProductContext";
import { ButtonContainer } from "./Button";


class Details extends Component {

  componentDidMount() {
    if (Object.keys(this.props.data.detailProduct).length === 0 && this.props.data.detailProduct.constructor === Object) {
      this.props.history.push(HomeRoute)
    }
  }

  render() {
    const {
      id,
      company,
      imgs,
      info,
      price,
      title,
      inCart,
    } = this.props.data.detailProduct;

    const renderImges = (imgs) => {
      if (!imgs) {
        return [];
      }
      let images = imgs.map((item) => {
        return {
          original: item,
          thumbnail: item,
        }
      })

      return images;
    }

    return (
      <React.Fragment>
        <div className="container py-5">
          {/* product info */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              {/* <img src={img} className="img-fluid" alt="product" /> */}
              <ImageGallery items={renderImges(imgs)} showPlayButton={false} showFullscreenButton={false} />;
            </div>
            {/* product text */}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>{title}</h2>
              <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                made by : <span className="text-uppercase">{company}</span>
              </h5>
              <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                price : <span>$</span> {price}
              </h5>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                info:
                  </p>
              <p className="text-muted lead">{info}</p>
              {/* buttons */}
              <div>
                {
                  !inCart ?
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        this.props.data.addToCart(id);
                        this.props.data.openModal(id);
                      }}
                    >
                      add to cart
                </ButtonContainer> : <InCartDisplayContainer>inCart</InCartDisplayContainer>
                }

              </div>
            </div>
          </div>
          {/* end product info */}
        </div>
      </React.Fragment>
    );
  }
}


const InCartDisplayContainer = styled.div`
  border: 0.05rem solid var(--lightBlue);
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-color: var(--mainDark);
  color:var(--mainDark);
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  width: fit-content;
`;

export default withRouter(withProductConsumer(Details));