import React, { useEffect, useState } from "react";
import "./search-modal.css";
import { useAppSelector } from "../../store/slices/hooks.ts";
import { Product } from "../../store/slices/types.ts";
import { setChosenProducts, setIsModalOpen } from "../../store/slices/dataSlice.ts";
import { useDispatch } from "react-redux";

const SearchModal: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const PRODUCTS = useAppSelector((state) => state.data.products);
  const chosenProducts = useAppSelector((state) => state.data.chosenProducts);
  const changedProductId = useAppSelector((state) => state.data.changedProductId);
  const inModalProducts = PRODUCTS.filter((product) => !chosenProducts.includes(product));
  const searchingProducts = value
    ? inModalProducts.filter((product) =>
        product.productName.toLowerCase().includes(value.toLowerCase())
      )
    : inModalProducts;

  function handleChange(evt: React.FormEvent<HTMLInputElement>) {
    if (evt?.target instanceof HTMLInputElement) {
      setValue(evt?.target.value);
    }
  }

  const handleChangeProduct = (product: Product) => {
    const copyChosenProducts = chosenProducts.slice();

    copyChosenProducts.splice(changedProductId, 1, product);
    dispatch(setChosenProducts(copyChosenProducts));
    dispatch(setIsModalOpen(false));
  };

  useEffect(() => {
    dispatch(setChosenProducts(chosenProducts));
  }, [chosenProducts, dispatch]);

  return (
    <div className="modal-wrapper">
      <form>
        {inModalProducts.length > 3 && (
          <input
            ref={inputRef}
            className="modal search-input"
            type="text"
            placeholder="Поиск"
            value={value}
            onChange={handleChange}
          />
        )}

        <div className="modal product-list">
          {searchingProducts.map((product, i) => (
            <div className="modal product" key={i}>
              <div className="modal row-choose" onClick={() => handleChangeProduct(product)}></div>
              <div className="modal image">
                <img className="modal product-img" src={product.productImage} alt="" />
              </div>
              <div className="modal name">{product.productName}</div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SearchModal;
