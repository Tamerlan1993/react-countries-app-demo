import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="px-16 bg-Very_Light_Gray">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
