import React, { useState } from "react";
import "./chosen-products.css";
import { useAppSelector } from "../../store/slices/hooks.ts";
import SearchModal from "../SearchModal/search-modal.tsx";

const ChosenProducts: React.FC = () => {
  const chosenProducts = useAppSelector((state) => state.data.chosenProducts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNum, setOrderNum] = useState(0);

  const onOpenSearchModal = (event: React.MouseEvent<HTMLElement>, i: number) => {
    setIsModalOpen(!isModalOpen);
    setOrderNum(i);
  };

  return (
    <>
      <div className="choose-products">
        <div>
          <input className="checkbox-diff" type="checkbox" id="diffs" />
          <label htmlFor="diffs">Показать различия</label>
        </div>

        {chosenProducts.map((product, i) => (
          <div className="product" key={i}>
            <div className="top">
              <div className="image">
                <img className="product-img" src={product.productImage} alt="" />
              </div>
              <div
                className={`row-open`}
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  onOpenSearchModal(event, i)
                }></div>
            </div>
            <div className="name">{product.productName}</div>
            {isModalOpen && orderNum === i && <SearchModal />}
          </div>
        ))}
      </div>
    </>
  );
};

export default ChosenProducts;
