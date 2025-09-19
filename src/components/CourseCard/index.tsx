"use client";

import Image from "next/image";
import { parseToBRL } from "@/utils";
import { useRouter } from "next/navigation";
import { Star } from "@geist-ui/icons";
import { useState } from "react";

type Props = {
  course: {
    id: string;
    title: string;
    image: string;
    price: number;
    category: string;
  };
};

const CourseCard = ({ course }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.replace(`/courses/${course.id}`);
  };
  const hadleClickFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("favoritado");
  };
  const handleClickBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("buttonado");
  };

  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-white rounded-lg border-1 border-gray-400 shadow-2xl p-4 flex flex-col justify-between hover:scale-105 transition-transform hover: cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-auto object-cover"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2">{course.title}</h3>
        <Star
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          color={hover ? "#ebc634" : ""}
          className="absolute top-0 right-0"
          onClick={hadleClickFav}
        />
      </div>
      <p className="text-sm text-gray-500 mb-2">{course.category}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-primary-dark">
          {parseToBRL(course.price)}
        </span>
        <button
          className="bg-primary text-white py-1 px-3 rounded-full text-sm hover:bg-primary-dark transition-colors hover:cursor-pointer"
          onClick={handleClickBtn}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
