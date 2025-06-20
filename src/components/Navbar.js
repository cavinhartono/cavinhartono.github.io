import React from "react";
import Home from "../../public/icons/home.svg";
import Project from "../../public/icons/browsers.svg";
import School from "../../public/icons/school.svg";
import Moon from "../../public/icons/moon.svg";
import Add from "../../public/icons/add.svg";

export default function Navbar() {
  return (
    <header className="sticky top-2 px-4 py-3 flex justify-between items-center bg-white-50 dark:bg-gray-800 boxShadow-primary rounded-xl z-10">
      <nav className="flex gap-6">
        <a href="#" className="opacity-75 hover:opacity-100 flex items-center">
          <Home className="w-6 h-6 fill-white-950" />
        </a>
        <a href="#" className="opacity-75 hover:opacity-100 flex items-center">
          <Project className="w-6 h-6 fill-white-950" />
        </a>
        <a href="#" className="opacity-75 hover:opacity-100 flex items-center">
          <School className="w-6 h-6 fill-white-950" />
        </a>
      </nav>
      <div className="flex gap-4 items-center">
        <button>
          <Moon className="w-6 h-6 stroke-white-950" />
        </button>
        <a
          href="#"
          className="flex items-center gap-2 hover:duration-300 shadow-for-button transition-bg-smooth border border-blue-600 bg-blue-200 active:bg-blue-300 hover:bg-blue-300 text-blue-600 px-4 py-2 rounded-md font-semibold"
        >
          <Add className="w-6 h-6" /> Hire Me
        </a>
      </div>
    </header>
  );
}
