import React from "react";
import "./compare-table.css";
import { COMPARE_PARAMS } from "../../constants.tsx";
import { useAppSelector } from "../../store/slices/hooks.ts";

type newParamType =
  | string
  | number
  | boolean
  | React.JSX.Element
  | Iterable<React.ReactNode>
  | null
  | undefined;

const CompareTable: React.FC = () => {
  const chosenProducts = useAppSelector((state) => state.data.chosenProducts);
  const showChanges = useAppSelector((state) => state.data.showChanges);

  const isSameParams = (param) => {
    const setOfParams = new Set();
    chosenProducts.map((product, i) => {
      setOfParams.add(product[COMPARE_PARAMS[param]]);
    });
    return showChanges && setOfParams.size === 1;
  };

  const renderParamValues = (param) => {
    return chosenProducts.map((product, i) => {
      let newParam: newParamType;

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
    });
  };

  return (
    <div className="table-wrapper wrapper">
      {Object.keys(COMPARE_PARAMS).map((param: string, i: number) => {
        return (
          !isSameParams(param) && (
            <div key={i} className="compare-row">
              <div className="param-title">
                <p>{param}</p>
              </div>

              {renderParamValues(param)}
            </div>
          )
        );
      })}
    </div>
  );
};

export default CompareTable;
