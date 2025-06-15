import React from "react";

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

export default function PostList() {
  return (
    <section className="mt-2 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-white-700">Recent Posts</h1>
        <a
          href="#"
          className="flex items-center gap-2 border border-white-950 bg-white-50 hover:bg-white-100 active:bg-white-200 hover:duration-300 shadow-for-button transition-bg-smooth text-white-950 px-3 py-1 rounded-md font-semibold text-lg"
        >
          View All <Arrow className="w-4 h-4 fill-white-950" />
        </a>
      </div>
      <ul className="flex flex-col gap-6 mt-6">
        {projects.slice(0, 3).map((project, idx) => (
          <li
            key={idx}
            className="rounded-xl boxShadow-primary bg-white-200 hover:bg-white-300 active:bg-white-300 hover:duration-300 hover:brightness-75 transition overflow-hidden"
          >
            <a href="#">
              <figure className="h-80">
                <img src={project.img} className="object-cover w-full h-full" />
              </figure>
              <figcaption className="p-4 flex flex-col-reverse gap-2">
                <h3 className="text-2xl font-medium text-white-950">
                  {project.title}
                </h3>
                <p className="text-lg text-white-700 dark:text-gray-300">
                  {project.subtitle}
                </p>
              </figcaption>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
