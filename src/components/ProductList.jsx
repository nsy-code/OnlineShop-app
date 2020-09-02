import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context/ProductContext";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="MEN'S BASKETBALL SHOES" />

            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((item) => {
                    return (
                      <Product
                        key={item.id}
                        product={item}
                        handleDetail={value.handleDetail}
                      />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
