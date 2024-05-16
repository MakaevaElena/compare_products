import React from "react";
import "./compare-table.css";
import { PRODUCTS } from "../../products.tsx";
// import imageTrue from "../../assets/img/true.png";
// import imageFalse from "../../assets/img/false.png";

const COMPARE_PARAMS = {
  ПРОИЗВОДИТЕЛЬ: "producer",
  "ГОД РЕЛИЗА": "year",
  "ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)": "diagonal",
  "СТРАНА-ПРОИЗВОДИТЕЛЬ": "country",
  "ОБЪЕМ ПАМЯТИ": "memory",
  "ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА": "fqc",
  NFC: "NFC",
  "ПОДДЕРЖКА ESIM": "ESIM",
  "ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ": "wirelessPower",
  СТОИМОСТЬ: "price",
};

const CompareTable: React.FC = () => {
  return (
    <div className="table-wrapper wrapper">
      {Object.keys(COMPARE_PARAMS).map((param: string, i: number) => {
        return (
          <div key={i} className="compare-row">
            <div className="param-title">
              <p>{param}</p>
            </div>

            {PRODUCTS.map((product, i) => {
              // console.log(product[COMPARE_PARAMS[param]]);

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
