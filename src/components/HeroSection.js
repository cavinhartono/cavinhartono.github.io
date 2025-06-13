import React from "react";
import Image from "next/image";
import Copy from "../../public/icons/copy.svg";
import Add from "../../public/icons/add.svg";
import Bullet from "../../public/icons/ellipse.svg";
import Foto from "../../public/images/me.png";

export default function HeroSection() {
  return (
    <section className="bg-white-50 p-6 my-4">
      <ul className="flex justify-between items-center text-sm mb-6">
        <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-white-500 text-xl">
          Software Engineering
        </li>
        <li>
          <a
            href="#"
            className="relative text-xl uppercase font-semibold bg-green-100 text-green-700 px-4 py-1 rounded-full flex items-center gap-2"
          >
            <Bullet className="w-4 h-4" />{" "}
            <span className="md:hidden">Ready for Work</span>
          </a>
        </li>
      </ul>
      <div className="my-10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left w-[380px]">
          <h2 className="text-4xl font-bold">I'm Cavin Hartono</h2>
          <p className="text-xl/loose mt-2">
            Currently, as Student of Computer Science at <b>IM College</b> from
            Bandung, Indonesia.
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:duration-300 shadow-for-button transition-bg-smooth bg-blue-200 active:bg-blue-200 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-semibold"
            >
              <Add className="w-4 h-4" /> Hire Me
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-white-950 bg-[#FAFBFC] hover:bg-[#F3F4F6] hover:duration-300 shadow-for-button transition-bg-smooth text-white-950 px-3 py-1 rounded-md font-semibold"
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
