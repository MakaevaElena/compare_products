import React, { useState } from "react";
import "./compare.css";
import ChosenProducts from "../ChosenProducts/chosen-products.tsx";
import CompareTable from "../CompareTable/compare-table.tsx";
import { PRODUCTS } from "../../products.tsx";

const Compare: React.FC = () => {
  const [chosenCount, setChosenCount] = useState(3);

  const handleOnclick = (event) => {
    Array.prototype.slice
      .call(event.target.parentNode.parentNode.childNodes)
      .forEach((el) => el.classList.remove("chosen"));
    event.target.classList.add("chosen");
    setChosenCount(event.target.innerHTML);
  };

  const countOfProducts = (
    <>
      {PRODUCTS.map((el, i) => {
        if (i > 0) {
          return (
            <div key={i}>
              <p className="count-for-compare" onClick={(event) => handleOnclick(event)}>
                {i + 1}
              </p>
            </div>
          );
        }
      })}
    </>
  );

  return (
    <>
      <div className="compare-wrapper wrapper">
        <div className="compare-nav">
          <div className="compare-title">
            <h4>Смартфоны</h4>
          </div>
          <div className="compare-count">
            <p>Отобразить товары: </p>
            {countOfProducts}
          </div>
        </div>
        <ChosenProducts chosenCount={chosenCount} />
      </div>
      <CompareTable chosenCount={chosenCount} />
    </>
  );
};

export default Compare;
