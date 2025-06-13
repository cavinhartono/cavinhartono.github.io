import React from "react";
import Arrow from "../../public/icons/arrow.svg";

const projects = [
  {
    title: "Mobile Banking",
    subtitle: "Diagrams and implementation CLI using Java 17",
    img: "https://picsum.photos/id/29/600/400",
  },
  {
    title: "E-Learning Driving School",
    subtitle: "Website using PHP 8",
    img: "https://picsum.photos/id/28/1280/720",
  },
  {
    title: "Shop Landing Page",
    subtitle: "AngularJS and TailwindCSS 4",
    img: "https://picsum.photos/id/33/1280/720",
  },
  {
    title: "20 Components of JavaScript",
    subtitle: "Vanilla JavaScript",
    img: "https://picsum.photos/id/25/1280/720",
  },
];

export default function ProjectList() {
  return (
    <section className="my-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Recent Projects</h1>
        <a
          href="#"
          className="flex items-center gap-2 border border-white-950 bg-[#FAFBFC] hover:bg-[#F3F4F6] hover:duration-300 shadow-for-button transition-bg-smooth text-white-950 px-3 py-1 rounded-md font-semibold"
        >
          View All <Arrow className="w-4 h-4 fill-white-950" />
        </a>
      </div>
      <ul className="flex flex-col gap-6 mt-6">
        {projects.slice(0, 4).map((project, idx) => {
          <li
            key={idx}
            className="rounded-xl shadow hover:brightness-75 transition"
          >
            <a href="#">
              <figure className="h-60 overflow-hidden">
                <img src={project.img} className="object-cover w-full h-full" />
              </figure>
              <figcaption className="p-4 flex flex-col-reverse gap-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.subtitle}
                </p>
              </figcaption>
            </a>
          </li>;
        })}
      </ul>
    </section>
  );
}
