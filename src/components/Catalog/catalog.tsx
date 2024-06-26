import React from "react";
import "./catalog.css";
import { COMPARE_PARAMS } from "../../constants.tsx";
import { useAppSelector } from "../../store/slices/hooks.ts";

const Catalog: React.FC = () => {
  const PRODUCTS = useAppSelector((state) => state.data.products);

  return (
    <div className="wrapper">
      {PRODUCTS.map((product, i) => {
        return (
          <div className="product-catalog" key={i}>
            <p className="product-title">{product.productName}</p>
            <div className="image">
              <img className="product-img" src={product.productImage} alt="" />
            </div>
            <div className="info" key={i}>
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
                    <p className="param-title">{param}</p>
                    <p className="param-image">{newParam}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
