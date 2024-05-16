// import React, { useEffect, useState } from "react";
import "./compare.css";
import ChosenProducts from "../ChosenProducts/chosen-products.tsx";
import CompareTable from "../CompareTable/compare-table.tsx";
import { PRODUCTS } from "../../products.ts";
import { useDispatch } from "react-redux";
import { setChosenCount } from "../../store/slices/dataSlice.ts";
import React from "react";
import { useAppSelector } from "../../store/slices/hooks.ts";

const Compare: React.FC = () => {
  const dispatch = useDispatch();
  const chosenCount = useAppSelector((state) => state.data.chosenCount);
  // const [chosenCount, setChosenCount] = useState(3);

  const handleOnclick = (event) => {
    dispatch(setChosenCount(+event.target.innerHTML));
  };

  const countOfProducts = () => (
    <>
      {PRODUCTS.map((el, i) => {
        if (i > 0) {
          return (
            <div key={i} className={`count-for-compare ${chosenCount === i + 1 ? "chosen" : ""}`}>
              <p onClick={(event) => handleOnclick(event)}>{i + 1}</p>
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
            {countOfProducts()}
          </div>
        </div>
        <ChosenProducts />
      </div>
      <CompareTable />
    </>
  );
};

export default Compare;
