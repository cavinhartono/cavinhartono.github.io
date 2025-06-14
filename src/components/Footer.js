import React from "react";
import Github from "../../public/icons/github.svg";
import Linkedin from "../../public/icons/linkedin.svg";
import Newspaper from "../../public/icons/newspaper.svg";

export default function Footer() {
  return (
    <footer className="text-xs p-6 flex w-full justify-between items-end">
      <p className="text-white-700 font-medium">
        &copy; 2025 by
        <a href="https://www.github.com/cavinhartono"> Cavin Hartono</a> - Build
        with NextJS and TailwindCSS
      </p>
      <ul className="flex gap-4 mt-2">
        <a href="https://www.glints.com/cavinhartono">
          <Newspaper className="w-4 h-4 fill-white-950" />
        </a>
        <a href="https://www.linkedin.com/cavinhartono">
          <Linkedin className="w-4 h-4 fill-white-950" />
        </a>
        <a href="https://www.github.com/cavinhartono">
          <Github className="w-4 h-4 fill-white-950" />
        </a>
      </ul>
    </footer>
  );
}
