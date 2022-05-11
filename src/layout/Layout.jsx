import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="dark:text-white text-Very_Dark_Blue_Text">
      <Header />
      <div className="px-16 bg-Very_Light_Gray dark:bg-Very_Dark_Blue">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
