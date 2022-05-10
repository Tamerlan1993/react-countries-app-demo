import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import CountriesPage from "../pages/CountriesPage";
import Country from "../pages/Country";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CountriesPage />} />
        <Route path="/country/:name" element={<Country />} />
      </Route>
    </Routes>
  );
}

export default Router;
