import React from "react";
import { PRODUCTS } from "../../products.tsx";
import "./chosen-products.css";

type ChosenProductsProps = {
  chosenCount: number;
};

const ChosenProducts: React.FC<ChosenProductsProps> = (props) => {
  return (
    <>
      <div className="choose-products">
        <div>
          <input type="checkbox" id="diffs" />
          <label htmlFor="diffs">Показать различия</label>
        </div>

        {PRODUCTS.slice(0, props.chosenCount).map((product, i) => (
          <div className="product" key={i}>
            <div className="top">
              <div className="image">
                <img className="product-img" src={product.productImage} alt="" />
              </div>
              <div className="row-open"></div>
            </div>
            <div className="name">{product.productName}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChosenProducts;
