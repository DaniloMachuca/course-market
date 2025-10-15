"use client";

import CourseCard from "@/components/CourseCard";
import { RootReducer } from "@/store";
import { useSelector } from "react-redux";
import Link from "next/link";

const Favorites = () => {
  const { list } = useSelector((state: RootReducer) => state.fav);
  const isEmpty = list.length === 0;

  return (
    <section className="container mx-auto p-8 max-w-6xl min-h-screen">
      <h3 className="text-3xl font-bold mb-8 text-gray-800">Favoritos</h3>
      {isEmpty ? (
        <>
          <p className="text-2xl mb-8">
            Você não possui cursos favoritos no momento
          </p>
          <Link
            href="/home/courses"
            className="text-2x1 bg-primary text-white py-2 px-3 rounded hover:bg-primary-dark transition-colors hover:cursor-pointer"
          >
            Procurar por Cursos
          </Link>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {list.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
