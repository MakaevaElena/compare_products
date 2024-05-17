import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper wrapper">
      <section className="header-left">
        <NavLink to="/catalog" className={({ isActive }) => (isActive ? "active" : "")}>
          <p>Каталог</p>
        </NavLink>
      </section>
      <section className="header-right">
        <NavLink to="/compare" className={({ isActive }) => (isActive ? "active" : "")}>
          <p>СРАВНЕНИЕ</p>
        </NavLink>
        <div className="header-user">
          <NavLink to="/user" className={({ isActive }) => (isActive ? "active" : "")}>
            <p>Личный кабинет</p>
          </NavLink>
          <div className="user-icon"></div>
        </div>
      </section>
    </div>
  );
};

export default Header;
