import React from "react";
import "./compare.css";
import ChosenProducts from "../ChosenProducts/chosen-products.tsx";
import CompareTable from "../CompareTable/compare-table.tsx";

const Compare: React.FC = () => {
  return (
    <>
      <div className="compare-wrapper wrapper">
        <h2>Compare</h2>

        <div className="compare-nav">
          <div className="compare-title">
            <h2>Смартфоны</h2>
          </div>
          <div className="compare-count">
            <p>Отобразить товары</p>
            <div>2 3 4 5 6</div>
          </div>
        </div>
        <ChosenProducts />
      </div>
      <CompareTable />
    </>
  );
};

export default Compare;
