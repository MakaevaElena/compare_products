import React, { useState } from "react";
import "./chosen-products.css";
import { useAppSelector } from "../../store/slices/hooks.ts";
import SearchModal from "../SearchModal/search-modal.tsx";
import { Product } from "../../store/slices/types.ts";
import { useDispatch } from "react-redux";
import {
  setChangedProduct,
  setChangedProductId,
  setIsModalOpen,
  setShowChanges,
} from "../../store/slices/dataSlice.ts";

const ChosenProducts: React.FC = () => {
  const PRODUCTS = useAppSelector((state) => state.data.products);
  const dispatch = useDispatch();
  const chosenProducts = useAppSelector((state) => state.data.chosenProducts);
  const showChanges = useAppSelector((state) => state.data.showChanges);
  const isModalOpen = useAppSelector((state) => state.data.isModalOpen);
  const changedProductId = useAppSelector((state) => state.data.changedProductId);

  const [orderNum, setOrderNum] = useState(0);

  const onOpenSearchModal = (event: React.MouseEvent<HTMLElement>, i: number, product: Product) => {
    setOrderNum(i);
    dispatch(setChangedProduct(product));
    dispatch(setChangedProductId(+i));
    dispatch(setIsModalOpen(true));
    if (changedProductId === i) dispatch(setIsModalOpen(!isModalOpen));
  };

  const handleChange = () => {
    dispatch(setShowChanges(!showChanges));
  };

  return (
    <>
      <div className="choose-products">
        <div>
          <input className="checkbox-diff" type="checkbox" id="diffs" onChange={handleChange} />
          <label htmlFor="diffs">Показать различия</label>
        </div>

        {chosenProducts.map((product, i) => (
          <div className="product" key={i}>
            <div className="top">
              <div className="image">
                <img className="product-img" src={product.productImage} alt="" />
              </div>
              {chosenProducts.length !== PRODUCTS.length && (
                <div
                  className={`row-open`}
                  onClick={(event: React.MouseEvent<HTMLElement>) =>
                    onOpenSearchModal(event, i, product)
                  }></div>
              )}
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
