import Image from "next/image";
import { parseToBRL } from "@/utils";

type Props = {
  course: {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
  };
};

const CourseCard = ({ course }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      <Image
        src={course.image}
        alt={course.title}
        width={400}
        height={200}
        className="w-full h-auto object-cover"
      />
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{course.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary-dark">
            {parseToBRL(course.price)}
          </span>
          <button className="bg-primary text-white py-1 px-3 rounded-full text-sm hover:bg-primary-dark transition-colors">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
