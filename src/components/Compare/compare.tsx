import "./compare.css";
import ChosenProducts from "../ChosenProducts/chosen-products.tsx";
import CompareTable from "../CompareTable/compare-table.tsx";
import { useDispatch } from "react-redux";
import { setChosenCount, setChosenProducts } from "../../store/slices/dataSlice.ts";
import React, { useEffect } from "react";
import { useAppSelector } from "../../store/slices/hooks.ts";

const Compare: React.FC = () => {
  const dispatch = useDispatch();
  const PRODUCTS = useAppSelector((state) => state.data.products);
  const chosenCount = useAppSelector((state) => state.data.chosenCount);

  const handleOnclick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLElement) dispatch(setChosenCount(+event.target.innerHTML));
  };

  useEffect(() => {
    dispatch(setChosenProducts(PRODUCTS.slice(0, chosenCount)));
  }, [PRODUCTS, chosenCount, dispatch]);

  const countOfProducts = () => (
    <>
      {PRODUCTS.map((_el, i) => {
        if (i > 0 && i < 6) {
          return (
            <div key={i} className={`count-for-compare ${chosenCount === i + 1 ? "chosen" : ""}`}>
              <p onClick={(event: React.MouseEvent<HTMLElement>) => handleOnclick(event)}>
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
