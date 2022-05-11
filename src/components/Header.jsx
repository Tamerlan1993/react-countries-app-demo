import React from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between px-16 py-4 items-center shadow-lg">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <p className="flex items-center gap-2 cursor-pointer">
        <FaMoon /> Dark Mode
      </p>
    </header>
  );
}

export default Header;
