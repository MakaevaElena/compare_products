import React, { useState } from "react";
import "./search-modal.css";
import { PRODUCTS } from "../../products.ts";
import { useAppSelector } from "../../store/slices/hooks.ts";

const SearchModal: React.FC = () => {
  const [value, setValue] = useState("");
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const chosenProducts = useAppSelector((state) => state.data.chosenProducts);
  const notIncludesProducts = PRODUCTS.filter((product) => !chosenProducts.includes(product));

  // function handleSearchClick() {
  //   dispatch(setSearchValue(value));
  // }

  function handleChange(evt: React.FormEvent<HTMLInputElement>) {
    if (evt?.target instanceof HTMLInputElement) {
      setValue(evt?.target.value);
    }
  }

  return (
    <div className="modal-wrapper">
      <form>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={handleChange}
        />
        {/* <div className="search-button" onClick={handleSearchClick} ref={searchButtonRef}></div> */}

        <div className="product-list">
          {notIncludesProducts.map((product, i) => (
            <div className="product" key={i}>
              <div className="row-choose"></div>
              <div className="image">
                <img className="product-img" src={product.productImage} alt="" />
              </div>
              <div className="name">{product.productName}</div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SearchModal;
