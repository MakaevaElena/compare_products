import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/header.tsx";
import React from "react";
import Catalog from "../Catalog/catalog.tsx";
import Compare from "../Compare/compare.tsx";
import User from "../User/user.tsx";
import PageNotFound from "../PageNotFound/page-not-found.tsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path={`/`} element={<Catalog />} />
        <Route path={`/catalog`} element={<Catalog />} />
        <Route path={`/compare`} element={<Compare />} />
        <Route path={`/user`} element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
