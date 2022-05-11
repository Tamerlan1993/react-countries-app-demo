import React, { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs"
function Header() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <header className="flex justify-between px-16 py-4 items-center shadow-lg dark:bg-Dark_Blue">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <p className="flex items-center gap-2 cursor-pointer" onClick={() => {
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
      }}>
        {darkMode ? <BsMoon /> : <BsMoonFill />} Dark Mode
      </p>
    </header>
  );
}

export default Header;
