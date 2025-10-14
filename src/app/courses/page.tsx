"use client";

import CourseCard from "@/components/CourseCard";
import { getCoursesByCategory } from "@/utils/";
import { useState } from "react";

import { Courses } from "@/data/data";

const CoursesTab = () => {
  const [category, setCategory] = useState("todos");

  const filteredCourses = getCoursesByCategory(category);

  return (
    <>
      <section className="container mx-auto p-8 max-w-6xl">
        <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Todos os Cursos
        </h3>
        <div className="container mx-auto p-8 max-w-6xl block lg:grid lg:grid-cols-5">
          <aside className="col-span-1 lg:border-r-2 mr-4 flex flex-col">
            <h4 className="text-xl font-bold mb-4">Categorias</h4>
            <ul className="list-none flex lg:flex-col flex-wrap justify-between gap-0.5">
              <li className="mb-4 ">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "todos" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("todos")}
                >
                  Todos
                </button>
              </li>
              <li className="mb-4">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "Back-end" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("Back-end")}
                >
                  Back-end
                </button>
              </li>
              <li className="mb-4">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "Front-end" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("Front-end")}
                >
                  Front-end
                </button>
              </li>
              <li className="mb-4">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "Design" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("Design")}
                >
                  Design
                </button>
              </li>
              <li className="mb-4">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "Banco de Dados" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("Banco de Dados")}
                >
                  Banco de Dados
                </button>
              </li>
              <li className="mb-4">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "Infraestrutura" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("Infraestrutura")}
                >
                  Infraestrutura
                </button>
              </li>
              <li className="mb-4">
                <button
                  className={
                    "bg-gray-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors duration-300 " +
                    (category === "Cibersegurança" ? "bg-primary-dark" : "")
                  }
                  onClick={() => setCategory("Cibersegurança")}
                >
                  Cibersegurança
                </button>
              </li>
            </ul>
          </aside>
          <div className="grid col-span-4 lg:pl-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category === "todos"
                ? Courses.map((c) => <CourseCard key={c.id} course={c} />)
                : filteredCourses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesTab;
