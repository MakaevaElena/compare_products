import React from "react";
import { PRODUCTS } from "../../products.tsx";
import { COMPARE_PARAMS } from "./compare-table.tsx";

export const CompareTable: React.FC = () => {
  return (
    <div className="table-wrapper wrapper">
      {Object.keys(COMPARE_PARAMS).map((param: string, i: number) => {
        return (
          <div key={i} className="compare-row">
            <div className="param-title">
              <p>{param}</p>
            </div>

            {PRODUCTS.map((product, i) => {
              console.log(product[COMPARE_PARAMS[param]]);

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
                  newParam = <img src="./true.png" alt="" />;
                  break;
                case false:
                  newParam = <img src="./../../assets/img/false.png" alt="" />;
                  break;

                default:
                  newParam = product[COMPARE_PARAMS[param]];
              }

              return (
                <div className="param-value" key={i}>
                  <p>{newParam}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
