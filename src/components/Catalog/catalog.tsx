import React from "react";
import "./catalog.css";
import { COMPARE_PARAMS } from "../../constants.tsx";
import { PRODUCTS } from "../../products.tsx";

const Catalog: React.FC = () => {
  return (
    <div className="catalog wrapper">
      <h2>Catalog</h2>

      {PRODUCTS.map((product, i) => {
        return (
          <>
            <p className="product-title">{product.productName}</p>
            <div className="image">
              <img className="product-img" src={product.productImage} alt="" />
            </div>
            <div className="product" key={i}>
              {Object.keys(COMPARE_PARAMS).map((param: string, i: number) => {
                let newParam:
                  | string
                  | number
                  | boolean
                  | React.JSX.Element
                  | Iterable<React.ReactNode>
                  | null
                  | undefined;

                switch (product[COMPARE_PARAMS[param]]) {
                  case true:
                    newParam = <img src="./img/true.png" alt="" />;
                    break;
                  case false:
                    newParam = <img src="./img/false.png" alt="" />;
                    break;

                  default:
                    newParam = product[COMPARE_PARAMS[param]];
                }
                return (
                  <div className="params" key={i}>
                    <p>{param}</p>
                    <p>{newParam}</p>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Catalog;
