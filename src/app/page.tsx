import CourseCard from "@/components/CourseCard";
import { cursos } from "@/data/data";

const Home = () => {
  return (
    <main>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Cursos em Destaque
        </h2>
        <div>
          <CourseCard course={cursos[1]} />
        </div>
      </div>
    </main>
  );
};

export default Home;
