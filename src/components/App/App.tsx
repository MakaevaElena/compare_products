import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/header.tsx";
import React from "react";
import Catalog from "../Catalog/catalog.tsx";
import Compare from "../Compare/compare.tsx";
import User from "../User/user.tsx";
import PageNotFound from "../PageNotFound/page-not-found.tsx";
import Footer from "../Footer/footer.tsx";
import { setIsModalOpen } from "../../store/slices/dataSlice.ts";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/slices/hooks.ts";

function App() {
  const dispatch = useDispatch();
  const isModalOpen = useAppSelector((state) => state.data.isModalOpen);

  const closeModal = (event: React.FormEvent<HTMLDivElement>) => {
    if (
      isModalOpen &&
      event.target instanceof HTMLElement &&
      !event.target.className.match(/modal|row-open/gim)
    )
      dispatch(setIsModalOpen(false));
  };

  return (
    <div
      className="container"
      onClick={(event: React.FormEvent<HTMLDivElement>) => closeModal(event)}>
      <Header />
      <Routes>
        <Route path={`/`} element={<Catalog />} />
        <Route path={`/catalog`} element={<Catalog />} />
        <Route path={`/compare`} element={<Compare />} />
        <Route path={`/user`} element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
