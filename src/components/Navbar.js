import React from "react";
import Home from "../../public/icons/home.svg";
import Project from "../../public/icons/browsers.svg";
import School from "../../public/icons/school.svg";
import Add from "../../public/icons/add.svg";

export default function Navbar() {
  return (
    <header className="sticky top-2 p-4 flex justify-between items-center bg-white-50 dark:bg-gray-800 shadow-md rounded-xl z-10">
      <nav className="flex gap-6">
        <a href="#" className="opacity-75 hover:opacity-100 flex items-center">
          <Home className="w-8 h-8 fill-white-950" />
        </a>
        <a href="#" className="opacity-75 hover:opacity-100 flex items-center">
          <Project className="w-8 h-8 fill-white-950" />
        </a>
        <a href="#" className="opacity-75 hover:opacity-100 flex items-center">
          <School className="w-8 h-8 fill-white-950" />
        </a>
      </nav>
      <div className="flex gap-4 items-center">
        <button>Icon</button>
        <a
          href="#"
          className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-medium"
        >
          <Add className="w-6 h-6 fill-blue-700" /> Hire Me
        </a>
      </div>
    </header>
  );
}
