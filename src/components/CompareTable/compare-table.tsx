import React from "react";
import "./compare-table.css";
import { PRODUCTS } from "../../products.tsx";
import { COMPARE_PARAMS } from "../../constants.tsx";

type CompareTableProps = {
  chosenCount: number;
};

const CompareTable: React.FC<CompareTableProps> = (props) => {
  return (
    <div className="table-wrapper wrapper">
      {Object.keys(COMPARE_PARAMS).map((param: string, i: number) => {
        return (
          <div key={i} className="compare-row">
            <div className="param-title">
              <p>{param}</p>
            </div>

            {PRODUCTS.slice(0, props.chosenCount).map((product, i) => {
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

export default CompareTable;
