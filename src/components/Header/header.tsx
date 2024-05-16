import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper wrapper">
      <section className="header-left">
        <Link to="/catalog">
          <p>Каталог</p>
        </Link>
      </section>
      <section className="header-right">
        <Link to="/compare">
          <p>СРАВНЕНИЕ</p>
        </Link>
        <div className="header-user">
          <Link to="/user">
            <p>Личный кабинет</p>
          </Link>
          <div className="user-icon"></div>
        </div>
      </section>
    </div>
  );
};

export default Header;
