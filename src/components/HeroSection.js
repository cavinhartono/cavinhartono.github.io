import React from "react";
import Image from "next/image";
import Copy from "../../public/icons/copy.svg";
import Add from "../../public/icons/add.svg";
import Bullet from "../../public/icons/ellipse.svg";
import Foto from "../../public/images/me.png";

export default function HeroSection() {
  return (
    <section className="p-6 mt-2">
      <ul className="flex justify-between items-center text-sm mb-6">
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-white-700 text-white-700 text-xl">
          Software Engineering
        </li>
        <li>
          <a
            href="#"
            className="relative text-lg hover:duration-300 shadow-for-button transition-bg-smooth font-semibold bg-green-200 text-green-500 border border-green-500 hover:bg-green-300 px-4 py-1 rounded-full flex items-center gap-2"
          >
            <Bullet className="w-4 h-4" />{" "}
            <span className="block max-md:hidden">Ready for Work</span>
          </a>
        </li>
      </ul>
      <div className="my-10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left w-[380px]">
          <h2 className="text-4xl font-bold">I'm Cavin Hartono</h2>
          <p className="text-xl/loose mt-2 text-white-700">
            Currently, as Student of Computer Science at <b>IM College</b> from
            Bandung, Indonesia.
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:duration-300 shadow-for-button transition-bg-smooth border border-blue-600 bg-blue-200 active:bg-blue-300 hover:bg-blue-300 text-blue-600 px-4 py-2 rounded-md font-semibold text-lg"
            >
              <Add className="w-6 h-6" /> Hire Me
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-white-950 bg-white-200 hover:bg-white-300 active:bg-white-300 hover:duration-300 shadow-for-button transition-bg-smooth text-white-950 px-4 py-2 rounded-md font-semibold text-lg"
            >
              <Copy className="w-4 h-4" /> Download
            </a>
          </div>
        </div>
        <figure className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-100 bg-blue-400 shadow">
          <Image
            src={Foto}
            alt="Cavin Hartono"
            className="object-cover h-full w-full"
          />
        </figure>
      </div>
    </section>
  );
}
