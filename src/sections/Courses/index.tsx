import { featuredCourses } from "@/data/data";
import CourseCard from "@/components/CourseCard";

const Courses = () => {
  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Cursos em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {featuredCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
