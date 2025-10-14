import { notFound } from "next/navigation";
import { getCourseById } from "@/utils/";
import { parseToBRL } from "@/utils/";
import { getCoursesByCategory } from "@/utils/";
import CourseCard from "@/components/CourseCard";

const CoursePage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const course = getCourseById(id);

  if (!course) {
    return notFound();
  }

  const recommendedCourses = getCoursesByCategory(course.category)
    .filter((c) => c.id !== course.id)
    .slice(0, 3);

  return (
    <>
      <section className="container mx-auto p-8 max-w-6xl flex justify-between md:flex-row flex-col">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
          <span className="mb-4">{course.category}</span>
          <p className="mb-4 max-w-md">{course.description}</p>
        </div>
        <div className="flex flex-col">
          <img className="mb-4" src={course.image} alt={course.title} />
          <span className="mb-4 text-2xl">{parseToBRL(course.price)}</span>
          <button className="bg-primary text-white py-2 px-4 rounded mt-4 hover:bg-primary-dark cursor-pointer">
            Comprar
          </button>
        </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto p-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Cursos Recomendados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
